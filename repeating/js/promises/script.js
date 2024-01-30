let promise = new Promise((res, rej) => {
    setTimeout(res, 1000)
}).then(() => alert("Done"))