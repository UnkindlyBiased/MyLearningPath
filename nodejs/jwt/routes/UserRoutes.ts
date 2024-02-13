import Router from 'express'
import UserController from '../controllers/UserController'
import { authUser } from '../utils/middleware/UserAuthentication'

const UserRouter = Router()

UserRouter.get('/', UserController.getUsers)
UserRouter.post('/', UserController.postUsers)

UserRouter.post('/login', UserController.getToken)
UserRouter.get('/about', authUser, UserController.getUserByHisToken)

export default UserRouter