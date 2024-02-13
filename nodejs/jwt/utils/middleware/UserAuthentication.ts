import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function authUser(req: Request, res: Response, next: NextFunction) {
    const header = req.headers['authorization']
    const token = header?.split(' ')[1]

    jwt.verify(token as string, process.env.TOKEN_CYPHER_KEY as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message : "No user was found" })
        }
        req.user = user
        next()
    })
} 