import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
//class bnai hai 
export class AuthService {

    //function decleration
   async createUser(data) {
        try {

            //password hide krn vste property 
            const salt = bcrypt.genSaltSync(10);
            const encryptedPassword = bcrypt.hashSync(password, salt);

            const data = {
                name,
                email,
                password: encryptedPassword
            }
            const savedUser = await User.create(data)

            return { status: 200, user: savedUser }
        } catch (error) {
            return { status: 500, mesage: error.message }
        }
    }

    async login() {
        try {
             const user = await User.findOne({ email })
            
                    if (!user) {
                        res.status(404).json({ message: "User Not found" })
                    }
            
                    const isMatch = bcrypt.compareSync(password, user.password); // true
            
                    if (!isMatch) {
                        res.status(401).json({ message: "Invalid password" })
                    }
            
                    var token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.SECRET_KEY, { expiresIn: '365d' });
             return { status: 200, user, token, mesage: "Login succesfully" }
        } catch (error) {
            return { status: 500, mesage: error.message }
            
        }

    }

   async getMe() {
        try {
               const user = await User.findById(id)
                    user.password = undefined
  return { status: 200, user }
        } catch (error) {
               return { status: 500, mesage: error.message }
        }

    }

}