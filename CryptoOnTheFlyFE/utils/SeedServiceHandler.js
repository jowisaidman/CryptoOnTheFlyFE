import * as ethers from 'ethers';

export function createNewSeedPhrase() {
    // Generate a random wallet
    const wallet = ethers.Wallet.createRandom();
    
    // Get the wallet's address
    const address = wallet.address;
    
    // Get the wallet's private key
    const privateKey = wallet.privateKey;
    
    // Get the mnemonic (seed phrase)
    const mnemonic = wallet.mnemonic.phrase;
    
    // Return the wallet details
    return {
      address,
      privateKey,
      mnemonic,
    };
}
