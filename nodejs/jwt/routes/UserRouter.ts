import Router from 'express'
import UserController from '../controllers/UserController'
import { authUserMiddleware } from '../utils/middleware/UserAuthentication'

const UserRouter = Router()

// Work with data from MongoDB
UserRouter.get('/', UserController.getUsers)
UserRouter.post('/', UserController.postUsers)

// Work with JWT auth
UserRouter.post('/login', UserController.getToken)
UserRouter.get('/about', authUserMiddleware, UserController.getUserByHisToken)

export default UserRouter