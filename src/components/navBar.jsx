"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { useRouter } from "next/navigation";
function NavBar({ children }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const [scrollNearTop, setScrollNearTop] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY < 100) {
      setScrollNearTop(true);
    } else {
      setScrollNearTop(false);
    }
    if (window.scrollY > lastScrollY) {
     
      setShow(false);
    } else {
   
      setShow(true);
    }

   
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

  
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className=" flex flex-col gap-3 md:gap-6 lg:gap-12">
     
      <div
        className={` ${
          !show ? " -translate-y-full" : "translate-y-0"
        } z-50 fixed transition-all ease-in-out  duration-500 flex px-6 md:px-12 lg:px-24  h-[80px] text-white w-full bg-[#151218] ${
          scrollNearTop ? " bg-opacity-100" : " bg-opacity-65"
        } `}
      >
        <div className="  flex justify-between items-center w-full self-center  ">
          <div className=" font-bold text-2xl">
            <Link href={"/"}>Narada</Link>
          </div>
          <div className={`  hidden   lg:flex`}>
            <div className={`flex gap-6`}>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <div className=" flex items-center gap-5">
              <Link href={"#features"}>
                <div className=" login-btn-class">Features</div>
              </Link>
              <Link target="_blank" href={"https://discord.com/oauth2/authorize?client_id=1256480590539132972"}>
              <div className="px-6 py-4 btn-primary-class cursor-pointer ">
                Give it a Go!
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${menu ? "hidden" : "block"} mt-[0px] `}>
        {children}
      </div>
    </div>
  );
}

export default NavBar;
