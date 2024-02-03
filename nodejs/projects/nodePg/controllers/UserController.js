import UserModel from "../models/UserModel.js"
import UserService from "../services/UserService.js"

class UserController {
    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers()
            res.json(users)
        } catch(e) {
            res.json(e)
        }
    }
    async getUserById(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.getUserById(id)
            res.json(user)
        } catch(e) {
            res.json(e)
        }
    }
    async addUser(req, res) {
        try {
            const {userName, description} = req.body
            const newUser = await UserService.addUser(UserModel.build({
                UserName: userName,
                UserDesc: description
            }))
            res.json(newUser)
        } catch(e) {
            res.json(e)
        }
    }
    async updateUser(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.updateUser(id)
            res.json(user)
        } catch(e) {
            res.json(e)
        }
    }
    async deleteUser(req, res) {
        try {
            const {id} = req.params
            const deletedUser = await UserService.deleteUser(id)
            res.json(deletedUser)
        } catch(e) {
            res.json(e)
        }
    }
}

export default new UserController()