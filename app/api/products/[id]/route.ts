// import { products } from "@/app/product-data";
import { connectToDb } from "../../db";
import { NextRequest } from "next/server";
type Params = {
    id: string;
}
export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDb();
    const productId = params.id;
    const product = await db.collection('products').findOne({ id: productId });
    console.log('product>>', product)
    if (!product) {
        return new Response("Product not found", {
            status: 404,
        })
    }
    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}