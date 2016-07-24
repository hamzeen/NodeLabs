const md = require('commonmark');
const fs = require('fs-extra');


const parser = new md.Parser();
const renderer = new md.HtmlRenderer();

var input = '# This is a header\n\nAnd this is a paragraph';
var content = renderer.render(parser.parse(input)).trim();

console.log(content);

// __dirname
fs.readdir(__dirname, function (err, files) {
 if (err) throw err;
 for (var index in files) {
    console.log(files[index]);
 }
});
