import * as SecureStore from 'expo-secure-store';

export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result
    } else {
      alert('No key found, please setup your wallet!');
    }
}

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
