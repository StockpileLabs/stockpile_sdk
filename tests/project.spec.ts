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

describe("Project", async() => {
    let sdk: SDK;
    
    before(async() => {
        sdk = new SDK(
            userWallet as NodeWallet,
            new anchor.web3.Connection("https://api.devnet.solana.com", "processed"),
            { preflightCommitment: "processed" },
            "devnet"
        );
    });

    it("Should create a project", async() => {
        const createProject = await sdk.project.create(
            "first",
            "first",
            "first",
            "first",
            "first",
            "first",
            "first",
            "first",
            "first",
            "first",
            user.publicKey 
        );

        try{ 
            await createProject.instructionMethodBuilder.rpc()
        }catch(error){
            console.log(error)
        }
        const fundraiserPDA = createProject.fundraiserPDA
        const fundraiserAccount = await sdk.project.get(fundraiserPDA)
        // console.log("fundraiser details: ", fundraiserAccount)
        const { creator } = fundraiserAccount
        // console.log("creator details", creator)
        expect(fundraiserAccount.creator).is.equal("user1")
    });
})