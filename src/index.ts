import * as anchor from "@project-serum/anchor";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";
import { Cluster } from "@solana/web3.js";

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
      //TODO
    //   this.program = new anchor.Program(

    //   );
      this.rpcConnection = connection;
    }

    //TODO
}