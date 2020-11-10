# expo-updates reproduction

Application is setup to look at http://localhost:8000/dist/ios-index.json for the update manifest

Can be validated by:
1. Running on iOS (defaulted to release scheme)
2. Making small change to App.js and exporting with `npm run export`
3. Starting a local server with `npm run serve`

Note that the file gets downloaded and will eventually update after force closing and opening the app a few times, but it does not update when merely fetching and reloading in the manual steps.
