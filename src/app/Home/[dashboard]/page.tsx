import Body from "@/app/Home/[dashboard]/Body"
import React from "react"

export default async function Slug({title}) {
  const addNotes = async() => {
    "use server"

    //console.log("hello")
    // await prisma.notes.create({  data : {
    //   tiile : data.firstName,
    //   body : data.lastName ?? data.firstName.split(" ")[1]  ?? "lastName",
    //   email : data.email,
    //   password : hash,
    //   role : data.role || "1",
    //   // createdAt : Date.now(),
    //   // updatedAt : Date.now()

  // },   })

    
  }



  return (
    <div><Body addNotes={addNotes}/></div>
  )
}
