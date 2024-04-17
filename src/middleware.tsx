import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {verify} from 'jsonwebtoken'
import * as jose from 'jose'




export const middleware = async(request : NextRequest, response:NextResponse) => {


   // const x = await jwtVerify();
    console.log( "dsfsd")
    // let accessToken = jwtVerify()
    // console.log(accessToken, "access")

    
	// if(accessToken &&  request.nextUrl.pathname === "/Register")
    // {
    //    return NextResponse.redirect(new URL('/Home', request.url));
    // }
    // else if(!accessToken &&  request.nextUrl.pathname !== "/Register")
    // {
    //     return NextResponse.redirect(new URL('/Register', request.url));
    // }

//   const ver = jose.jwtVerify(accessToken, "GoogleKeepSecretCode")

//   console.log(ver)
    
    

}