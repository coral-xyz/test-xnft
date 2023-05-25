import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

const button = document.getElementById("submit")!;
const originalText = button.textContent;

button.addEventListener("click", async () => {
  button.setAttribute("disabled", "true");
  button.textContent = "sending...";

  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: window.xnft.solana.publicKey,
      toPubkey: new PublicKey("So11111111111111111111111111111111111111112"),
      lamports: 1,
    })
  );

  await window.xnft.solana.sendAndConfirm(transferTransaction);

  button.setAttribute("disabled", "false");
  button.textContent = originalText;
});
