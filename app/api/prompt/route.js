import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database"


export const GET = async (request)=>{
    try{
        await connectToDB();

         // Set appropriate cache-control headers
    response.setHeader("Cache-Control", "no-store, must-revalidate");

        const prompts = await Prompt.find({}).populate("creator");

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error){
        return new Response("Failed to fetch all prompts", {status: 500});
    }
}