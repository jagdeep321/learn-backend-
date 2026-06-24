import express from "express";

const app = express()
app.use(express.json())
const PORT = 9090


app.listen(PORT,()=>{
    console.log("server is running on port 9090.........");  
})

// check server running or not
app.get("/",(req,res)=>{
   res.status(200).json({message:"backend is live now...",data:{name:"sandeep",age:"24",address:"HR"}})
})

// get user data with params and query
app.get("/api/v1/getdata/:id",(req,res)=>{
     const {id} = req.params
     const data = req.query
     console.log("query data is : ",data);
     
   res.status(200).json({message:"data fetched!!"})
})


app.post("/api/v1/signup",(req,res)=>{

    const data = req.body

    console.log("data : ",data);
    
    
   res.status(200).json({message:"signup successfully", status:200, token:"jroieufoiuo8wufj",data:data})
})

app.put("/api/v1/update/:id",(req,res)=>{
    const data = req.body
    // const { id }  = req.params
    const id  = req.params.id

    console.log("data : ",id,data);

    // here you will write code for update in db
    
    
   res.status(200).json({message:"update successfully", status:200})
})


//java script object notation