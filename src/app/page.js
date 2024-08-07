import InfoCard from "@/components/info-card/info-card.component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Image and Text */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('homepage.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#C1B2AB] opacity-50"></div>
        <div className="relative z-10 text-center px-10 lg:px-64">
          <h1 className="text-6xl text-[#101C42] font-medium">
            Empower Yourself with Self-Defense & Martial Arts
          </h1>
          <h3 className="text-3xl text-[#101C4295] font-medium mt-4">
            Learn, Train, Protect – A Guide to Personal Safety and Wellness
          </h3>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center bg-[#646F58] w-screen py-20 px-10 lg:px-40">
        <h2 className="text-white text-4xl font-semibold">About</h2>
        <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-8 xl:gap-40 mt-12">
          <Image src="/homepage.jpg" alt="about" width={500} height={300} />
          <p className="text-white text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </div>
      </div>
      {/* martial arts and self-defense differences section */}
      <div className="flex flex-col items-center-screen py-20 px-10 lg:px-40">
        <h2 className="text-[#6F0B21] text-center text-4xl font-semibold">
          The differences between martial arts and self-defense
        </h2>
        <p className="text-black text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <div className="flex flex-col gap-10 mt-10 items-center">
          <div className="flex flex-row gap-5 lg:gap-20">
            <InfoCard title={"Self-Defense"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>

            <InfoCard title={"Martial Arts"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>
          </div>

          <div className="flex flex-row gap-5 lg:gap-20">
            <InfoCard title={"Self-Defense"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>

            <InfoCard title={"Martial Arts"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>
          </div>

          <div className="flex flex-row gap-5 lg:gap-20">
            <InfoCard title={"Self-Defense"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>

            <InfoCard title={"Martial Arts"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </InfoCard>
          </div>

          <div className="flex flex-row gap-5 lg:gap-20">
            <a
              href="/self-defense"
              className={`flex flex-col w-full md:w-80 lg:w-96 xl:w-[450px] p-5 border-black border rounded-3xl bg-[#6F0B21] items-center hover:bg-[#6F0B2180]`}
            >
              <span href="/self-defense" className="text-3xl font-medium">
                Visit Page
              </span>
            </a>

            <a
              href="/martial-arts"
              className={`flex flex-col w-full md:w-80 lg:w-96 xl:w-[450px] p-5 border-black border rounded-3xl bg-[#101C42] items-center hover:bg-[#101C4280]`}
            >
              <span className="text-3xl font-medium">Visit Page</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
