import * as ethers from 'ethers';

export function createNewSeedPhrase() {
    // TODO: do it with secure randomness & store it in device secureStore    
    let randomBytes = new Uint8Array(16);
    for (let i = 0; i < 16; i++) {
      randomBytes[i] = Math.floor(Math.random() * 256);
    }

    const mnemonic = ethers.Mnemonic.entropyToPhrase(randomBytes);
    const wallet = ethers.Wallet.fromPhrase(mnemonic);

    return {
        mnemonic,
        wallet
    }
}
