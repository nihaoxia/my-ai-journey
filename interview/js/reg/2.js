const str = '价格是100元,进价是80,赚了20';
const reg = /\d+/g;
console.log(reg.test(str));
const result = str.match(reg);
console.log(result);
