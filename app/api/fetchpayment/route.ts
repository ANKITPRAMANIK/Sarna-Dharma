import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";

// Define PaymentDetail type to fix typing in the reduce accumulator
type PaymentDetail = {
    id: string;
    transactionId: string;
    message: string|null;
    name: string;
    email: string;
    amount: number;
    approved: boolean;
};

//endpoint to fetch the payment details for the admin
export async function GET() {
    const session = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const details = await prisma.payment.findMany({
            where: {
                approved: false,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        
        // Properly typed accumulator and handling potential undefined transactionIds
        const responseData = details.reduce<Record<string, PaymentDetail>>((acc, detail) => {
            if (detail.transactionId) {
                acc[detail.transactionId] = {
                    id: detail.id,
                    transactionId: detail.transactionId,
                    message: detail?.message,
                    name: detail.name,
                    email: detail.email,
                    amount: detail.amount,
                    approved: detail.approved,
                };
            }
            return acc;
        }, {});
        
        return NextResponse.json(responseData);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error fetching payment details" }, { status: 500 });
    }
}

const paymentSchema = z.array(z.string());
//endpoint to approve the payment for the admin
export async function POST(req: NextRequest) {
    const session = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        console.log(body);
        const ids = paymentSchema.parse(body);
        console.log(ids);
        await Promise.all(ids.map(async (id: string) => {
            await prisma.payment.update({
                where: {
                    transactionId: id,
                },
                data: {
                    approved: true,
                },
            });
        }));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error approving payment" }, { status: 500 });
    }
}