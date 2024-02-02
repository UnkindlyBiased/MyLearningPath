import express from 'express'
import pgSequelize from './sequelizeExp.js'
import UserRouter from './routers/UserRoutes.js'
import ProductsRouter from './routers/productRoutes.js'

const app = express()

app.use(express.json())
app.use('/users', UserRouter)
app.use('/products', ProductsRouter)

async function startApp() {
     try {
        await pgSequelize.authenticate()
        app.listen(8001, () => {
            console.log('Server is working')
        })
     } catch (e) {
        console.log(e)
     }
}

startApp()