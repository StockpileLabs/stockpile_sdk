import { SDK } from "./index";
import * as anchor from "@project-serum/anchor";
export declare class Project {
    readonly sdk: SDK;
    constructor(sdk: SDK);
    getProgramDerivedUserAddress(pk: any): Promise<{
        userPDA: anchor.web3.PublicKey;
        bump: number;
    }>;
    getProgramDerivedFundraiserAddrress(name: string, userPDA: any, pk: any): Promise<{
        fundraiserPDA: anchor.web3.PublicKey;
        bump: number;
    }>;
    get(fundraiserAccount: anchor.web3.PublicKey): Promise<{
        [x: string]: any;
    }>;
    create(name: string, description: string, imageLink: string, websiteLink: string, twitter: string, discord: string, telegram: string, location: string, repo: string, goal: string, owner: anchor.web3.PublicKey): Promise<{
        instructionMethodBuilder: import("@project-serum/anchor/dist/cjs/program/namespace/methods").MethodsBuilder<anchor.Idl, import("@project-serum/anchor/dist/cjs/idl").IdlInstruction & {
            name: string;
        }>;
        fundraiserPDA: anchor.web3.PublicKey;
    }>;
}
//# sourceMappingURL=project.d.ts.map