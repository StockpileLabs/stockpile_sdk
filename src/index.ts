import * as anchor from "@project-serum/anchor";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";
import { Cluster, PublicKey } from "@solana/web3.js";
import { IDL } from "./idl/stockpile";

const PROGRAM_ID = new PublicKey(
    "7XajpmvbZwBkGg9Rrz9fb8iHdy1uWhiSVwVsdrGUSk7P"
  );

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
        PROGRAM_ID,
        this.provider
      );
      this.rpcConnection = connection;
    }

    //TODO
}