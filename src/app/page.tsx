import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { assistant } from "@/components/font";
import Link from "next/link";
import DrawerExample from "@/components/slider";


export default function Home() {
  return (
    <main className=" h-scre w-scree ">
      {/* <div className=" bg-[#7aa8c5]/60   flex flex-col justify-end h-screen w-full bg-no-repeat  bg-[url('/pic.jpg')] bg-fixed bg-cover   text-gray">
      
      </div>  */}
  <div className="bg-[url('/prayer1.jpg')] lg:bg-[url('/prayer2.jpg')] bg-cover bg-fixed">
        
     <section className="b-[#7aa8c5]/30 py-8 h-[30rem]  bg-fixed -z-10 pt-6 mt-28  img_4">
            <div className=" mt-3 h-full">
            <div className="p-8  h-full text-white bg-[#000]/40 w-[90%] m-auto 
                lg:mb-10 overflow-hidden" >
                      {/* <p className="font-bold te text-[2rem] md:text-[2.5rem]">prayers!</p> */}
                      <p className="font-bold text-[1.8rem] md:text-[2.5rem] ">Prayer has the power to heal the soul</p>
                      <p className="mt-3 text-wite lg:w-[70%]">Prayer is the song we sing in our hearts, the hope we keep in our minds, the music of our souls. With prayer, we can overcome all hardships and find joy. We can overcome difficulty and find salvation. Come pray with us. Discover the power that is inside of you, waiting to be set free. </p>
                      <button
                        type="submit"
                        className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-dark-blue font-semibold mt-6  px-4 py-3  font- leading-6 text-lg capitalize
                        text-white shadow-sm  hover:bg-dark-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                        Join us
                        <IoIosArrowForward/>
                      </button>
                </div>
            </div>
      </section>
      <section className="h-[35rem] drop-shadow-lg bg-mid-blue/70 custom-border-layer1 z-10">
        <div className="h-full w-full bg-light-blue/70 custom-border-layer2 drop-shadow-md ">
           <div className="h-full w-full bg-white custom-border-layer3 ">
          
          </div>
         </div>
        </section>
          </div>

    </main>
  );
}
