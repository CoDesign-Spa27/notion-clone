"use client";
import Usescrolltop from '@/hooks/Usescrolltop'
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './Logo';
import { ModeToggle } from '@/components/ui/ModeToggle';

 export const Navbar = () => {

  const scrolled =Usescrolltop();
  return (
    <div className={cn("z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 flex items-center w-full p-6",scrolled && "border-b shadow-sm")} >
      <Logo />
      <div className='md:ml-auto md:justify-end w-full flex items-center gap-x-2'>
        <ModeToggle />
      </div>

       
    </div>
  )
}
export default Navbar;


