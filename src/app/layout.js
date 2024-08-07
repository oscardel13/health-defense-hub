import { Inter } from "next/font/google";
import "./globals.css";
import CCIcon from "@/icons/CCSvg.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health & Defense Hub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`bg-[#C1B2AB] ${inter.className}`}>
        <div className="absolute bg-[rgb(0,0,0,5%)] flex flex-row w-screen justify-between px-10 lg:px-20 py-5 z-20">
          <div>
            <a
              href="/"
              className="lg:text-xl text-[#101C42] font-medium hover:text-[#6F0B21]"
            >
              Health & Defense Hub
            </a>
          </div>
          <div className="flex flex-row justify-between lg:text-lg text-[#101C42] font-medium gap-10">
            <a href="/self-defense" className="hover:text-[#6F0B21]">
              Self-Defense
            </a>
            <a href="/martial-arts" className="hover:text-[#6F0B21]">
              Martial Arts
            </a>
          </div>
        </div>
        {children}
        <div className="absolute bg-[#101C42] flex flex-row w-screen justify-between items-center px-5 lg:px-20 py-5 z-20">
          <div>
            <CCIcon />
          </div>
          <div className="flex flex-row justify-between lg:text-lg text-white font-medium gap-10">
            <span>Build by Oscar Delgado</span>
          </div>
        </div>
      </body>
    </html>
  );
}
