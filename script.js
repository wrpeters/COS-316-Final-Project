// const EncryptRsa = require('./encrypt-rsa/build/index.js')
// // import EncryptRsa from './encrypt-rsa/index';

// // Create rsa instance
// const encryptRsa = new EncryptRsa();

// // Create Private and Public keys
// const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();

// Onclick handler functions for encrypt and decrypt
document.getElementById('submitEncrypt').addEventListener("click", encryptText);
document.getElementById('submitDecrypt').addEventListener("click", decryptText);

// Encrypts text given user's key
function encryptText(){
    console.log('In Encrypt');
    var keyText = document.getElementById('keyText');
    console.log('Key Text: ' + keyText.value);

    console.log('whats up!')
    console.log('encrypted', CryptoJS.AES.encrypt('themessage', 'thekey'))

}

// Decrypts text given a user's key
function decryptText(){
    console.log('In Decrypt');
    var keyText = document.getElementById('keyText');
    console.log('Key Text: ' + keyText.value);
}

