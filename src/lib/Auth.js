
import {jwtVerify, jwtSign} from 'jose'

const jwtsecret = () => {
    return process.env.ACCESS_TOKEN
}

export const verifyAuth = async(token) => {
  
  try{
    let verified =  await jwtVerify(token, new TextEncoder().encode(jwtsecret()))
    console.log(verified, "verifies")
    return verified.payload
  }
  catch(error)
  {
    console.log(error)
  }
}