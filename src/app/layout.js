import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health & Defense Hub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`bg-[#C1B2AB] ${inter.className}`}>
        <div className="absolute bg-[rgb(0,0,0,5%)] flex flex-row w-screen justify-between px-20 py-5 z-20">
          <div>
            <a href="/" className="text-xl text-[#101C42] font-medium">
              Health & Defense Hub
            </a>
          </div>
          <div className="flex flex-row justify-between text-lg text-[#101C42] font-medium gap-10">
            <a href="/self-defense">Self-Defense</a>
            <a href="/martial-arts">Martial Arts</a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
