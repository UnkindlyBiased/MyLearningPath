import UserService from "../services/UserService";
import { Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken'
import User from "../models/UserModel";

class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers()
            return res.json(users)
        } catch(e) {
            return res.status(400).json({ message: "Data error!" })
        }
    }
    async postUsers(req: Request, res: Response) {
        try {
            const users: object[] = req.body.users
            if (users) {
                res.json(await UserService.postUsers(users))
            }
        } catch(e) {
            return res.status(409).json({ message: "Data upload error!" })
        }
    }
    async getToken(req: Request, res: Response) {
        const user = { 
            name: req.body.userName,
            password: req.body.password
        }
        if (await User.exists(user)) {
            const token = jsonwebtoken.sign(user, process.env.TOKEN_CYPHER_KEY as string)
            return res.json({ token : token })
        }
        return res.json({ message: "No user was found" })
    }
    async getUserByHisToken(req: Request, res: Response) {
        const user = req.user
        if (user) {
            return res.json(user)
        }
    }
}

export default new UserController()