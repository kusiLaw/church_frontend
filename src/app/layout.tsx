import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { assistant } from "@/components/font";
import Nav from '@/components/header/nav'
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "Milton Keynes International SDA Church",
  description: "Milton Keynes International Seventh Day Adventist Church. Ghana S.D.A Church In Milton Keynes, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={assistant.className}>
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="max-w-[1660px] w-full">
            <Nav />
            <div className="mt-[6rem]">
                {children}
            </div>
           
            <Footer />
            
            </div>
         </div>
         <SpeedInsights/>
      </body>
    </html>
  );
}
