"use client"
import React from 'react'
import Sidebar from '../../../components/Sidebar'
import AddNote from '../../../components/AddNote'
import Notes from '../../../components/Notes'
import { Prisma, PrismaClient } from '@prisma/client'
import {decodeProtectedHeader} from 'jose'
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";


export default  function Body({addNotes} : { addNotes: any }) {


  const hello = () => {
    addNotes()
  }

  //const prisma = new PrismaClient() 
  
 

  // const cookieStore = cookies()
  // const hasCookie = cookieStore.get('session_id')
  // console.log(hasCookie, "ds")
  // const decoded = jwtDecode(hasCookie.value);
  //  console.log(decoded, "decoded")
  // const notes = await prisma.notes.findMany({
  //  where: {
  //   userId : decoded.id
  //  }
  // })
 
///console.log(notes, "notjes")

  return (
    <>
    {/* <AddNote/> */}
    
    {/* <Notes notes={notes} /> */}
    <button onClick={hello}>jddsj</button>
    </>
   
  )
}
