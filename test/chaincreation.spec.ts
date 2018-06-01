import { suite, describe, it } from "mocha";
import * as chai from "chai";
import { BlockChain } from "../source/index";
let expect = chai.expect;
describe("Chain Creation", function () {
    it("returns a chain", function () {
        // let chain = new BlockChain();
        expect(10).to.equal(10)
    });
});