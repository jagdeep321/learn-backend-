
export const Signup = async (req, res) => {

    const data = req.body
    console.log("signup data : ", data);


    res.status(200).json({ message: "signup successfully", status: 200, token: "jroieufoiuo8wufj", data: data })

}