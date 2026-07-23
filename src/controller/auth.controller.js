import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { AuthService } from "../service/auth.service.js";
import { uploadToCloudinary } from "../cloudinary/cloudinary.js";

export const Signup = async (req, res) => {

    const { name, email, password } = req.body

    const authService = new AuthService()

    const response = await authService.createUser({ name, email, password })

    if (response.status === 200) {
        res.status(200).json({ message: "signup successfully", data: response.savedUser })
    } else {
        res.status(500).json({ message: error.message })
    }

}

export const Login = async (req, res) => {
    console.log("login api called.........");


    const { email, password } = req.body

    const authService = new AuthService()
    const response = await authService.login({ email, password })
    if (response.status === 200) {
        res.status(200).json({ message: "Login successfully", data: responseuser, token })
    } else {
        console.log(error);
        res.status(500).json({ message: error.message })
    }


}

export const GetMyAccount = async (req, res) => {

    const id = req.id


    const authService = new AuthService()
    const response = await authService.getMe({ id })


    if (response.status === 200) {
        res.status(200).json({ data: user })
    } else {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

// export const Update = async (req, res) => {
//     const { id } = req.params
//     const { todo } = req.body

//     try {
//         // agar 1 document nikalna hai dn se
//         const user = await User.findById(id)

//         // agar sabhi document nikalna hai dn se
//         const users = await User.find({})

//         // agar 1 document ko update krna hai
//         const user = await User.findByIdAndUpdate(id, { todo })

//         // agar mere ko 1 record delete krna hai db se with id
//         const user = await User.findByIdAndDelete(id)

//         // agar 1 document ko update krna hai without id but email hai
//         const user = await User.findOneAndUpdate({email},updateData)

//         // agar mere ko 1 record delete krna hai db se without id but email or phone hai
//         const user = await User.findOneAndDelete({email})


//         user.password = undefined
//         res.status(200).json({ data: user })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message })
//     }
// }
export const UploadLogo = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const imageUrl = await uploadToCloudinary(file.path, "logos");

        console.log("imageUrl : ",imageUrl);
        

        res.status(200).json({
            success: true,
            url: imageUrl,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to upload image",
        });
    }
};
