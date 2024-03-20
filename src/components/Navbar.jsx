import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-500 ">
      <div className="max-w-[1300px] h-[50px]  flex items-center justify-start gap-[50px] w-[90%] m-auto">
        <Link href="/">Home</Link>
        <Link href="/pageTwo">Pagina dos</Link>
      </div>
    </div>
  );
};

export default Navbar;
