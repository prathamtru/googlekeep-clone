"use client"
import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineUnarchive } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';


export default function Sidebar() {

const router = useRouter();



  return (
    <div className='sideContainerOpen'>
        
        <div onClick={() => router.push('/Home/notes')}> <FaLightbulb style={{marginTop:'4px'}}  />  <p>Notes</p>  </div>
        <div  onClick={() => router.push('/Home/Reminders')}> <FaRegBell style={{marginTop:'4px'}} /> <p>Reminders</p> </div>
        <div onClick={() => router.push('/Home/editLabels')} > <MdOutlineEdit style={{marginTop:'4px'}}  /> <p>Edit Labels</p> </div>
        <div onClick={() => router.push('/Home/archive')} ><MdOutlineUnarchive style={{marginTop:'4px'}} /> <p>Archive</p> </div>
        <div onClick={() => router.push('/Home/bin')}> <IoTrashBinOutline  style={{marginTop:'4px'}} /> <p>Bin</p> </div>
   </div>
  )
}

