import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        validate: (pass:string ) => {
            if(!pass?.length || pass?.length < 5) {
                throw new Error("password must be at least 5 characters");
               
            }
            return true
        },
        message: "Password validation failed"
    },
},{timestamps: true})

UserSchema.post("validate",  (user) => {
    const password = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    console.log(user.password);
});
export const User = models?.User ||  model("User", UserSchema);