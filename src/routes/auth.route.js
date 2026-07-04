import express from "express";
import { GetMyAccount, Login, Signup } from "../controller/auth.controller.js";
import { Middleware } from "../middleware.js";

const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login", Login)

// authRoute.post("/update/:id", Update)

authRoute.get("/me", Middleware, GetMyAccount)
// authRoute.post("/login")


export default authRoute