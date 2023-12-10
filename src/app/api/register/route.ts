
import { User } from "@/models/User";
import mongoose from "mongoose";
import {  NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {

   const body = await req.json();
    mongoose.connect(process.env.MONGODB_URL as string);

   const createdUser =  await User.create(body)
    return  NextResponse.json({
        status: 200,
        "message" :"Success",
        user: createdUser
    })
}