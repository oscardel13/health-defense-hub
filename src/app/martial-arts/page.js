import Image from "next/image";
import TipCard from "../../components/tip-card/tip-card.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Image and Text */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('martialarts.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#C1B2AB] opacity-50"></div>
        <div className="relative z-10 text-center px-10 lg:px-64">
          <h1 className="text-6xl text-[#101C42] font-medium">Martial Arts</h1>
          <h3 className="text-3xl text-[#101C4295] font-medium mt-4">
            Unleash Your Inner Strength
          </h3>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="flex flex-col items-center w-screen py-20 px-10 lg:px-40 text-black">
        <h2 className="text-4xl font-semibold">Introduction</h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center bg-[#646F58] w-screen py-20 px-10 lg:px-40">
        <h2 className="text-white text-4xl font-semibold">
          Types of Martial Arts
        </h2>
        <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-8 xl:gap-40 mt-12">
          <Image src="/homepage.jpg" alt="about" width={500} height={300} />
          <p className="text-white text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </div>
      </div>
      {/* Choosing a school Section */}
      <div className="flex flex-col items-center-screen py-20 px-10 lg:px-40 text-black">
        <h2 className="text-black text-center text-4xl font-semibold">
          Tips in Choosing Martial Arts School
        </h2>
        <p className="text-black text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <div className="flex flex-col gap-10 mt-10">
          <TipCard title="1. Self-Awareness of Surroundings">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </TipCard>

          <TipCard title="2. Self-Awareness of Surroundings">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </TipCard>

          <TipCard title="3. Self-Awareness of Surroundings">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </TipCard>
        </div>
      </div>
    </main>
  );
}
