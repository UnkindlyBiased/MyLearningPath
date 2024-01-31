fs.appendFile(dataPath, '\n9 5 1', (error) => {
    if (error) {
        console.log(error)
    }
})

fs.readFile(dataPath, {encoding : 'utf-8'}, (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
})

fs.rm(dataPath, (err) => {
    if (err) {
        throw err;
    }
}) // Видалення файлу