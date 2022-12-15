import EncryptRsa from 'encrypt-rsa';

// create rsa instance
const encryptRsa = new EncryptRsa();

// Onclick handler functions for encrypt and decrypt
document.getElementById('submitEncrypt').addEventListener("click", encryptText);
document.getElementById('submitDecrypt').addEventListener("click", decryptText);

// Encrypts text given user's key
function encryptText(){
    console.log('In Encrypt');
    var keyText = document.getElementById('keyText');
    console.log('Key Text: ' + keyText.value);

}

// Decrypts text given a user's key
function decryptText(){
    console.log('In Decrypt');
    var keyText = document.getElementById('keyText');
    console.log('Key Text: ' + keyText.value);
}

