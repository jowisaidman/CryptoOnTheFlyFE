import * as ethers from 'ethers';
import { getValueFor } from './SecureStorage';

export function createNewSeedPhrase() {
    // TODO: do it with secure randomness & store it in device secureStore 
    let randomBytes = new Uint8Array(16);
    for (let i = 0; i < 16; i++) {
      randomBytes[i] = Math.floor(Math.random() * 256);
    }

    const mnemonic = ethers.Mnemonic.entropyToPhrase(randomBytes); // TODO: check if I can add a password
    const wallet = ethers.Wallet.fromPhrase(mnemonic);

    return {
        mnemonic,
        wallet
    }
}

export async function getWalletAddress() {
  const walletMnemonic = await getValueFor("seedPhrase");
  return ethers.Wallet.fromPhrase(walletMnemonic).address;
}

export function getWalletAlias(address) {
  const firstPart = address.substring(0, 5);
  const lastPart = address.substring(address.length - 5);
  return `${firstPart}.....${lastPart}`;
}

export function validateWallet(mnemonic) {
  try {
    ethers.Wallet.fromPhrase(mnemonic);
    return true;
  } catch (err) {
    return false;
  }
}

export async function signMessage(message, mnemonic) {
  const formattedMessage = JSON.parse(message); // TODO: how we handle this? if a message is not a json? should be check with the plugin
  console.log(formattedMessage)

  const gasLimitHex = '0x' + formattedMessage.gasLimit.toString(16);
  const transaction = {
    type: formattedMessage.type,
    chainId: formattedMessage.chainId,
    nonce: formattedMessage.nonce,
    maxPriorityFeePerGas: ethers.parseUnits(formattedMessage.maxPriorityFeePerGas, 'wei').toString(),
    maxFeePerGas: ethers.parseUnits(formattedMessage.maxFeePerGas, 'wei').toString(),
    gasLimit: gasLimitHex,
    to: formattedMessage.to,
    value: ethers.parseUnits(formattedMessage.value, 'ether').toString(), 
    data: formattedMessage.data,
    accessList: formattedMessage.accessList
  }

  console.log("Transaction: ", transaction);

  const wallet = new ethers.Wallet.fromPhrase(mnemonic);

  return await wallet.signTransaction(transaction);
}