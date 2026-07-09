import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
//class bnai hai 
export class AuthService {

    //function decleration
    createUser(data) {
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

    login() {

    }

    getMe() {

    }

}