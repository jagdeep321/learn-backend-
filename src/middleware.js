import jwt from "jsonwebtoken"


export const Middleware = (req, res, next) => {

    //
    const token = req.headers.authorization.split(" ")[1]

    if (!token) {
        res.status(404).json({ message: "Token not found" })
    }

      var decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decoded.id
    next()

}