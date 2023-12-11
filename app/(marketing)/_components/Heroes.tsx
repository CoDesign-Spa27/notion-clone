import React from 'react'
import Image from 'next/image';
export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1240px]'>
      <div className='flex  items-center'>
     <div className='relative w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]'>
      <Image
       src="/documents.png"
       fill 
       alt="Documents"
       className='dark:hidden object-contain'
      ></Image>
      <Image
       src="/documents-dark.png"
       fill 
       alt="Documents"
       className='dark:block hidden object-contain'
      ></Image>
</div>
<div className='relative w-[300px] h-[300px] hidden md:block'>
      <Image
       src="/reading.png"
       fill 
       alt="Reading"
       className='dark:hidden object-contain'
      ></Image>
       <Image
       src="/reading-dark.png"
       fill 
       alt="Reading"
       className='hidden dark:block object-contain'
      ></Image>

     </div>

      </div>
    </div>
  )
}

export default Heroes;
