import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 shadow-lg bg-white">
      <div className="navbar-start">
        <Link href={"/"} className="font-bold text-2xl">
          Next<span className="text-secondary">Blog</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href={"/blogs"}>Blogs</Link></li>
      <li><Link href={"/new-blog"}>New Blog</Link></li>
    </ul>
  </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center  bg-gray-200 px-4 py-2 rounded-full">
          <input type="text" className="outline-none w-full bg-transparent placeholder-gray-600"  placeholder="Search blog.." />
         <Search className="text-gray-600" size={20}/>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
