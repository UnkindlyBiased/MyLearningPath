import express from 'express'
import mongoData from './utils/DataSource'
import UserRouter from './routes/UserRoutes'

const app = express()

app.use(express.json())
app.use('/users', UserRouter)

async function startApp() {
    try {
        await mongoData.connect('mongodb+srv://UnkindlyBiased:somepw@cluster0.hgdzix6.mongodb.net/?retryWrites=true&w=majority')
    } catch (e) {
        console.log(e)
    }
    app.listen(5001, () => {
        console.log('App is started')
    })
}

startApp()