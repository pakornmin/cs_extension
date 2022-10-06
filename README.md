# ps-extension
ps-extesnion stands for Progressive Shopper extension. ps-extension is browser extension, currently supported on chrome and firefox.

## Setup
* Install Node (v8.9.4) and NPM (5.6.0)
* Go to root directory of sorce code.
* Run command ```npm install```

## Genererate Extension
* If you are on windows create a directory ```build``` inside top directory and change ```"clean": "rm -r build"``` to ```"clean": "rmdir /s /q build"``` inside ```package.json```
* To generate extension code from source code run command ```npm run build```. This will generate directory named ```build```, which is the exact copy of extension.
## Publishing Extension
* Create zip file having content from build directory. Make sure that that zip file directly contains manifest.json and other files/directories directly inside the zip file.
* This zip file can be published in chrome/firecfox.

## Installing extension locally
  - Chrome
  - Firefox
