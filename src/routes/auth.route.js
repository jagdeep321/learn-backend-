import express from "express";
import { GetMyAccount, Login, Signup, UploadLogo } from "../controller/auth.controller.js";
import { Middleware } from "../middleware.js";
import { upload } from "../cloudinary/upload.js";

const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login", Login)

authRoute.post("/uploadLogo", upload.single("logo") , UploadLogo)

// authRoute.post("/update/:id", Update)

authRoute.get("/me", Middleware, GetMyAccount)
// authRoute.post("/login")


export default authRoute