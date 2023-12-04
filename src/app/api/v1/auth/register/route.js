import { prisma } from "@/utils/prisma"
import { hash } from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(request){
    const {name, username, email, password} = await request.json()
    try {
        const hashPassword = await hash(password, 10)
        const createUser = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password: hashPassword,
                    }
        });
        return NextResponse.json({data: createUser}, {status: 201})
    } catch (error) {console.log(error);}
    return NextResponse.json("POST ready")
}