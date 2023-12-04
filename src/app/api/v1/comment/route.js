import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productid");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        productId,
      },
    });
    return NextResponse.json({ data: comments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function POST(request) {
  const { body, userId, productId } = await request.json();
  try {
    const createComment = await prisma.comment.create({
      data: {
        body,
        userId,
        productId,
      },
    });
    return NextResponse.json({ data: createComment }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
