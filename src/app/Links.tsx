import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};
 const  Links:React.FC<Props> =({ category, isActive }: Props)=> {
  return (
    <div className="flex justify-center">
      <Link href={`/page/${category}`} className={`navLink ${isActive && "underline decoration-orange-400 underline-offset-4 font-bold text-lg  "}`}>
        {category}
      </Link>
    </div>
  );
}

export default Links