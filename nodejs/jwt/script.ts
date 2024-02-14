import express from 'express'
import mongoData from './utils/DataSource'
import UserRouter from './routes/UserRouter'
import cookieparser from 'cookie-parser'

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieparser())
app.use('/users', UserRouter)

async function startApp() {
    try {
        await mongoData.connect(process.env.MONGODB_CONN as string)
    } catch (e) {
        console.log(e)
    }
    app.listen(5001, () => {
        console.log('App is started')
    })
}

startApp()