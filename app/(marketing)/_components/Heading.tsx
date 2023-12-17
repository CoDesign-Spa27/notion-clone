"use client";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const {isAuthenticated,isLoading}=useConvexAuth();
  return (
    <div className=" max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">Your Ideas,Documents,& Plans. Unfied. Welcome to <span className="underline">Lotion</span> </h1>
        <h3 className="text-base sm:text-xl md:text-2xl">Lotion is the Connected WorkSpace where better , faster work happens..</h3>
 {
  isLoading && (
  <div className="flex w-full items-center justify-center">
    <Spinner size="lg"/>
    </div>
  )
 }
         {isAuthenticated && !isLoading && (
           <Button asChild>
            <Link href="/documents">
           Enter Lotion 
           <ArrowRight className="w-4 h-4 ml-3" />
           </Link>
            </Button>
           
         )}
        {!isAuthenticated && !isLoading && (

          <SignInButton mode="modal">
         <Button>
          Get Lotion Free
          <ArrowRight className="w-4 h-4 ml-3"/>
          </Button>          
  
          </SignInButton>
        )}
         
    </div>
  )
}


