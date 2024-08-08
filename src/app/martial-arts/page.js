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
        <div className="absolute right-0 bottom-0 pr-5 pb-1 text-black font-medium">
          Image by{" "}
          <a
            href="https://pixabay.com/users/sasint-3639875/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1822701"
            className="relative underline cursor-pointer"
          >
            Sasin Tipchai
          </a>{" "}
          from{" "}
          <a
            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1822701"
            className="relative underline cursor-pointer"
          >
            Pixabay
          </a>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="flex flex-col items-center w-screen py-20 px-10 lg:px-40 text-black">
        <h2 className="text-4xl font-semibold">Introduction</h2>
        <p className="text-lg mt-4 max-w-3xl">
          Martial arts are various combat practices developed across different
          cultures, each with unique techniques and philosophies. While they
          teach valuable skills and promote fitness, martial arts should be seen
          as a last resort in self-defense. They complement self-defense
          strategies but are not the primary means of avoiding or de-escalating
          dangerous situations. Effective self-defense focuses on prevention,
          awareness, and having a plan to stay safe.
        </p>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center bg-[#646F58] w-screen py-20 px-10 lg:px-40">
        <h2 className="text-white text-4xl font-semibold">
          Types of Martial Arts
        </h2>
        <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-8 xl:gap-40 mt-12">
          <div>
            <Image
              src="/martialartsdifference.jpg"
              alt="about"
              width={500}
              height={300}
            />
            <div>
              Photo by{" "}
              <a
                href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                className="underline"
              >
                Nathan Dumlao
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/man-in-white-long-sleeve-shirt-and-blue-pants-Ps-_RF_JhsM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                className="underline"
              >
                Unsplash
              </a>
            </div>
          </div>

          <div>
            <p className="text-white text-lg mt-4 max-w-md">
              Martial arts can broadly be categorized into two types: grappling
              and striking.
              <strong> Striking</strong> involves techniques that focus on
              hitting an opponent with punches, kicks, elbows, and knees. It
              emphasizes distance, speed, and power. On the other hand,{" "}
              <strong>grappling</strong> involves close-quarters techniques such
              as holds, locks, and throws. It focuses on controlling or subduing
              an opponent through leverage and technique rather than raw power.
            </p>
            <p className="text-white text-lg mt-4 max-w-md">
              Both grappling and striking have their own advantages and
              disadvantages. Striking can be effective in neutralizing threats
              from a distance, while grappling provides techniques for
              controlling or subduing an opponent up close. Ideally, a
              combination of both approaches offers a comprehensive skill set
              for self-defense.
            </p>
            <p className="text-white text-lg mt-4 max-w-md">
              <strong>Popular striking disciplines</strong> include:
            </p>
            <ul className="list-disc ml-6 text-white text-lg mt-2 max-w-md">
              <li>
                <strong>Muay Thai</strong> (punches, kicks, elbows, knees)
              </li>
              <li>
                <strong>Boxing</strong> (punches)
              </li>
              <li>
                <strong>Kickboxing</strong> (punches and kicks)
              </li>
            </ul>
            <p className="text-white text-lg mt-4 max-w-md">
              <strong>Popular grappling disciplines</strong> include:
            </p>
            <ul className="list-disc ml-6 text-white text-lg mt-2 max-w-md">
              <li>
                <strong>Brazilian Jiu-Jitsu</strong> (submission focused)
              </li>
              <li>
                <strong>Judo</strong> (throwing focused)
              </li>
              <li>
                <strong>Wrestling</strong> (take-down and scrambling focused)
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Choosing a school Section */}
      <div className="flex flex-col items-center-screen py-20 px-10 lg:px-40 text-black">
        <h2 className="text-black text-center text-4xl font-semibold">
          Tips in Choosing Martial Arts School
        </h2>
        <p className="text-black text-lg mt-4 max-w-3xl">
          Selecting the right martial arts school is crucial for achieving your
          personal goals and ensuring a positive and effective training
          experience. A good school will not only offer quality instruction but
          also provide a supportive and motivating environment. It&apos;s
          important to consider factors such as the instructor&apos;s
          qualifications, the school&apos;s reputation, class schedules, and the
          overall atmosphere. The right fit will help you stay committed and
          make the most out of your training journey.
        </p>
        <p className="text-black text-lg mt-4 max-w-3xl">
          If you’re looking for additional resources to complement your
          training,{" "}
          <a
            href="https://blackbeltwiki.com/martial-arts-conditioning"
            className="text-blue-900 underline"
          >
            Black Belt Wiki
          </a>{" "}
          is an excellent site. It offers valuable information on exercises,
          conditioning, and techniques across various disciplines. With a range
          of instructional videos and detailed guidance, it can be a great
          supplement if you&apos;re looking to enhance your training outside the
          gym.
        </p>
        <div className="flex flex-col gap-10 mt-10 max-w-3xl">
          <TipCard title="1. Instructor Credentials">
            <p>
              Ensure the instructors are highly qualified and have extensive
              experience in their respective martial arts disciplines. Look for
              certifications, years of practice, and teaching experience.
            </p>
          </TipCard>

          <TipCard title="2. Class Structure and Schedule">
            <p>
              Evaluate the class structure, including class sizes, frequency,
              and levels offered. Ensure the schedule aligns with your
              availability and that the class sizes are conducive to
              personalized attention.
            </p>
          </TipCard>

          <TipCard title="3.Trial Classes">
            <p>
              Take advantage of trial classes or introductory offers. This
              allows you to experience the teaching style, class dynamics, and
              see if the school meets your expectations before committing
              long-term.
            </p>
          </TipCard>
          <TipCard title="4.Avoid Pay-to-Win">
            <p>
              Ensure the school does not prioritize financial contributions over
              skill development. The focus should be on merit and progress
              rather than purchasing higher ranks or privileges.
            </p>
          </TipCard>
        </div>
      </div>
    </main>
  );
}
