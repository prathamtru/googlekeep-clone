"use client";

import React, {useState} from 'react'
import "../app/globals.css"
//import {Logo} from '../../public/next.svg'
import Image from 'next/image';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import { MdOutlineGridView } from "react-icons/md";
import { PiListFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";



export default function Navbar() {

  const[view, setview] = useState("tab")
  return (
    <div className="NavContainer">   
    
       <div className='NavIconContainer'>      
            <MdOutlineMenu style={{marginTop:"6px", marginRight:"20px"}}
            size={28}/>
        <Image
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/bulb.svg"
          alt="Next.js Logo"
           width={80}
           height={1000}
          priority
        />
      <p style={{fontSize:'28px', fontWeight:'bold'}}>Keep</p>
       </div>

    <div className='NavSearchContainer' >      
      <IoMdSearch style={{marginTop:"6px", marginRight:"20px"}}
      size={28}/>
      <input style={{border:"none"}} type="text" placeholder='search'></input>

    </div>

    <div className='NavProfileContainer'>      
      <IoIosRefresh size={42}  />
     { view=="tab" ? <MdOutlineGridView  size={42}/> : <PiListFill size={42} />}
      
      <IoMdSettings size={42} />
      <Image
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/blank.svg"
          alt="Next.js Logo"
           width={80}
           height={1000}
          priority
        />
    </div>


    </div>
  )
}

