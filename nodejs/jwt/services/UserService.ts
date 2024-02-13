import User from "../models/UserModel"

class UserService {
    async getUsers() {
        const users = await User.find()
        return users
    }
    async postUsers(users: object[]) {
        User.insertMany(users)
        return users
    }
}

export default new UserService()