const os = require('os')
const cluster = require('cluster')

// console.log(os.platform()) // Платформа ОС
// console.log(os.arch()) // Архітектура процесора
// console.log(os.cpus()) // Масив з JSON-файлами потоків

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with PID ${worker.process.pid} is killed`)
        cluster.fork()
    })
} else {
    console.log(`Worker with PID ${process.pid} is launched`)
    setInterval(() => {
        console.log(`Worker with PID ${process.pid} is working`)
    }, 5000)
}