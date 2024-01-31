const path = require('path')
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'new'), (err) => {
    if(err) {
        console.log(err)
        return;
    }
}) // Створення директорії

fs.rmdir(path.join(__dirname, 'new'), (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('Folder has been successfully deleted')
}) // Видалення директорії

fs.writeFile(path.join(__dirname, 'new.txt'), 'Hello, World!', (error) => {})

const asyncWriter = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (error) => {
        if (error) {
            return reject(error)
        }
        resolve()
    }))
} // Використання функції writeFile() у промісі

const asyncAppender = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (error) => {
        if (error) {
            return reject(error)
        }
        resolve()
    }))
} // Використання функції appendFile() у промісі

asyncWriter(path.join(__dirname, 'new.txt'), '1 2 3').then(
    () => asyncAppender(path.join(__dirname, 'new.txt'), '\n3 2 1')
).catch(error => console.log(error))

const readFile = async(path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding : 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err)
        }
        resolve(data)
    }))
}
 // Використання функції readFile() у промісі
readFile(path.join(__dirname, 'new.txt')).then(
    (data) => console.log(data)
)

fs.readFile(path.resolve(__dirname, 'new.txt'), {encoding: 'utf-8'}, (error, readData) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log(readData)
}) // Читання файлу