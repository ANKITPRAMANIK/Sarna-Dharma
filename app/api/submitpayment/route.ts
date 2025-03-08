import { NextRequest, NextResponse } from "next/server"
import { z } from 'zod'
import { prisma } from "@/lib/db";

//endpoint to fetch the payment details
export async function GET() {
  try {
    const payments = await prisma.payment.findMany(
      {
        where:{
          approved:true
        },
        orderBy: {
          createdAt: 'desc',
        },
      }
    );
    return NextResponse.json(payments);

  } catch (error) {

    console.error(error);
    return NextResponse.json({ message: "Failed to fetch payments" }, { status: 500 });
  }
}

const paymentSchema = z.object({
  name: z.string(),
  email: z.string(),
  amount: z.string(),
  message: z.string().optional(),
  transactionId: z.string(),
  approved: z.boolean().optional(),
})

//end point to submit a payment data
export async function POST(request: NextRequest) {
  try {
    const pr= await request.json()
    console.log("test0",pr)
    const paymentData = paymentSchema.parse(pr)
   console.log("test1",paymentData)
    const { name, email, amount, message, transactionId} = paymentData
     await prisma.payment.create({
      data: {
        name,
        email,
        amount:Number(amount),
        message,
        transactionId,
        approved: false,
      },
    });

    return NextResponse.json({ message: "sucess", status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Payment data is incomplete", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Failed to create payment" }, { status: 500 });
  }
}