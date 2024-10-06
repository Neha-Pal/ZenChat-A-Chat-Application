import User from "../models/user_model.js"

export const getUserForSidebar = async(req, res, next)=>{
    try {
        const loggedInUser = req.user.loggedInUser
        const allUserExceptLoggedIn = await User.find({
            _id:{$ne: loggedInUser},
        }).select("-password")
        res.status(200).json(allUserExceptLoggedIn)
    } catch (error) {
        next(error)
    }
}