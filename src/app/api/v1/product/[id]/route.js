import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json({ data: product }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
