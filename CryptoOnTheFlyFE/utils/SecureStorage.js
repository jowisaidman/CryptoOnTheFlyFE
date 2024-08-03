import * as SecureStore from 'expo-secure-store';

export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key); // TODO: detail, js resolve the promise if I do a inline return(?)
    return result;
}

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
