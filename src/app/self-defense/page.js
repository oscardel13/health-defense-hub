import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Image and Text */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('selfdefense.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#C1B2AB] opacity-50"></div>
        <div className="relative z-10 text-center px-64">
          <h1 className="text-6xl text-[#101C42] font-medium">Self-Defense</h1>
          <h3 className="text-3xl text-[#101C4295] font-medium mt-4">
            Learn, Train, Protect – A Guide to Personal Safety and Wellness
          </h3>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center w-screen py-20 px-40 text-black">
        <h2 className="text-4xl font-semibold">Tips for Self-Defense</h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
    </main>
  );
}
