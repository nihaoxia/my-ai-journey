import { getEncoding } from 'js-tiktoken'
// decode解码 
//gpt 官方的编码器  cl100k_base
// utf-8  编码
const enc = getEncoding('cl100k_base');//utf-8  gdk 编码
const text = 'Hello Tiktoken!你好，世界！'

//llm encode 编码器
const tokens = enc.encode(text);
//console.log("Token IDs:", tokens, tokens.length);
const decodeText = enc.decode(tokens)
console.log("Decoded Text:", decodeText);
console.log("token id:", tokens)
console.log("token length:", tokens.length)

