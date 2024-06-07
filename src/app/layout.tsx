import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { assistant } from "@/components/font";
import Nav from '@/components/header/nav'
import Footer from "@/components/footer/footer";


const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "Milton Keynes International S.D.A Church | UK SDA ",
  description: "Ghana S.D.A Church In Milton Keynes - UK, Seventh Day Adventist Church ",
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
           
            <Footer/>
            </div>
          </div>
      </body>
    </html>
  );
}
