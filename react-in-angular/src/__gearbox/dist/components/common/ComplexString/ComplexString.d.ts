/// <reference types="react" />
import { ID } from '../../../interfaces';
export interface ComplexStringProps {
    input: string;
    [name: string]: ID;
}
/**
 * Input string should has {{ <key> }} structure to embed provided values
 * @param props <ComplexStringProps> – contain <input> property – string with <keys> to be replaced
 * @example { input: 'Hey, {{ developer }}', developer: 'Dude' }
 */
export declare const ComplexString: (props: ComplexStringProps) => JSX.Element;
