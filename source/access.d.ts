export declare enum eAccessType {
    read = 0,
    write = 1,
    start = 2,
    stop = 3,
}
/**
 * Access interface provides an object with the type of access that has occurred on this block
 */
export interface IAccess {
    id: string;
    accessType: eAccessType;
    message?: string;
}
