import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open , setopen] =useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
      


    return (
        <nav className="bg-cyan-200 p-6">
            <div onClick={() => setopen(!open)} className="md:hidden text-2xl p-6 ">
                {
                    open === true ? <AiOutlineClose /> : <AiOutlineMenu/>
                }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? "top-20" : "-top-60" } bg-cyan-200 px-6`}>
            {
                routes.map(route=> <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;