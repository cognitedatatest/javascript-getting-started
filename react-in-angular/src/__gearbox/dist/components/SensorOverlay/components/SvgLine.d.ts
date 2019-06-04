/// <reference types="react" />
interface SvgLineProps {
    box: {
        color: string;
        left: number;
        top: number;
        pointer: {
            left: number;
            top: number;
        };
    };
}
declare const SvgLine: ({ box }: SvgLineProps) => JSX.Element;
export default SvgLine;
