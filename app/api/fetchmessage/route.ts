import { NextRequest,NextResponse } from "next/server"
import { getServerSession } from 'next-auth'
import { prisma } from "@/lib/db";
import { z } from "zod";

//end point for fetching the message for the admin
export async function GET() {
  const session = await getServerSession()
  console.log(session,"session")
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    
    const data= await prisma.message.findMany(
      {
        where: {
          read: false
        },
        orderBy:{
          createdAt:'desc'
        }
      }
     )
     return NextResponse.json({data})
  } catch (_error) {
    console.log(_error)
    return NextResponse.json({ error: 'Error fetching message details', status: 500 })
  }
  
   
}

// Define schema for validation
const markAsReadSchema = z.object({
  id: z.string({
    required_error: "Message ID is required"
  })
});

//end point for marked a message as read
export async function POST(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  let data;
  try {
    data = await request.json();
  } catch (_error) {
    console.log(_error)
    return new Response('Invalid JSON', { status: 400 });
  }

  try {
    // Validate the request data against our schema
    const validData = markAsReadSchema.parse(data);
    
    await prisma.message.update({
      where: {
        id: validData.id
      },
      data: {
        read: true
      }
    });
    
    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: error.errors 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Internal Server Error', { status: 500 });
  }
}
