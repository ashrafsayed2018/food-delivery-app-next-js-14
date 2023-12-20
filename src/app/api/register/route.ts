
import { User } from "@/models/User";
import mongoose from "mongoose";
import {  NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(req: Request, res: Response) {

   const body = await req.json();
  
    const run = async () => {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("Connectedj to myDB from register");
  }
  
  run()
  .catch((err) => console.error(err.message));

  
     const pass = body.password;
    if(!pass?.length || pass?.length < 5) {
        throw new Error("password must be at least 5 characters");
       
    }

    const notHashedPassowrd = pass;
    const salt = bcrypt.genSaltSync(10);
   const  hashedPassword = bcrypt.hashSync(notHashedPassowrd, salt);
    body.password = hashedPassword
   const createdUser =  await User.create(body)
    return  NextResponse.json({
        status: 200,
        "message" :"Success",
    })
}