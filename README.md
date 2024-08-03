# CryptoOnTheFlyFE

## Introduction

In this repository you will find a mobile application for a offline low cost cold wallet. You will be able to install this aplication in your phone, create or import and existing wallet and sign messages completely disconnected, giving a 2nd chance to your old phone to act as a hardware wallet.

## Setup & Run

Inside /CryptoOnTheFlyFE run:

- You will need to download Expo Go app in your phone or emulator.
- `npm install`
- `npx expo start`

## Next features
- Add extra security layer for password
- Add blockexplorer
- Add whitelist to sign transactions of some sites


## Fix possible issues

- Error: too many open files, watch
```
Starting Metro Bundler
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (node:internal/fs/watchers:207:21)
```

To solve the issue run:
- `brew install watchman`
- `mkdir -p ~/.config/watchman`
- `echo '{"max_watch_root": 524288, "max_open_files": 1024}' > ~/.config/watchman/watchman.json`
