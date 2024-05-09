import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { assistant } from "@/components/font";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" h-screen w-screen ">
          <section className="relative bg-[#7aa8c5]/60  h-full w-full bg-no-repeat   bg-[url('/pic.jpg')] bg-cover   text-gray">
            <div className="absolute   right-0 left-0 top-0 bottom-0  h-full w-full">
               <div className="p-8 flex flex-col justify-center items-center w-screen bg-[#eee]/80 h-screen m-auto " >
                      <p className="font-light text-[2rem]">Welcome to!</p>
                      <p className="font-bold text-[1.8rem] md:text-[2.5rem]  lg:text-[3.5rem]">M.K SDA Int Church,</p>
                      <p className="mt-3 text-wite text-center">This site is under contruction. we are actively working on it.  </p>
                      <Link href='https://www.facebook.com/search/top?q=milton%20keynes%20international%20sda%20church' 
                        className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#0172a5] font-semibold mt-6  px-4 py-3  font- leading-6 text-lg capitalize
                        text-white shadow-sm  hover:bg-[#0172a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                        Visit Our Facebook now
                        <IoIosArrowForward/>
                      </Link>
                </div>
            </div>
      </section>
   
    </main>
  );
}
