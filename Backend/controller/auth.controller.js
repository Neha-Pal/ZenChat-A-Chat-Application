import User from "../models/user_model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    const { username, email, password, confirmPassword, gender } = req.body;

    try {
        let validUser = await User.findOne({ email });

        if (validUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                error: "Passwords don't match"
            });
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

        res.cookie("jwt_token", token,{httpOnly: true}).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
            token
        });

    } catch (error) {
        console.error("Error during signup process:", error);
        res.status(500).json({
            error: "Internal server error",
            message: error.message,  // Include error message for better debugging
        });
    }
};

export const login = (req, res)=>{
    
}
export const logout = (req, res)=>{
    
}