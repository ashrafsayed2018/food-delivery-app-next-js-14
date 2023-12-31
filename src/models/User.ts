import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
      
        message: "Password validation failed"
    },
    image: {
        type: String
    }
    
},{timestamps: true})


export const User = models?.User ||  model("User", UserSchema);

