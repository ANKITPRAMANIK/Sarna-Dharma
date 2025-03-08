import { NextRequest, NextResponse } from "next/server"
import { z } from 'zod'
import { prisma } from "@/lib/db";
//endpoint for submitting a message
const submitMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  text: z.string(),
  subject: z.string()
})
//endpoint to submit a message
export async function POST(request: NextRequest) {
  try {
    // Validate the request data against our schema
    const validData = submitMessageSchema.parse(await request.json());
    await prisma.message.create({
      data: {
        name: validData.name,
        email: validData.email,
        subject: validData.subject,
        text: validData.text
      }
    });
    return NextResponse.json({ success: true });
  } catch (_error) {
    console.log(_error,"error")
    return NextResponse.json('Invalid Data', { status: 400 });
  }
}