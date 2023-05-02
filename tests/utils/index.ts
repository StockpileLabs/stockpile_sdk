import { PublicKey, LAMPORTS_PER_SOL, Connection, clusterApiUrl } from '@solana/web3.js';

export async function airdrop(key:PublicKey) {
    try {
      const connection = new Connection("https://api.devnet.solana.com", "confirmed");
      const airdropSignature = await connection.requestAirdrop(
        key,
        2 * LAMPORTS_PER_SOL
      );

      const latestBlockHash = await connection.getLatestBlockhash();

      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: airdropSignature,
      });
    } catch (error) {
      console.error(error);
    }
  };