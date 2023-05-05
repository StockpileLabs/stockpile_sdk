import { SDK } from "./index";
import * as anchor from "@project-serum/anchor";
export declare class User {
    private readonly sdk;
    constructor(sdk: SDK);
    getProgramDerivedUserAddress(pk: any): Promise<{
        userPDA: anchor.web3.PublicKey;
        bump: number;
    }>;
    get(userAccount: anchor.web3.PublicKey): Promise<{
        [x: string]: any;
    }>;
    create(username: string, image: any, owner: anchor.web3.PublicKey): Promise<{
        instructionMethodBuilder: import("@project-serum/anchor/dist/cjs/program/namespace/methods").MethodsBuilder<anchor.Idl, import("@project-serum/anchor/dist/cjs/idl").IdlInstruction & {
            name: string;
        }>;
        userPDA: anchor.web3.PublicKey;
    }>;
}
//# sourceMappingURL=user.d.ts.map