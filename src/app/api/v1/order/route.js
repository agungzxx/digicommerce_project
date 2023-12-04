import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId, productId } = await request.json();
  try {
    const createOrder = await prisma.order.create({
      data: { userId, productId },
    });
    return NextResponse.json({ data: createOrder }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productid");
  const userId = searchParams.get("userid");

  try {
    // Search by product Id
    if (productId) {
      const orders = await prisma.order.findMany({
        where: {
          productId,
        },
      });
      return NextResponse.json({ data: orders }, { status: 200 });
      //   Search by user Id
    } else if (userId) {
      const orders = await prisma.order.findMany({
        where: {
          userId,
        },
      });
      return NextResponse.json({ data: orders }, { status: 200 });
    }
    // Search All
    const allOrders = await prisma.order.findMany();
    return NextResponse.json({ data: allOrders }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
