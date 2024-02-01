const Emitter = require('events')
const { emit } = require('process')

const emitter = new Emitter()

emitter.on('doublew', (amount, value) => {
    console.log(`Amount: ${amount}, value: ${value}`)
})

const oneTimeCallback = () => {
    console.log('This is one-time event')
}

emitter.once('onetime', oneTimeCallback)

emitter.removeListener('onetime', oneTimeCallback)

emitter.emit('doublew', 15, "Apple")
emitter.emit('onetime')
emitter.emit('onetime')
emitter.emit('onetime')