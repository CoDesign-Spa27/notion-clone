"use client";

import { useConvexAuth } from 'convex/react';

import Usescrolltop from '@/hooks/Usescrolltop'
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './Logo';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { SignInButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

 export const Navbar = () => {
  const {isAuthenticated,isLoading}= useConvexAuth();

  const scrolled =Usescrolltop();
  return (
    <div className={cn("z-50 dark:bg-[#1f1f1f] bg-background fixed top-0 flex items-center w-full p-4",scrolled && "border-b shadow-sm")} >
      <Logo />
      <div className='md:ml-auto md:justify-end w-full flex items-center gap-x-2'>
        {isLoading &&(
          <p>Loading...</p>
        )}
        {!isAuthenticated && !isLoading && (
          <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">
              Get Lotion Free
            </Button>
          </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>

       
    </div>
  )
}
export default Navbar;


