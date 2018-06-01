import { IAccess } from "./access";
/**
 * @class The block, holds data, meta data and the hash for this block and the previous block.
 */
export declare class Block {
    index: number;
    timestamp: Date;
    private data;
    hash: string;
    previous_hash: string;
    access: Array<IAccess>;
    constructor(index: number, previousHash: string, data: any, secret: string);
    /**
     * Creates a new hash from the key provided and the blocks' data
     * @param secret the key
     */
    getHash(secret: string): string;
    /**
     * Returns a decrypted version of the blocks data, updates the access array for this block
     * @param secret The secret key
     * @param id The id of the user accessing the data
     */
    getData(secret: string, id: string): string;
}
