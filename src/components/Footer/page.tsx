import NavLinks from '@/app/NavLinks'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='background-main h-96 w-full grid grid-cols-1 place-items-center'>
      <div className='h-80 w-10/12  grid grid-cols-2'>

        <div>

      <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-4xl text-white">msvc</h1>
        </Link>

        <Link href={"facebook.com"}>
            
        </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4'>
            <div>
                <Link href={"/"}
                
                style={{color:"white", textDecoration:"underline"}}>
                    Home
                </Link>
            </div>
            <div>
                <Link href={"/"}
                style={{color:"white", textDecoration:"underline"}}
                >
                    Articles
                </Link>
            </div>
            <div>
                <Link href={"/"}
                style={{color:"white", textDecoration:"underline"}}
                >
                    Services
                </Link>
            </div>
            <div>
                <Link href={"/"}
                style={{color:"white", textDecoration:"underline"}}
                >
                    Contact
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
