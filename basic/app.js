var content = require('./data');
var a = 1;
console.log(a);
console.log(__dirname);
console.log(__filename);
console.log(content);
console.log(content.bark());

var path = require('path');
// path x/y
console.log(path.dirname('x/y/z.js'));
// 路徑合併 /Users/barbie/node/basic/x
console.log(path.join(__dirname, '/x'));
// 抓檔名 zzzzzz.js
console.log(path.basename('x/y/zzzzzz.js'));
// 抓副檔名 .vv
console.log(path.extname('sdfsdf.vv'));
// 分析路徑 { root: '',dir: 'x/y', base: 'zzzzzz.js', ext: '.js', name: 'zzzzzz' }
console.log(path.parse('x/y/zzzzzz.js'));
