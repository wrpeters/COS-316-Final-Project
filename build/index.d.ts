import { parametersOfDecrypt, parametersOfEncrypt, returnCreateKeys } from './utils/types';
declare class NodeRSA {
    private publicKey;
    private privateKey;
    private modulusLength;
    private keyBase64;
    /**
     *
     * @param publicKey
     * @param privateKey
     */
    constructor(publicKey?: string, privateKey?: string, modulusLength?: number);
    /**
     *
     * @param {Object} args
     * @param {String} args.publicKey
     * @param {String} args.text the text that you need to encrypt
     *
     * @returns {String}
     */
    encryptStringWithRsaPublicKey(args: parametersOfEncrypt): string;
    /**
     *
     * @param {Object} args
     * @param {String} args.privateKey
     * @param {String} args.text the text that you need to decrypt
     *
     * @returns {String}
     */
    decryptStringWithRsaPrivateKey(args: parametersOfDecrypt): string;
    createPrivateAndPublicKeys(modulusLength?: number): returnCreateKeys;
    private convertKetToBase64;
}
export default NodeRSA;