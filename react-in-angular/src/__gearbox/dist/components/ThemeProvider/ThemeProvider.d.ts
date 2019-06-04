import React from 'react';
import { defaultTheme } from '../../theme/defaultTheme';
declare type GearboxThemeKey = keyof typeof defaultTheme;
export declare type GearboxTheme = {
    [key in GearboxThemeKey]?: string;
};
export interface ThemeProviderProps {
    theme: GearboxTheme;
    children: React.ReactChild;
}
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export {};
