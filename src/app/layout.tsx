import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { assistant } from "@/components/font";
import Nav from '@/components/header/nav'
import Footer from "@/components/footer/footer";
// import { Providers } from "./provider";


const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "Milton Keynes International S.D.A Church",
  description: "Ghana S.D.A Church In UK, Milton Keynes, Seventh Day Adventist Church ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={assistant.className}>
        {/* <Providers> */}
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="max-w-[1660px] w-full">
            <Nav />
            <div className="mt-[6rem]">
                {children}
            </div>
           
            <Footer/>
            </div>
          </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
