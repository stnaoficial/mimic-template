import styles from "./styles.module.css";

export interface SpinnerProps {
    className?: string;
    size?: number;
}

export function Spinner({ size = 24, className }: SpinnerProps) {
    return (
        <svg height={ size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={ className }>
            <path d="M3.46273 5.23049C3.00329 4.77104 3.02656 4.00287 3.51472 3.51471C4.00288 3.02656 4.77105 3.00328 5.23049 3.46272L9.22357 7.45579C9.68301 7.91523 9.65973 8.68341 9.17157 9.17157C8.68342 9.65972 7.91524 9.683 7.4558 9.22356L3.46273 5.23049Z" fill="currentColor" style={ { "--animation-delay": "-0.125s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M6.82353 10.75C7.47328 10.75 8 11.3096 8 12C8 12.6904 7.47328 13.25 6.82353 13.25L1.17647 13.25C0.526724 13.25 -1.69631e-07 12.6904 -1.09278e-07 12C-4.89256e-08 11.3096 0.526724 10.75 1.17647 10.75L6.82353 10.75Z" fill="currentColor" style={ { "--animation-delay": "-0.25s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M5.23049 20.5373C4.77105 20.9967 4.00287 20.9734 3.51471 20.4853C3.02656 19.9971 3.00328 19.2289 3.46272 18.7695L7.45579 14.7764C7.91523 14.317 8.68341 14.3403 9.17157 14.8284C9.65972 15.3166 9.683 16.0848 9.22356 16.5442L5.23049 20.5373Z" fill="currentColor" style={ { "--animation-delay": "-0.375s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M13.25 22.8235C13.25 23.4733 12.6904 24 12 24C11.3096 24 10.75 23.4733 10.75 22.8235L10.75 17.1765C10.75 16.5267 11.3096 16 12 16C12.6904 16 13.25 16.5267 13.25 17.1765L13.25 22.8235Z" fill="currentColor" style={ { "--animation-delay": "-0.5s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M14.7764 16.5442C14.317 16.0848 14.3403 15.3166 14.8284 14.8284C15.3166 14.3403 16.0848 14.317 16.5442 14.7764L20.5373 18.7695C20.9967 19.229 20.9734 19.9971 20.4853 20.4853C19.9971 20.9734 19.229 20.9967 18.7695 20.5373L14.7764 16.5442Z" fill="currentColor" style={ { "--animation-delay": "-0.625s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M22.8235 10.75C23.4733 10.75 24 11.3096 24 12C24 12.6904 23.4733 13.25 22.8235 13.25L17.1765 13.25C16.5267 13.25 16 12.6904 16 12C16 11.3096 16.5267 10.75 17.1765 10.75L22.8235 10.75Z" fill="currentColor" style={ { "--animation-delay": "-0.75s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M16.5442 9.22355C16.0848 9.68299 15.3166 9.65972 14.8284 9.17156C14.3403 8.6834 14.317 7.91523 14.7764 7.45579L18.7695 3.46271C19.229 3.00327 19.9971 3.02655 20.4853 3.51471C20.9734 4.00286 20.9967 4.77104 20.5373 5.23048L16.5442 9.22355Z" fill="currentColor" style={ { "--animation-delay": "-0.875s" } as React.CSSProperties } className={ styles.animate } />
            <path d="M13.25 6.82353C13.25 7.47328 12.6904 8 12 8C11.3096 8 10.75 7.47328 10.75 6.82353L10.75 1.17647C10.75 0.526723 11.3096 -2.54447e-07 12 -1.63918e-07C12.6904 -7.33885e-08 13.25 0.526724 13.25 1.17647L13.25 6.82353Z" fill="currentColor" style={ { "--animation-delay": "-1s" } as React.CSSProperties } className={ styles.animate } />
        </svg>
    );
}
