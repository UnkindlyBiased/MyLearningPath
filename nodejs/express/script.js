import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const app = express()

const DB_CONN = `mongodb+srv://UnkindlyBiased:8ohocUCBXN8RRUGV@cluster0.hgdzix6.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
app.use('/api', router)

async function startApplication() {
    try {
        await mongoose.connect(DB_CONN)
        app.listen(5500, () => {
            console.log('Server is started')
        })
    } catch(e) {
        console.log(e)
    }
}

startApplication()