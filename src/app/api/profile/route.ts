import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import { User } from "@/models/User";

type dataProps = {
    name: string
}

// connect to mongoose

const run = async () => {
    await mongoose.connect(process.env.MONGODB_URL as string);
      console.log("Connectedj to myDB");
}
    
export async function PUT(req: Request, res: Response) {
  
   // connect to mongoose
   run().catch((err) => console.error(err))
   let data:dataProps;
   const jsonResponse = await req.json().then(async response => {
         data = await response;
    });   
 
   const session = await getServerSession(options)
   const email = session?.user?.email;
   // update user in database   
   await User.updateOne({email},data!)
   return Response.json({
        status: 200,
        data: session!.user
    });
}

export async function GET() {
    // connect to mongoose server
    run().catch(err => console.error(err));
    const session = await getServerSession(options)
    const email = session?.user?.email;
    return Response.json(
        await User.findOne({email})
    )
}