import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function authUserMiddleware(req: Request, _res: Response, next: NextFunction) {
    const tokenizedData = req.cookies.accessToken

    if (tokenizedData) {
        const user = jwt.verify(tokenizedData.token, process.env.TOKEN_CYPHER_KEY as string)
        req.user = user
    }
    next()
}