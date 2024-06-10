import Link from "next/link";
import WelcomeSection from "./welcome_section";
import BeliefCard from "@/components/card/beliefs";
import EventCard from "@/components/card/event";
import ProgramCard from "@/components/card/program";
import Input from "@/components/form/input";
import AsideCard from "@/components/card/aside";
import { SlLocationPin } from "react-icons/sl";
import 'dotenv/config'
import YoutubeVideo from "@/components/video/youtube";
import MapContainer from "@/components/map/map";
import { Suspense } from "react";
import Skeleton from "@/components/skeleton";
import ProgramVideo from "@/components/video/program";

export default function Home() {
  return (
    <main className="w-full">
      <section id='welcome'>
            <WelcomeSection />
      </section>

      
      <div className="block lg:flex">

        <div className="w-full z-20 bg-red-4 px-2 md:px-4"   >
         
          <section className="w-full "   >
            <div className="z-20 bg-red-4 px-2 md:px-4" >
              <div className="w-full flex justify-center lg:justify-start">
                  <h2 className={` text- flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center w-fit 
                after:bg-red-600 mb-10`}>
                  28 fundamental beliefs 
                </h2>
              </div>
          
              <p className="flx text-base h-fit  ">
                <span className="inline-flex font-bold text-6xl h-fit float-left -mt-4">S</span>
                eventh-day Adventists accept the Bible as their only creed and hold certain fundamental beliefs to be the teaching of the Holy Scriptures. These beliefs,
                  as set forth here, constitute the church{"'"}s understanding and expression of the teaching of Scripture. Revision of these statements may be expected at a quinquennial General Conference Session whenever the church is led by the Holy Spirit to
                  a fuller understanding of Bible truth, or if better language is found to express these teachings of God{"'"}s Holy Word. The expression of these concepts help provide an overall picture of what this Christian denomination collectively believes and practices.
                    Together, these teachings reveal a God who is the architect of the world. In wisdom, grace and infinite love,
                  He is actively working to restore a relationship with humanity that will last for eternity. 
              </p>
            
              <div className="w-full  mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8 sm:place-content-between md:grid-cols-3   gap- flex-shrink  w-full">
                  {[{
                    'id': '1', 'topic': 'holy scripture hh', 'image': '/scripture.jpg', 'text': ' The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration.',
                    'verses': 'Ps. 119:105; Prov. 30:5, 6; Isa. 8:20; John 17:17; 1 Thess. 2:13; 2 Tim. 3:16, 17; Heb. 4:12; 2 Peter 1:20, 21', 'link':'https://www.adventist.org/holy-scriptures/',
                  },
                    {
                    'id': '2', 'topic': 'The Trinity', 'image': '/trinity.webp', 'text': 'There is one God: Father, Son, and Holy Spirit, a unity of three coeternal Persons.',
                    'verses': 'Gen. 1:26; Deut. 6:4; Isa. 6:8; Matt. 28:19; John 3:16; 2 Cor. 1:21, 22; 13:14; Eph. 4:4-6; 1 Peter 1:2 ','link':'https://www.adventist.org/trinity/',
                    },
                    {
                    'id': '3', 'topic': 'God the Father', 'image': '/thefather3.webp', 'text': 'God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness', 
                    'verses': 'Gen. 1:1; Deut. 4:35; Ps. 110:1, 4; John 3:16; 14:9; 1 Cor. 15:28; 1 Tim. 1:17; 1 John 4:8; Rev. 4:11','link':'https://www.adventist.org/father/',
                  },
                  
                  ].map((item, index) => (
                    <div key={item.id}>
                      <Suspense key={index} fallback={<Skeleton customClassNames='rounded-tl-xl rounded-tr-xl h-[222px] text-[2rem] w-full' viewAs={'image'}/>}>

                        <BeliefCard {...item} id={index + 1} />
                      </Suspense>
                    </div>
                ))}
                </div>
                <p className="mt-8 w-full text-center sm:text-end lg:mr-4">
                  <Link href={'https://www.adventist.org/beliefs/'}  target='_blank' className=" sm:text-end w-full underline underline-offset-4 text-dark-blue ">View All</Link>
                </p>
          
              </div>
              
            </div>
          </section> 
          
          <section className="w-full mt-20"   >
            <div className="z-20 bg-red-4 px-2 md:px-4" >
              <div className="w-full flex justify-center lg:justify-start">
                  <h2 className={` text- flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center w-fit 
                after:bg-red-600 mb-4`}>
                  the three angles message 
                </h2>
              </div>
          
             
              <div className="w-full mt-6">
                <div className="  w-fu flex flex-wrap ">
                        <div className="w-[100%] lg:w-[55%" >
                    <p className="flx text-base h-fit mb-4  ">
                      The Three Angels{"'"} Messages are God{"'"}s special messages for last-day Christians. This message is to be shared with the world and will reach
                      its climax with the second coming of Jesus. This threefold message appears in ( Revelation 14:6-16. )
                    </p>
                    <div className="">
                        <h3 className="mb-2" >
                          <span className="text-dark-blue font-extrabold italic text-2xl mr-2">01.</span>
                          <span className="font-semibold ">THE FIRST ANGEL{"'"}S MESSAGE </span> 
                        </h3>
                         <p className="w-[95%] mx-auto mb-6"> The first angel proclaims the everlasting gospel and calls for the restoration of the true worship of God as Creator, because the judgment hour has arrived.
                        <span> “Then I saw another angel flying in the midst of heaven,
                          having the everlasting gospel to preach to those who dwell on the earth—to every nation, tribe, tongue,
                          and people—saying with a loud voice, ‘Fear God and give glory to Him, for the hour of His judgment has come;
                          and worship Him who made heaven and earth, the sea and springs of water{"'"}” (Revelation 14:6, 7).
                        </span>
                         </p>
                    </div>
                       <div className="">
                        <h3 className="mb-2" >
                          <span className="text-dark-blue font-extrabold italic text-2xl mr-2">02.</span>
                          <span className="font-semibold ">THE FIRST ANGEL{"'"}S MESSAGE </span> 
                        </h3>
                         <p className="w-[95%] mx-auto mb-6"> The second angel warns against all humanly-originated forms of worship and beliefs that are not based completely on God{"'"}s Word.
                        <span> “Another angel followed, saying, { '"'}Babylon is fallen, is fallen, that great city, because she
                          has made all nations drink of the wine of the wrath of her fornication{"' ”  "}(Revelation 14:8).</span>
                         </p>
                    </div>
                       <div className="">
                        <h3 className="mb-2" >
                          <span className="text-dark-blue font-extrabold italic text-2xl mr-2">03.</span>
                          <span className="font-semibold ">THE FIRST ANGEL{"'"}S MESSAGE </span> 
                        </h3>
                      <p className="w-[95%] mx-auto mb-6"> “Then a third angel followed them, saying with a loud voice, {"'"}If anyone worships the beast and his image, and receives his mark on his forehead or on his hand, he himself shall also drink of the wine of the wrath of God, which is poured out full strength into the cup of His indignation.
                        they have no rest day or night, who worship the beast and his image, and whoever receives the mark of his name.{"'"} Here is the patience of the saints; here are those who keep the commandments of God and the faith of Jesus” (Revelation 14:9-12).

                        <span className="block mt-3">Note: though Scripture symbolically portrays these messages as being proclaimed by three angels, it is actually God{"'"}s
                          people—His last-day church—who deliver them to the world. Additionally, two groups emerge—those who choose to follow God{"'"}s Word completely and those who choose to mix biblical teachings with human traditions.</span>
                         </p>
                    </div>
                  </div>
                     


                  <div className="w-[95%] lg:w-[45% h-[20rem] md:h-[32rem]  mx-auto mt-8 mb-24">
                      <Suspense fallback={<Skeleton customClassNames='rounded-tl-xl z-30 rounded-tr-xl h-[222px] w-full' viewAs={'video'}/>}>

                      <YoutubeVideo embedId="4m3d43gVJsg"/>
                    </Suspense>
                    
                  </div>
                </div>
              </div>
            </div>
          </section> 

          <section id="about" className="relative text-white mt-20  bg-[url('/congregation.jpg')] h-fit
            w-[95%] bg-fixed md:bg-cover mx-auto
            md:bg-no-repeat bg-tp md:bg-center">
          <div className="h-full py-20 w-full -z-10 bg-black/80 ">
            <h2 className={` text-center flex flex-col gap-3 text-3xl font-medium capitalize after:h-[2px] after:w-12 after:self-center 
                after:bg-red-600 mb-10 m text-white`}>
                  Weekly activities
            </h2>
        
             <p className="w-full text-center text-lg">We invite you to join us in person and online for worship.</p>
            <div className="w-full mt-10  flex justify-center px-6 sm:justify-start md:justify-between lg:justify-evenly  flex-wrap gap-10 sm:gap-6 md:gap-[3%]
           px-auto mx-auto">
            <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] lg:-[22% flex justify-center ">
                  <ProgramCard title="Sunday bible studies" text="Join us study world of God on every sunday." date="Every sunday "
                    time="20:00 - 21:00" link="https://us02web.zoom.us/j/98995087999?pwd=M1E3dkpRRDZkUGlBTXEzSjI5bit2UT09" loc="zoom" linkText="Live On Zoom" />
               
            </div>
              
              <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] l:w-[22%] flex justify-center">

                  <ProgramCard title="Friday Meetings" text="We welcome sabbath and have a word of prayers" date="Every friday " time="20:00 - 21:00" 
                    loc="zoom" link="https://us02web.zoom.us/j/98995087999?pwd=M1E3dkpRRDZkUGlBTXEzSjI5bit2UT09"  linkText="Live On Zoom"/>
               
                </div>
              <div className="col-span- w-[90%] sm:w-[47%] md:w-[30%] g:w-[22%] flex justify-center">

                  <ProgramCard title="Sabbath Meetings" text="Remember the sabbath to keep it holy" date="Every saturday " time="9:45am - 2:00pm" link="https://us02web.zoom.us/j/98995087999?pwd=M1E3dkpRRDZkUGlBTXEzSjI5bit2UT09"
                    loc="on premises" linkText="Join Live" />
                
                </div>

          </div>
        </div>
          </section>
        </div>
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
                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap text-base ">Week of prayer - 25/06/2024 </Link>

                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap  text-base">Week of prayers csc- 25/06/2024 </Link>

                    <Link href={''} className="capitalize text-dark-blue hover:text-mid-blue underline underline-offset-2 text-wrap text-base">Week of prayerscsc - 25/06/2024 </Link>

                  </div>
                
                  }
            </AsideCard>

          </div>
       
        </aside>
      
      </div>
      

      
      <section className="md:mx-4 text-xl font-light px-4 md:px-10 h-fit mt-24  mb-20">
          <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center 
              after:bg-red-600 mb-10 `}>
                Contact us
        </h2>
            

        <div className="flex flex-col lg:flex-row items-center justify-between  h-fit gap-24 lg:gap-4 w-full ">
          <div className="w-full lg:w-[47%] h-[35rem] max-h-fit ">
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
          <div className="w-full lg:w-[47%] max-h-fit  ">
            <div className="flex gap-2 mb-4 items-center font-medium"><SlLocationPin /> MK1 1QT </div>
            <div className="w-full relative  h-[32rem]">
              {/* <Suspense fallback={<p  className="relative  h-[32rem] w-full bg-black" >Loading video...</p>}> */}
                    {/* <Suspense fallback={<p className="w-[95%] lg:w-[45% h-[20rem] md:h-[32rem]  mx-auto mt-8 mb-24" >Loading video...</p>}> */}

                 <MapContainer apiKey={process.env.GOOGLE_MAP_KEY || ''} mapId={process.env.MAPID || ''} />
              {/* </Suspense> */}
            </div>
           
          </div>
        </div>
    
      </section> 
    </main>
  );
}
