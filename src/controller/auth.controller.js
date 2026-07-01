import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {

    try {
        const { name, email, password } = req.body


        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        const data = {
            name,
            email,
            password: encryptedPassword
        }

        const savedUser = await User.create(data)

        res.status(200).json({ message: "signup successfully", data: savedUser })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }

}

export const Login = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({ message: "User Not found" })
        }

        const isMatch = bcrypt.compareSync(password, user.password); // true

        if (!isMatch) {
            res.status(401).json({ message: "Invalid password" })
        }

        res.status(200).json({ message: "Login successfully", data: user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }

}