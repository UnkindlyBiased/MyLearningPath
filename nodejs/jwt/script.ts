import express from 'express'
import mongoData from './utils/DataSource'
import UserRouter from './routes/UserRoutes'

require('dotenv').config()

const app = express()

app.use(express.json())
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