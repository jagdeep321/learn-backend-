import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { AuthService } from "../service/auth.service.js";

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
      const response = await authService.login({  email, password })
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
      const response = await authService.getMe({id})

   
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

//         // agar mere ko 1 record delete krna hai db se
//         const user = await User.findByIdAndDelete(id)


//         user.password = undefined
//         res.status(200).json({ data: user })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message })
//     }
// }