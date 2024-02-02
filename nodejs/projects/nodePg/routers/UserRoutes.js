import Router from 'express'
import UserController from '../controllers/UserController.js'

const UserRouter = new Router()

UserRouter.get('/', UserController.getUsers)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.post('/', UserController.addUser)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)

export default UserRouter