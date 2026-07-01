import express from "express";
import { Login, Signup } from "../controller/auth.controller.js";

const authRoute = express.Router()

authRoute.post("/signup", Signup)
authRoute.post("/login", Login)
// authRoute.post("/login")


export default authRoute