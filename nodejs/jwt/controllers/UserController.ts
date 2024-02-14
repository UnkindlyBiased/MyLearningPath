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
        const token = await UserService.generateToken(user)

        if (!token) {
            return res.clearCookie("accessToken")
                .status(404).send({ message: "Error: I need to implement it" })
        }
        return res.cookie(
            "accessToken", token, {
                httpOnly: true
            }
        ).status(200).json({ message: "Good work" })
    }
    async getUserByHisToken(req: Request, res: Response) {
        try {
            const user = req.user
            if (!user) {
                res.status(404).send({ message: "No user was found" })
            }
            res.send(user)
        } catch(e) {
            res.status(400).send("Idk")
        }
    }
}

export default new UserController()