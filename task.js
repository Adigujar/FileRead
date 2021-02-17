var fs = require('fs');
var path="../guvi"

fs.readdir(path, (error, items) => {
    if(!error){
        items.forEach((item) => {
        if(item.split('.').length !== 1){
            console.log(`${item} is a file`);
        }
        else{
            console.log(`${item} is a folder`);
        }
    });
}
});