import { SDK } from "./index";
import * as anchor from "@project-serum/anchor"

export class User {
    private readonly sdk: SDK;

    constructor(sdk: SDK) {
        this.sdk = sdk;
    }

    public async create(username: string, image: any) {
        const instructionMethodBuilder = this.sdk.program.methods
          .createUser(String(username), String(image))
        //   .accounts({
        //     userAccount: userPDA,
        //     authority: 
        //   })
        
    }
}