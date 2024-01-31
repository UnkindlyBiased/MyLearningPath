const path = require('path')
const fs = require('fs')

fs.mkdir(path.resolve(__dirname, 'new'), (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('Folder has been created')
})