import { Databases, ID, Query} from "appwrite"
import client from "../../../../lib/comment";
import { NextResponse } from "next/server";

const database=new Databases(client);
//create interpreatation
async function createInterpretation(data:{comment:string,}){
    try {
        const response =await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"comments",ID.unique(),data);
      return response
    } catch (error) {
        console.error('Error creating interpretation',error)
        throw new Error("Failed to create interpretation")
        
    }
}
//fetch interpretations
async function fetchInterpretation(){
    try {
        const response =await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"comments"
            ,[Query.orderDesc("$createdAt")])
      return response.documents
    } catch (error) {
        console.log('Error fetching interpretations',error)
        throw new Error("Failed to fetch interpreatations")
        
    }
}
 export async function POST(req:Request){
    try {
        const {comment}=await req.json();
            const data={comment};
            const response=await createInterpretation(data)
            return NextResponse.json({message:"Interpretation Created"})
        }
     catch (error) {
        return NextResponse.json({
            error:"failed to create interpreatation"

        },{status:500});
        
    }}

        export async function GET(){
        try {
            const comments=await fetchInterpretation()
            return NextResponse.json(comments)
            
        } catch (error) {
            return NextResponse.json({
                error:"Failed to fetch interpretations"
            },
        {status:500

        })
        }
    }






