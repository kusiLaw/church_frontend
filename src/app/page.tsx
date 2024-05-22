import Link from "next/link";
import WelcomeSection from "./welcome_section";
import BeliefCard from "@/components/card/beliefs";
import EventCard from "@/components/card/event";
import ProgramCard from "@/components/card/program";
import Input from "@/components/form/input";
import AsideCard from "@/components/card/aside";
import { SlLocationPin } from "react-icons/sl";
import { BiBible } from "react-icons/bi";
import 'dotenv/config'
import YoutubeVideo from "@/components/video/youtube";


export default function Home() {
  return (
    <main className="w-full">
     <section>
            <WelcomeSection />
      </section>
      
      <div className="block lg:flex">

  
        <aside className="  hidden lg:block lg:w-[14rem] mr-2 ">
          <div className="w-full sticky top-36">
            <AsideCard heading="Up comming Events">
              {false &&
              <>
              <EventCard name="One week fasting and prayers" title="Pray without seasion" post_code="mk3 6ty" date="12-12-24" time="11:30 am" />
                <EventCard name="Sabbath School week" title="Teach the love of god" post_code="mk3 6ty" date="12-12-24" time="11:30 am" />
              </>
              }
            </AsideCard>
            <AsideCard heading="Recent activities">
                  {false && <div className=" flex flex-col truncate gap-3 overflow-hidden px-4 ">
                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap  text-base">Week of prayers - 25/06/2024 </Link>
                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap text-base ">Week of prayercsscsscccscs - 25/06/2024 </Link>

                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap  text-base">Week of prayers csc- 25/06/2024 </Link>

                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap text-base">Week of prayerscsc - 25/06/2024 </Link>

                  </div>
                
                  }
            </AsideCard>

          </div>
       
        </aside>
      
      </div>
      
      <section className="relative text-white mt-20 b-[url('/hideout.svg')] bg-[url('/congregation.jpg')] h-fit
          w-full bg-fixed md:bg-cover
          md:bg-no-repeat bg-tp md:bg-center">
        <div className="h-full py-20 w-full -z-10 bg-black/60 ">
          <h2 className={` text-center flex flex-col gap-3 text-3xl font-medium capitalize after:h-[2px] after:w-12 after:self-center 
              after:bg-red-600 mb-10 m text-white`}>
                Weekly activities
          </h2>
        
          <p className="w-full text-center text-lg">We invite you to join us in person and online for worship.</p>
          <div className="w-full mt-10  flex justify-center px-4 sm:justify-between  flex-wrap gap-10 sm:gap-6
           flex-shr border- border-red-700 ">
            <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] lg:w-[22%] flex justify-center ">
              <ProgramCard title="Sunday bible studies" text="Join us study world of God on every sunday." date="Every sunday " time="19:30" link="/" loc="zoom">
                <BiBible/>
              </ProgramCard>
            </div>
              <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] lg:w-[22%]  flex justify-center">

                  <ProgramCard title="Wednesday Prayers" text="We have God who answers prayer." date="Every Wednesday " time="19:30" link="/" loc="zoom">
                    <BiBible/>
                  </ProgramCard>
              </div>
              <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] lg:w-[22%] flex justify-center">

                <ProgramCard title="Friday Meetings" text="We welcome sabbath and have a word of prayers" date="Every friday " time="19:00" link="/" loc="zoom">
                  <BiBible/>
                </ProgramCard>
                </div>
              <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] lg:w-[22%] flex justify-center">

                  <ProgramCard title="Sabbath Meetings" text="Remember the sabbath to keep it holy" date="Every saturday " time="9:30" link="/" loc="on premises">
                     <BiBible/>
                  </ProgramCard>
                </div>

          </div>
        </div>
      </section>
      
      <section className="md:mx-4 text-xl font-light px-4 md:px-10 h-fit mt-24  mb-20">
          <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center 
              after:bg-red-600 mb-10 `}>
                Contact us
        </h2>
            

        <div className="flex flex-col lg:flex-row items-center justify-between  h-fit gap-24 lg:gap-4 w-full ">
          <div className="w-full lg:w-[45%] h-[35rem] max-h-fit ">
            <h3 className="font-medium">Send us message</h3>
            <form className="flex flex-col justify-between w-full  ">
              <div className="flex  justify-between w-full">
                <div className="w-[45%] mt-4">
                                <Input type = 'first name' placeholder='First Name' name='first_name' required = {true} id='first_name' label = 'First Name'/>

                </div>
                <div className="w-[45%] mt-4">
                                <Input type = 'last name' placeholder='last name' name='last_name' required = {true} id='last_name' label = 'Last Name'/>

                </div>
              </div>
              
              <div className="mt-4"> 
                      <Input name='email' label='email address' type='email' placeholder='Email Address' required />

              </div>
              
              <div className="mt-4"> 

                  <label htmlFor="last_name" className="block mb-2  text-base text-gray-900 capitalize w-full ">Message</label>

                  <textarea className=" bg-white border text-gray-900 text-sm rounded-lg border-dark-blue focus:shadow-mid-blue block w-full p-2.5
          shadow-sm outline-0 invalid:border-red-00 valid:ring-dark-blue" placeholder="your message here" rows={10}  >

                  </textarea>
              </div>
              <div className="w-full flex justify-center justify-self-end  mt-6">
                <input type="submit " value={'send'} className="text-white bg-dark-blue text-center py-2 w-full rounded-lg "/>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-[45%] max-h-fit  ">
            <div className="flex gap-2 mb-4 items-center font-medium"><SlLocationPin /> MK1 1QT </div>
            <div className="w-full relative  h-[32rem]">
              {/* <MapContainer apiKey={process.env.GOOGLE_MAP_KEY || ''} mapId={process.env.GOOGLE_MAP_KEY || ''} /> */}
         
            </div>
           
          </div>
        </div>
    
      </section> 
    </main>
  );
}
