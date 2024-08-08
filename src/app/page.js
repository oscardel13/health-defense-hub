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
        <div className="absolute right-0 bottom-0 pr-5 pb-1">
          Image by{" "}
          <a
            href="https://pixabay.com/users/klimkin-1298145/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2578819"
            className="relative underline cursor-pointer"
          >
            svklimkin
          </a>{" "}
          from{" "}
          <a
            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2578819"
            className="relative underline cursor-pointer"
          >
            Pixabay
          </a>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center bg-[#646F58] w-screen py-20 px-10 lg:px-40">
        <h2 className="text-white text-4xl font-semibold">About</h2>
        <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-8 xl:gap-40 mt-12">
          <div>
            <Image src="/home-about.jpg" alt="about" width={500} height={380} />
            <div>
              Image by{" "}
              <a
                href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                className="underline"
              >
                Nathan Dumlao
              </a>
            </div>
          </div>
          <p className="text-white text-lg mt-4 max-w-md">
            Welcome! I&apos;m a software engineer and martial arts enthusiast
            dedicated to promoting health and wellness through martial arts and
            self-defense education. This website aims to provide valuable
            information and resources to enhance your fitness and impart
            essential self-defense skills.
            <br />
            <br />
            Our mission is to empower individuals by teaching the philosophy of
            self-defense, emphasizing awareness, preparation, and non-violent
            resolutions. We believe in promoting safety, health, and well-being,
            helping you to protect yourself and lead a healthier life. Join us
            on this journey to better fitness and personal safety.
          </p>
        </div>
      </div>
      {/* martial arts and self-defense differences section */}
      <div className="flex flex-col items-center py-20 px-10 lg:px-40">
        <h2 className="text-black text-center text-4xl font-semibold">
          The differences between martial arts and self-defense
        </h2>
        <p className="text-black text-lg mt-5 max-w-3xl">
          Many people believe that learning martial arts is the same as learning
          self-defense. While martial arts originated as self-defense systems,
          they often focus on techniques from a specific time and place. These
          skills don&apos;t always translate well to modern-day needs. Instead
          of relying on martial arts moves, self-defense techniques are tailored
          to address real-world threats effectively. Martial arts and
          self-defense each have their strengths and unique benefits. Here are a
          few:
          <br />
          <br />
          Martial arts and self-defense each have their strengths and unique
          benefits. Here are a few:
        </p>
        <div className="flex flex-row gap-5 lg:gap-20 mt-10 flex-wrap">
          <div className="flex flex-col gap-10 lg:gap-10 items-center">
            <InfoCard title={"Self-Defense"}>
              <strong>Practicality:</strong> Self-defense techniques are
              designed to be straightforward and effective, focusing on
              real-world scenarios and immediate threats.
            </InfoCard>
            <InfoCard title={"Self-Defense"}>
              <strong>Situational Awareness:</strong> Training in self-defense
              emphasizes the importance of awareness and avoidance, teaching
              individuals to recognize and avoid potential dangers.
            </InfoCard>
            <InfoCard title={"Self-Defense"}>
              <strong>Empowerment:</strong> Self-defense empowers individuals by
              providing them with the confidence and skills to protect
              themselves and others in various situations.
            </InfoCard>
            <a
              href="/self-defense"
              className={`flex flex-col w-full md:w-80 lg:w-96 xl:w-[450px] p-5 border-black border rounded-3xl bg-[#6F0B21] items-center hover:bg-[#6F0B2180]`}
            >
              <span className="text-3xl font-medium">Visit Page</span>
            </a>
          </div>

          <div className="flex flex-col gap-10 lg:gap-10 items-center">
            <InfoCard title={"Martial Arts"}>
              <strong>Physical Fitness:</strong> Martial arts training enhances
              overall physical health, including strength, flexibility,
              endurance, and coordination.
            </InfoCard>

            <InfoCard title={"Martial Arts"}>
              <strong>Discipline and Focus:</strong> Practicing martial arts
              fosters discipline, mental focus, and perseverance through
              structured training and goal setting.
            </InfoCard>
            <InfoCard title={"Martial Arts"}>
              <strong>Cultural and Philosophical Learning:</strong> Martial arts
              offer insights into different cultures and philosophies, promoting
              respect, tradition, and a deeper understanding of the art form.
            </InfoCard>
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
