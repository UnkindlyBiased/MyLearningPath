import User from "../models/UserModel"
import jwt from 'jsonwebtoken'

class UserService {
    async getUsers() {
        const users = await User.find()
        return users
    }
    async postUsers(users: object[]) {
        User.insertMany(users)
        return users
    }
    async generateToken(userInfo: object) {
        const user = await User.findOne(userInfo)

        if (!user) {
            return null
        }
        const token = jwt.sign(user.toPayloadDto(), String(process.env.TOKEN_CYPHER_KEY))
        return { token: token }
    }
}

export default new UserService()