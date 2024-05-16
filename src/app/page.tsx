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
      

    </main>
  );
}
