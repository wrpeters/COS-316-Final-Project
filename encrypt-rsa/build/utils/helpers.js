"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
var decode = function (str) { return Buffer.from(str, 'base64').toString('utf-8'); };
exports.decode = decode;
var encode = function (str) { return Buffer.from(str, 'utf-8').toString('base64'); };
exports.encode = encode;