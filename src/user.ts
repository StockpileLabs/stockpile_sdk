import { SDK } from "./index";
import * as anchor from "@project-serum/anchor"
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import {
    useAnchorWallet,
    useConnection,
    useWallet,
  } from "@solana/wallet-adapter-react";

export class User {
    private readonly sdk: SDK;

    constructor(sdk: SDK) {
        this.sdk = sdk;
    }

    public async getProgramDerivedUserAddress (pk:any) {
        const { program } = this.sdk;
        const [userPDA, bump] = anchor.web3.PublicKey.findProgramAddressSync(
            [utf8.encode("fuckItWeBall!"), pk.toBuffer() ],
            program.programId
        );
        return {userPDA, bump}
    }

    public async create(username: string, image: any, owner:anchor.web3.PublicKey, pk:any) {
        const { userPDA } = await this.getProgramDerivedUserAddress(pk)
        const instructionMethodBuilder = this.sdk.program.methods
          .createUser(String(username), String(image))
          .accounts({
            userAccount: userPDA,
            authority: owner,
            systemProgram: SystemProgram.programId
          })
        return {
            instructionMethodBuilder
        }
    }

}