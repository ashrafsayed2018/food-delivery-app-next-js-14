import { User } from "@/models/User";
import mongoose from "mongoose";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
    secret:process.env.NEXTAUTH_SECRET,
    providers: [

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
           
            credentials: {
              email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
             
              const {email, password} = credentials ?? { email: undefined, password: undefined };
              
              mongoose.connect(process.env.MONGODB_URL as string)
              const user = await User.findOne({email}); 

              if(!user) return;
              
              const passwordOk = user && bcrypt.compareSync(password!, user.password);

              if(!passwordOk) return;
              return user;
            }
          })
        
    ],
    pages: {},
}