const fs = require('fs')
const path = require('path')

const asyncWriter = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}

const asyncReader = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding : 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err)
        }
        resolve(data)
    }))
}

const dataPath = path.join(__dirname, 'test.txt')

asyncWriter(dataPath, '1 5 9').then(() => asyncReader(dataPath)).then((data) => console.log(data))