import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import enUsLanguage from "./locales/en-us/language.json";
import ptBrLanguage from "./locales/pt-br/language.json";

export interface LocaleContext {
    t: (tagName: string) => string,
    language: LocaleTagName,
    setLanguage: React.Dispatch<React.SetStateAction<LocaleTagName>>,
}

export enum LocaleTagName {
    PT_BR = "pt-BR",
    EN_US = "en-US",
}

const Context = createContext({} as LocaleContext);

export function useLocaleContext() {
    return useContext(Context);
}

export function LocaleContextProvider({ children }: React.PropsWithChildren) {
    const prefferedLanguage = useMemo(() => {
        return navigator.language.startsWith("pt") ? "pt-BR" : "en-US";
    }, [navigator]);

    const [language, setLanguage] = useState<LocaleTagName>(localStorage.getItem("lang") as LocaleTagName ?? prefferedLanguage);

    const languageMap = useMemo(() => {
        switch (language) {
            case LocaleTagName.PT_BR: return (ptBrLanguage as Record<string, string>);
            case LocaleTagName.EN_US: return (enUsLanguage as Record<string, string>);
            default: throw new Error("Language not available");
        }
    }, [language]);

    const translate = useCallback((tagName: string) => {
        if (tagName in languageMap) {
            return languageMap[tagName];
        }

        throw new Error(`Translation not available for ${tagName} in ${language}`);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    return (
        <Context.Provider value={{ t: translate, language, setLanguage }}>
            {children}
        </Context.Provider>
    );
}