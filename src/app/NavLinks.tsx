'use client'


import React from 'react'
import { categories } from '../../constants'
import Links from './Links'
import {usePathname} from "next/navigation"
const  NavLinks=()=> {

  const pathname = usePathname()

  const isActive = (path:string)=>{
    return pathname?.split("/").pop()===path
  }
  return (
    <nav className='grid grid-cols-4 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b '>
      {categories.map((category)=>
        (  <Links key={category} category={category} isActive={isActive(category)} >
          {category}
        </Links>)
      )}

    
    </nav>
  )
}

export default NavLinks
