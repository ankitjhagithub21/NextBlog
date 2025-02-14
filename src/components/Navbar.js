import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link href={"/"} className="font-bold text-2xl">
          Next<span className="text-secondary">Blog</span>{" "}
        </Link>
      </div>
      <div className="flex-none lg:w-1/4 w-auto">
        <div className="flex gap-2 items-center w-full  bg-gray-200 px-4 py-2 rounded-full">
          <input type="text" className="outline-none w-full bg-transparent placeholder-gray-600"  placeholder="Search blog.." />
         <Search className="text-gray-600" size={20}/>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
