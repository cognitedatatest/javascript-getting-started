/**
 * Convert input into a safe CDP project name format ([a-z0-9\-]+)
 *
 * @param input possible CDP project name
 *
 * @return the sanitized CDP project name
 */
export declare const sanitizeTenant: (input: string) => string;
/**
 * Check if input empty, consist of spaces or its a number
 * @param input – checked value
 * @return <true> if input empty, <false> otherwise
 */
export declare function isEmptyString(input: string | number): boolean;
