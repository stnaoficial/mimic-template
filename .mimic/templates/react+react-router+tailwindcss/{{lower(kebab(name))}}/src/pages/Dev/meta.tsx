import React, { Fragment, useEffect } from "react";

export function Meta({ children }: React.PropsWithChildren) {
    useEffect(() => {
        document.title = `Dev | ${ import.meta.env.VITE_APP_NAME }`
    }, [])

    return (
        <Fragment>
            { children }
        </Fragment>
    )
}