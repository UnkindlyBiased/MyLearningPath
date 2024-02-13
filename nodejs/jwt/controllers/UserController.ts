import UserService from "../services/UserService";
import { Request, Response } from "express";

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
            const users = req.body.users
            req.user = ""
        } catch(e) {

        }
    }
}

export default new UserController()