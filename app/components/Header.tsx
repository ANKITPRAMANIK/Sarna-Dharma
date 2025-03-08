"use client"
import React, { useState } from 'react'
import { X,Menu} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  
  const handlelogin = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if(session?.user?.email){
      await signOut();
    }
    else{
      await signIn();
    }
  };
  
  const handleMobileLogin = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    handlelogin(e);
  };
  
  
  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-4 border-b border-gray-200 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and Organization Name */}
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full relative">
              <video
                src="/flag1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-24 w-fit rounded-xl"
              />
            </div>
            <div className='space-y-3'>
              <h1 className="text-red-700 text-2xl md:text-3xl font-bold tracking-tight">SARNA DHARMA MISSION</h1>
              <p className="text-gray-600 text-xs">WEST BENGAL</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-700 hover:text-red-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Right Side Logos */}
          <div className="hidden md:flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="Emblem" height={100} width={100}
              className="h-24 w-auto"
            /> 
            
              <button
                type="button"
                onClick={(e) =>handlelogin(e)}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
              {session?.user?.email ? "Logout" : "Admin"}
              </button>
            
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/" onClick={() => setIsOpen(!isOpen)}
              className="bg-red-50 border-red-500 text-red-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/trustdirectory" onClick={() => setIsOpen(!isOpen)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Trust Directory
            </Link>
           
            <Link
              href="/program" onClick={() => setIsOpen(!isOpen)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Programs
            </Link>
            <Link
              href="/about" onClick={() => setIsOpen(!isOpen)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" onClick={() => setIsOpen(!isOpen)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/culture" onClick={() => setIsOpen(!isOpen)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Culture
            </Link>
            <button 
              onClick={(e) => handleMobileLogin(e)}
              className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
             {session?.user?.email ? "Logout" : "Admin"}
            </button>
            <div className="mt-4 pl-3 pr-4">
              <Link 
                href="/donate"  onClick={() => setIsOpen(!isOpen)}
                
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <div className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex justify-center">
            <Link href="/" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Home</Link>
            <Link href="/about" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">About Us</Link>
            <Link href="/program" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Program</Link>
            <Link href="/trustdirectory" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Trust Directory</Link>
            <Link href="/donate" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Donate</Link>
            <Link href="/contact" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Contact</Link>
            <Link href="/culture" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Culture</Link>
            {session?.user?.email && (<Link href="/payment" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Payment</Link>)}
           {session?.user?.email && (<Link href="/message" className="px-4 py-3 hover:bg-red-700 transition-colors font-medium">Messages</Link>)}
          </nav>
        </div>
      </div>

      {/* Information Bar */}
     
    </header>
  );
};

export default Header;