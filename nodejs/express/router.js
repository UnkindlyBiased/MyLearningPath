import Router from 'express'
import UserController from './controller.js'

const router = new Router()

router.post('/users', UserController.create)

router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getSingle)

router.put('/users', UserController.update)

router.delete('/users/:id', UserController.delete)

export default router;