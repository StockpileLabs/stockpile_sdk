import * as anchor from "@project-serum/anchor";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";
import { Cluster, PublicKey } from "@solana/web3.js";
import { IDL } from "./idl/stockpile";
import { STOCKPILE_PROGRAMS } from "./constants";
import { User } from "./user";
import { Project } from "./project";

export {
  User,
  Project
}

export class SDK {
    readonly program: anchor.Program;
    readonly provider: anchor.AnchorProvider;
    readonly rpcConnection: anchor.web3.Connection;
    readonly cluster: Cluster | "localnet";

    constructor(
      wallet: Wallet,
      connection: anchor.web3.Connection,
      opts: anchor.web3.ConfirmOptions,
      cluster: Cluster | "localnet",
    ) {
      this.cluster = cluster;
      this.provider = new anchor.AnchorProvider(connection, wallet, opts);
      this.program = new anchor.Program(
        IDL as anchor.Idl,
        STOCKPILE_PROGRAMS[this.cluster] as anchor.web3.PublicKey,
        this.provider
      );
      this.rpcConnection = connection;
    }

    //TODO
    public user = new User(this);
    public project = new Project(this);
}