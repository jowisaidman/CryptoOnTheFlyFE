# CryptoOnTheFlyFE

## Setup & Run

Inside /CryptoOnTheFlyFE run:

- You will need to download Expo Go app in your phone or emulator.
- `npm install`
- `npx expo start`


# Fix possible issues

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

