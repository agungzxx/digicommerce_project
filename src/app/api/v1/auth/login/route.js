import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    // Jika email ada maka
    if (findUser) {
      const isPasswordMatch = await compare(password, findUser.password);
      if (isPasswordMatch) {
        const payload = {
          id: findUser.id,
          name: findUser.name,
          username: findUser.username,
          email: findUser.email,
          bio: findUser.bio,
        };

        const access_token = sign(payload, process.env.ACCESS_TOKEN_KEY, {
          expiresIn: "7d",
        });
        // Set cookies untuk ditampilkan kedalam browser
        cookies().set("access_token", access_token);

        return NextResponse.json({ data: payload }, { status: 200 });
      }
      return NextResponse.json(
        { error: "username or password doesn't match" },
        { status: 401 }
      );
    }
    // Jika tidak ada maka findUser diisi Null
    return NextResponse.json({ data: findUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: error.status });
  }
}

export async function GET(request) {
  const { email, username } = await request.json();
  try {
    const findAllUser = await prisma.user.findMany({
      select: {
        email,
        username,
      },
    });
    return NextResponse.json({ data: findAllUser }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
