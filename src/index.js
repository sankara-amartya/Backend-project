import dotenv from "dotenv";
dotenv.config()
import connectDB from "./db/indexdb.js";
import { app } from "./app.js";





connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server started at http://localhost:${process.env.PORT || 8000}`);
  })
})
.catch((err)=>{console.log("Error in DB connection")
});



/*
import express from "express";
const app = express();
;(async () =>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("err:",error);
      throw error;
    })
    app.listen(process.env.PORT, ()=>{
      console.log(`Server started at http://localhost:${process.env.PORT}`);
    })

  }
  catch(error){
    console.error("Error: ", error);
    throw err;
  }
})()*/