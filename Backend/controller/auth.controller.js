import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password, confirmPassword, gender } = req.body;

    try {
        let validUser = await User.findOne({ email });

        if (validUser) {
            return next(errorHandler(400, "User already exists"));
        }

        if (password !== confirmPassword) {
            return next(errorHandler(400, "Passwords don't match"));
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const boyProfilePic = `https://avatar.iran.liara.run/public/3?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/83?username=${username}`;

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        });

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',  // Set expiration as needed
        });

        await newUser.save();

        res.cookie("jwt_token", token, { httpOnly: true }).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
            token,
        });

    } catch (error) {
        console.error("Error during signup process:", error);
        return next(errorHandler(500, "Internal server error"));
    }
};

export const login = async(req, res, next) => {
    // Implement login functionality here
    try {
        const {email, password} = req.body
        const validUser = await User.findOne({email})

        if (!validUser){
            return next(errorHandler(404, "User not found"))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password)

        if(!validPassword){
            return next(errorHandler(401, "Wrong credentials"))
        }

        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
        res.cookie("jwt_token", token, { httpOnly: true }).status(201).json({
            _id: validUser._id,
            username: validUser.username,
            email: validUser.email,
            profilePic: validUser.profilePic,
            token,
        });
    
    } catch (error) {
        next(error)
    }
};

export const logout = (req, res, next) => {
    // Implement logout functionality here
    try {
      res.clearCookie("jwt_token")
      
      res.status(201).json({
        message: "Logged Out"
      })
    } catch (error) {
        next(error)
    }
};
