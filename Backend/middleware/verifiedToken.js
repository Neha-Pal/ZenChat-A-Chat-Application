import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken";

export const isAuthenticated = async(req, res, next) =>{
    try {
        const token = req.cookies.jwt_token

        if(!token){
            return next(errorHandler(401, "Unauthorized"))
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                return next(errorHandler(403, "Forbidden"))
            }
            req.user = user

            next()
        })
    } catch (error) {
        next(error)
    }
}