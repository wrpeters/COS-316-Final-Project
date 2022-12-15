"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var helpers_1 = require("./utils/helpers");
var NodeRSA = /** @class */ (function () {
    /**
     *
     * @param publicKey
     * @param privateKey
     */
    function NodeRSA(publicKey, privateKey, modulusLength) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.modulusLength = modulusLength || 2048;
        this.keyBase64 = '';
    }
    /**
     *
     * @param {Object} args
     * @param {String} args.publicKey
     * @param {String} args.text the text that you need to encrypt
     *
     * @returns {String}
     */
    NodeRSA.prototype.encryptStringWithRsaPublicKey = function (args) {
        var text = args.text, _a = args.publicKey, publicKey = _a === void 0 ? this.publicKey : _a;
        var publicKeyDecoded = (0, helpers_1.decode)(this.convertKetToBase64(publicKey));
        var buffer = Buffer.from(text);
        var encrypted = (0, crypto_1.publicEncrypt)(publicKeyDecoded, buffer);
        return encrypted.toString('base64');
    };
    /**
     *
     * @param {Object} args
     * @param {String} args.privateKey
     * @param {String} args.text the text that you need to decrypt
     *
     * @returns {String}
     */
    NodeRSA.prototype.decryptStringWithRsaPrivateKey = function (args) {
        var text = args.text, _a = args.privateKey, privateKey = _a === void 0 ? this.privateKey : _a;
        var privateKeyDecoded = (0, helpers_1.decode)(this.convertKetToBase64(privateKey));
        var buffer = Buffer.from(text, 'base64');
        var decrypted = (0, crypto_1.privateDecrypt)(privateKeyDecoded, buffer);
        return decrypted.toString('utf8');
    };
    NodeRSA.prototype.createPrivateAndPublicKeys = function (modulusLength) {
        if (modulusLength === void 0) { modulusLength = this.modulusLength; }
        var _a = (0, crypto_1.generateKeyPairSync)('rsa', {
            modulusLength: modulusLength,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        }), privateKey = _a.privateKey, publicKey = _a.publicKey;
        return { privateKey: privateKey, publicKey: publicKey };
    };
    NodeRSA.prototype.convertKetToBase64 = function (key) {
        return (0, helpers_1.encode)(key.replace(/^ +/gm, '') || this.keyBase64);
    };
    return NodeRSA;
}());
exports.default = NodeRSA;