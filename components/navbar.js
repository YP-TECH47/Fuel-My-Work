"use client";
import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const navbar = () => {
  
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  

  return (
    <div>
      <nav className="flex gap-4 list-none h-18 text-white bg-gray-800 p-6 flex-row items-center justify-between">
        <div className="flex items-center   flex-row">
          <Link href="/" className="flex items-center justify-center flex-row">
            <span className="text-xl font-bold">GetMeAChai</span>
            <span className="mb-5">
              <img src="/tea_2.gif" alt="" width="50" height="50" />
            </span>
          </Link>
        </div>

         
        {!session && (
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-linear-to-r w-24 rounded-xl from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
            >
              Login
            </button>
          </Link>
        )}
         

        {session && (
          <div className=" mr-10  "
          onBlur={()=>{setTimeout(() => {
                setIsOpen(false);
              }, 200);}}>
            {/* Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              
              className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md"
            >
           Welcome, {session.user.name}
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
              
              <div  className="absolute mt-2 right-11  bg-black border rounded-lg shadow-lg w-57.5">
                <div className="p-4 border-b">
                  <div className="flex items-center mb-2 justify-center w-full">
                    <img
                    src={session?.user.image} 
                      alt=""
                      srcSet=""
                      className="w-28   h-28 rounded-full overflow-hidden mr-2 flex justify-center items-center"
                    />
                  </div>
                  <div className="font-semibold text-sm flex w-full justify-center items-center">
                    {session?.user.name}
                  </div>
                </div>

                <ul className="py-2 text-center">

                  <Link href="/"  className="block px-4 py-2 hover:bg-gray-900">
                     
                      Home Page
                   
                   </Link>
                  <Link href={`/${session?.user.name}`}  className="block px-4 py-2 hover:bg-gray-900">
                     
                      Your Page
                   
                   </Link>
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-900">
                      Dashboard
                    </Link>
                  </li>

                  
<button onClick={()=>{signOut()}} className="w-full" >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-900 text-red-500"
                      >
                      Sign Out
                    </a>
                  </li>
                      </button>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default navbar;
