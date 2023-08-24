import { useState } from "react"
import React from 'react'
import {AiOutlineMenu, AiOutlineHome} from "react-icons/ai"

const Sidenav= () => {
   
   const {nav, setNav} = useState(false)
   const handleNav = () => {
    setNav(!nav);
//used to change the state of my navbar

   };
   
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {/* anything above the medium break point is hidden so that way it's going to display none whenever we pass our breakpoint*/}
        {
            nav ? (    //this is "if and else"
                <div className='fixed w-full h-sceen bg-white/90 flex-col justify-center items-center z-20'>
                    <a href="#main" className='w-[75%] flex justify-center'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                </div>
            )
            : (
                <div></div>
            )
        }
        
        </div>
    );
};

export default Sidenav
