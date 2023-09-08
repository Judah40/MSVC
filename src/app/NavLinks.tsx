'use client'


import React from 'react'
import { categories } from '../../constants'
import NavHEader from './Links'
import {usePathname} from "next/navigation"
const  NavLinks=()=> {

  const pathname = usePathname()

  const isActiveMain = (path:string)=>{
    return pathname?.split("/").pop()===path
  }

  
  return (
    <nav className='grid grid-cols-4 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b '>
      {categories.map((categoryin)=>
        (  <NavHEader key={categoryin} categoryMain={categoryin} isActiveMain={isActiveMain(categoryin)} >
          {categoryin}
        </NavHEader>)
      )}

    
    </nav>
  )
}

export default NavLinks
