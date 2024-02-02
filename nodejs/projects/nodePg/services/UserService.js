import UserModel from "../models/UserModel.js";

class UserService {
    async getUsers() {
        const users = await UserModel.findAll()
        return users
    }
    async getUserById(id) {
        const user = await UserModel.findByPk(id)
        return user
    }
    async addUser(userDto) {
        const newUser = await UserModel.create({
            UserName: userDto.userName,
            UserDesc: userDto.description
        })
        return newUser
    }
    async updateUser(id) {
        const user = await UserModel.findByPk(id)
        user.UserName += " (changed)"
        user.save()
        return user
    }
    async deleteUser(id) {
        const user = await UserModel.findByPk(id)
        await UserModel.destroy({
            where: {
                id: id
            }
        })
        return user
    }
}

export default new UserService()