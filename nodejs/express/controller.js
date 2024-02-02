import User from './user.js'
import UserService from './service.js'

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            return res.json(users)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async getSingle(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.getSingle(id)
            return res.json(user)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.delete(id)
            return res.json(user)
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()