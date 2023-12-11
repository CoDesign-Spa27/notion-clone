 import { cn } from "@/lib/utils";
import Image  from "next/image";
import { Poppins } from "next/font/google";


const logo =Poppins({
    subsets: ["latin"],
    weight:["400","600"]
 });
export const Logo = () => {


  return (
    <div className="hidden dark:bg-[#1f1f1f] md:flex items-center gap-x-2 ">
    <Image 
    className="dark:hidden"
    src="/logo.svg"
    alt=""
    width="40"
    height="40"
    >
    </Image>
  <Image 
    className="dark:block hidden"
    src="/logo-dark.svg"
    alt=""
    width="40"
    height="40"
    ></Image>
    
    <p className={cn("font-semibold")}>
        Lotion
    </p>
    </div>
  )
}

export default Logo
