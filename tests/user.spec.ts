import { SDK } from "../src";
import * as anchor from '@project-serum/anchor';
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { expect } from "chai";
import { sendAndConfirmTransaction } from "@solana/web3.js";
import { airdrop } from "./utils";
import dotenv from "dotenv";

dotenv.config()

anchor.setProvider(anchor.AnchorProvider.env())
const userWallet = (anchor.getProvider() as any).wallet
const user = userWallet.payer

describe("User", async() => {
    let sdk: SDK;
    let userPDA: anchor.web3.PublicKey;
    let randomUser: anchor.web3.PublicKey;

    before(async() => {
        sdk = new SDK(
            userWallet as NodeWallet,
            new anchor.web3.Connection("http://127.0.0.1:8899", "processed"),
            { preflightCommitment: "processed" },
            "localnet"
        );
        const randomUser = anchor.web3.Keypair.generate()
        await airdrop(randomUser.publicKey)
    });

    it("should create a user", async() => {
        const createUser = await sdk.user.create("user1", "user1", user.publicKey, user.publicKey);
        await createUser.instructionMethodBuilder.rpc();
        userPDA = createUser.userPDA;
        const userAccount = await sdk.user.get(userPDA);
        expect(userAccount.authority.toString().is.equal(user.publicKey.toString()))
    });
})