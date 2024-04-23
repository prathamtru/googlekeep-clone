import { PrismaClient, Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const bcrypt = require('bcryptjs'); 
import generatePassword from '@/utils/GeneratePassword';
import { verifyAuth } from '@/lib/auth';
import jwt from 'jsonwebtoken';


export async function POST(req: Request){

    try{

    const prisma = new PrismaClient()
    const data  = await req.json()

 
console.log(data, "dattaa")
    if(!data.email || !data.password || !data.firstName)
    {
        return NextResponse.json({
            success: false,
            msg: "Please provide all the details"
         },
         {
           status:400,
           
         })
    }
    

    const hash = await bcrypt.hash(data.password, 10);

    console.log(hash,"hashh")

    const user = await prisma.user.create({
        data : {
            firstName : data.firstName,
            lastName : data.lastName ?? data.firstName.split(" ")[1]  ?? "lastName",
            email : data.email,
            password : hash,
            role : data.role || "1",
            // createdAt : Date.now(),
            // updatedAt : Date.now()

        },      
    })

    let token
    
    if(user){
      token = jwt.sign({
        id: user.id,
        email: user.email,
    },
        process.env.ACCESS_TOKEN || '',
        { expiresIn: '10h' });
    

     return NextResponse.json({
        success: true,
        email : user.email,
     },
     {
       status:200,
       headers: { 'Set-Cookie': `session_id=${token}; HttpOnly; path=/; Secure` }
     })
    }
  }
    catch(error) {
        if(error.code == "P2002")
        {
            return NextResponse.json({
                success: false,
                msg : "User Already Exists",
             },
             {
               status:401,
               
             })
        }

        else{

        return NextResponse.json({
            success: false,
            msg : "Something Went Wrong",
         },
         {
           status:400,
           
         })

        }

    }

}