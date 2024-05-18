import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient() 

export const addNote = async (title, body) => {

    return await prisma.notes.create({
            data : {
              title :  title,
              body :  body,
              status : "active",
              userId: "dae61b2f-c320-4daf-9a4f-527389826256"
            },      
        })

  };