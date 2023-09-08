import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  categoryMain: string;
  isActiveMain: boolean;
  key?: string; // Add key to the props type
  children?: React.ReactNode; 
};
 const  NavHEader:React.FC<Props> =({ categoryMain, isActiveMain })=> {

  const [stateVal, setState] = useState(`/${categoryMain}`)

  useEffect(()=>{
    if(categoryMain==="home"){
      setState('/')
    }
  },[])
  return (
    <div className="flex justify-center">
      <Link  href={stateVal} className={`navLink ${isActiveMain && "underline decoration-orange-400 underline-offset-4 font-bold text-lg  "}`}>
        {categoryMain}
      </Link>
    </div>
  );
}

export default NavHEader