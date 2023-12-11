"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className=" max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">Your Ideas,Documents,& Plans. Unfied. Welcome to <span className="underline">Lotion</span> </h1>
        <h3 className="text-base sm:text-xl md:text-2xl">Lotion is the Connected WorkSpace where better , faster work happens..</h3>
      <Button>
        Enter Lotion 
        <ArrowRight className="w-4 h-4 ml-3" />
         </Button>
        
         
    </div>
  )
}


