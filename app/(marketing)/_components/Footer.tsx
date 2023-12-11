import React from 'react';
import {Logo } from './Logo';
import { Button } from '@/components/ui/button';
export const Footer = () => {
  return (
   
    <div className='flex dark:bg-[#1F1F1F] items-center w-full p-6 z-50'> 
        <Logo />
        <div className='md:ml-auto w-full justify-center md:justify-end
        flex gap-x-2 items-center text-muted-foreground'>
     <Button variant="ghost" size="sm">
      Privacy Policy
     </Button>
     <Button variant="ghost" size="sm">
      Terms & Conditions
     </Button>
        </div>
    </div>
    
  )
}

export default Footer;
