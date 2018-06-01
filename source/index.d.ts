import { Block } from "./block";
/**
 * @class BlockChain
 * Creates a block chain with interfaces for creating and validating blocks
 */
export declare class BlockChain {
    private hashType;
    private secret;
    private hashKey;
    private chain;
    constructor(secret: string, hashType: string, hashKey: string);
    /**
     * Creates a block, adds it to the chain
     * @param data data to go into block
     * @return Block
     */
    creatBlock(data: any): Block;
    /**
     * Returns the latest block in the chain
     * @return Block
     */
    getLatestBlock(): Block;
    /**
     * validates the hash between two blocks
     * @param newBLock
     * @param previousBlock
     * @returns boolean
     */
    validateBlock(newBLock: Block, previousBlock: Block): boolean;
    /**
     * Validates the entire block chain
     * @returns boolean
     */
    validate(): boolean;
}
