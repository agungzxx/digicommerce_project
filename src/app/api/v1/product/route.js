import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET ALL PRODUCT
export async function GET(request) {
  // get request from url
  const { searchParams } = new URL(request.url);
  //   get "slug" from request url
  const slug = searchParams.get("slug");

  try {
    // if slug, show the product
    if (slug) {
      const product = await prisma.product.findFirst({
        where: {
          slug,
        },
      });
      return NextResponse.json({ data: product }, { status: 200 });
    }
    // if !slug show all products
    const products = await prisma.product.findMany();
    return NextResponse.json({ data: products }, { status: 200 });
    // error handling
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

// CREATE PRODUCT
export async function POST(request) {
  // get all from request
  const {
    name,
    slug,
    shortDescription,
    overview,
    price,
    featuredImage,
    file,
    images,
    categoryId,
    userId,
  } = await request.json();
  // add on db
  try {
    const createProduct = await prisma.product.create({
      data: {
        name,
        slug,
        shortDescription,
        overview,
        price,
        featuredImage,
        file,
        images,
        categoryId,
        userId,
      },
    });
    // successfully created, send respon 201
    return NextResponse.json({ data: createProduct }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}
