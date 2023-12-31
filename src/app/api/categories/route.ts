import { Category } from "@/models/Category";

export async function POST (req: Request)  {

    const {name} = await req.json();

    const categoryDoc = await Category.create({name})

    return Response.json(categoryDoc);
}

export async function PUT (req: Request)  {

    const {_id,name} = await req.json();

    const categoryDoc = await Category.updateOne({_id},{name})

    return Response.json(categoryDoc);
}


export async function GET () {
    const categories = await Category.find();
    return Response.json(categories);
}