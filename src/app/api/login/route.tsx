
import { PrismaClient, Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const bcrypt = require('bcrypt'); 
import jwt from 'jsonwebtoken';

export async function POST(req :Request,res : Response){
   
    const prisma = new PrismaClient()
    const data  = await req.json()

    try{

    if(!data.email || !data.password)
    {
        return NextResponse.json({
            "msg" : "Please Provide a Valid Email or Password"
            })
    }

    const creds = await prisma.user.findUnique({
        where: {
            email: data.email,
        }
    })
    
    let token
    if(creds){ 
       // console.log(creds,  "credsss")
        const bResult = await bcrypt.compare( data.password ,creds.password);
        //console.log(bResult, "bResult")
    if (bResult) {
        token = jwt.sign({
        id: creds.id,
        email: creds.email,
    },
        "GoogleKeepSecretCode",
        { expiresIn: '10h' });
    }
    else
    {
        return NextResponse.json({
        "msg" : "Email or Password doesn't match"
        })
    }
}


    return NextResponse.json({
		success: true,
        msg: "Logged in Successfully",
       
	},
	{
		status: 201,
        headers: { 'Set-Cookie': [`session_id=${token}; HttpOnly; path=/; Secure`,  `userId=${creds.id}` ] }
	})

}
catch(error){
    {
        return NextResponse.json({
        "msg" : "Email or Password doesn't match"
        })
    }
}
}