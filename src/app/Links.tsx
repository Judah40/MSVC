import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  category: string;
  isActive: boolean;
};
 const  Links:React.FC<Props> =({ category, isActive }: Props)=> {

  const [state, setState] = useState(`/${category}`)

  useEffect(()=>{
    if(category==="home"){
      setState('/')
    }
  },[])
  return (
    <div className="flex justify-center">
      <Link href={state} className={`navLink ${isActive && "underline decoration-orange-400 underline-offset-4 font-bold text-lg  "}`}>
        {category}
      </Link>
    </div>
  );
}

export default Links