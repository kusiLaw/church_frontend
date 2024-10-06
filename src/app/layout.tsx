import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { assistant } from "@/components/font";
import Nav from '@/components/header/nav'
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milton Keynes International Seventh-day Adventist Church",
  description: "Milton Keynes International Seventh Day Adventist Church. Ghanaian Seventh Day Adventist Church In Milton Keynes, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png"  href='/milton-keynes-sda-churchlogo.jpg'/>
      </Head>
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
