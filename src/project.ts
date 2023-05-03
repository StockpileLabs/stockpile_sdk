import { SDK } from "./index";
import * as anchor from "@project-serum/anchor"
import { publicKey } from "@project-serum/anchor/dist/cjs/utils";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";

export class Project {
    readonly sdk: SDK;

    constructor(sdk:SDK) {
        this.sdk = sdk;
    }

    public async getProgramDerivedUserAddress (pk:any) {
        const { program } = this.sdk;
        const [userPDA, bump] = anchor.web3.PublicKey.findProgramAddressSync(
            [utf8.encode("fuckItWeBall!"), pk.toBuffer() ],
            program.programId
        );

        console.log(
            `Got ProgramDerivedAddress: bump: ${bump}, pubkey: ${userPDA.toBase58()}`
        )
        return {userPDA, bump}
    }

    public async getProgramDerivedFundraiserAddrress (name: string, userPDA:any, pk:any) {
        const { program } = this.sdk;
        const [fundraiserPDA, bump] = anchor.web3.PublicKey.findProgramAddressSync(
            [utf8.encode(name), userPDA.toBuffer(), pk.toBuffer()],
            program.programId
        );

        console.log(
            `Got ProgramDerivedAddress: bump: ${bump}, pubkey: ${fundraiserPDA.toBase58()}`
        );
        return { fundraiserPDA, bump};
    }

    public async get(fundraiserAccount: anchor.web3.PublicKey) {
        return await this.sdk.program.account.project.fetch(fundraiserAccount);
    }

    public async create(
        name: string,
        description: string,
        imageLink: string,
        websiteLink: string,
        twitter: string,
        discord: string,
        telegram: string,
        location: string,
        repo: string,
        goal: string,
        owner: anchor.web3.PublicKey
    ) {
        const { userPDA } = await this.getProgramDerivedUserAddress(owner);
        const { fundraiserPDA } = await this.getProgramDerivedFundraiserAddrress(name, userPDA, owner);

        const instructionMethodBuilder = this.sdk.program.methods
            .createProject(
                name,
                description,
                imageLink,
                websiteLink,
                twitter,
                discord,
                telegram,
                location,
                repo,
                goal
            )
            .accounts({
                project: fundraiserPDA,
                userAccount: userPDA,
                treasury: owner,
                rent: SYSVAR_RENT_PUBKEY,
                systemProgram: SystemProgram.programId
            });
            return {
                instructionMethodBuilder,
                fundraiserPDA
        };
    }
}