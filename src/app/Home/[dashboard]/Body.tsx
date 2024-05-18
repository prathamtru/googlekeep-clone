import React from 'react'
import Sidebar from '../../../components/Sidebar'
import AddNote from '../../../components/AddNote'
import Notes from '../../../components/Notes'
import { Prisma, PrismaClient } from '@prisma/client'
import {decodeProtectedHeader} from 'jose'
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";
import * as PrismaServices from '../../../lib/dataServices/PrismaServices'
import { revalidatePath } from 'next/cache'


export default async  function Body() {

  const prisma = new PrismaClient() 

 const addNotes = async (title, body) => {
  "use server"
  console.log("hello")
 const note = await PrismaServices.addNote(title, body)
revalidatePath('/')
 console.log(note)

 }


  const cookieStore = cookies()
  const hasCookie = cookieStore.get('session_id')
  const decoded = jwtDecode(hasCookie.value);
  const notes = await prisma.notes.findMany({
   where: {
    userId : decoded?.id
   }
  })
 

  return (
    <>
    <AddNote addNotes={addNotes} />
    <Notes notes={notes} />
    {/* <button onClick={hello}>jddsj</button> */}
    </>
   
  )
}
