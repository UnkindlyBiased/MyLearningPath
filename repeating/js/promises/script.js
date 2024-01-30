let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Done")
    }, 2500)
}).then(() => alert("Good"))