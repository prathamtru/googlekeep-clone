import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('session_id')?.value


    const auth =  await verifyAuth(token);
   
    if(auth && req.url.includes('/login'))
    {
        // console.log("hello")
     return NextResponse.redirect(new URL('/Home/notes', req.url))

    }

    if((!auth || auth == undefined) && !req.url.includes('/login'))
    {
        //console.log("redirecy")
    
            return NextResponse.redirect(new URL('/login', req.url))      
    }
}

export const config ={
    matcher : ['/login', '/Home/:path*']
}