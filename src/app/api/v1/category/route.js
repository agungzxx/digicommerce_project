import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allCategories = await prisma.category.findMany();
    return NextResponse.json({ data: allCategories }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function POST(request) {
  const { name, slug } = await request.json();
  try {
    const createCategory = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });
    return NextResponse.json({ data: createCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: error.status });
  }
}
