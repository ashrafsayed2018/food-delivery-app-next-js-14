import { Schema, model, models } from "mongoose";

const UserProfileSchema = new Schema({
    email: {
        type:String,
        required: true
    },
    phone: {
        type: String
    },
    streetAddress: {
        type: String
    },
    postalCode: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

export const UserProfile = models?.UserProfile || model("UserProfile",UserProfileSchema);