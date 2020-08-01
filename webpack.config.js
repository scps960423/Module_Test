const path = require('path');
const fs = require('fs');

//讀取所以有JS路徑的檔案
function getJs(stript) {
    var _js = fs.readdirSync(stript).filter(function (file) {
        return file.charAt(0) == '_';  
    });

    
    return _js.map(function (file) {
        return stript + '/' + file
    })
    
    
    
}
module.exports = {
   // context: path.resolve(__dirname, 'src'),
    entry: getJs('./src/comm'),
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './dist/js'),
    }
}