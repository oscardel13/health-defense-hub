import TipCard from "../../components/tip-card/tip-card.component";

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
        <div className="relative z-10 text-center px-64 px-10 lg:px-64">
          <h1 className="text-6xl text-[#101C42] font-medium">Self-Defense</h1>
          <h3 className="text-3xl text-[#101C4295] font-medium mt-4">
            Learn, Train, Protect – A Guide to Personal Safety and Wellness
          </h3>
        </div>
        <div className="absolute right-0 bottom-0 pr-5 pb-1 text-black font-medium">
          Image by{" "}
          <a
            href="https://pixabay.com/users/palinska-16234155/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5102896"
            className="relative underline cursor-pointer"
          >
            Anna Palinska
          </a>{" "}
          from{" "}
          <a
            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5102896"
            className="relative underline cursor-pointer"
          >
            Pixabay
          </a>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col items-center w-screen py-20 px-10 lg:px-40 text-black">
        <h2 className="text-4xl font-semibold ">What is Self-Defense?</h2>
        <p className="text-lg mt-4 max-w-3xl">
          Self-defense is the practice of protecting oneself from physical harm
          through a combination of awareness, prevention, and tactical
          responses. It involves recognizing and avoiding potentially dangerous
          situations, using techniques to de-escalate conflicts, and applying
          practical physical actions if necessary. Self-defense empowers
          individuals to safeguard their personal safety and build confidence in
          their ability to respond effectively in threatening scenarios. It is
          not only about physical combat but also about mental preparedness and
          strategic thinking to avoid confrontations before they escalate.
          <br />
          <br />
          Here are a few tips:
        </p>
        <div className="flex flex-col gap-10 mt-10 max-w-3xl">
          <TipCard title="1. Be Aware of Your Surroundings">
            <p>
              Stay vigilant and pay attention to your environment. Avoid
              distractions like looking at your phone, especially in unfamiliar
              or potentially unsafe areas. Trust your instincts—if something
              feels off, it’s better to err on the side of caution.
            </p>
          </TipCard>

          <TipCard title="2. Avoid Dangerous Places and Keep Your Distance">
            <p>
              Stay away from areas known for high crime rates or those that feel
              unsafe. If you find yourself in a potentially risky situation, try
              to remove yourself from it as soon as possible. Maintaining a safe
              distance from potential threats can prevent dangerous encounters.
            </p>
          </TipCard>

          <TipCard title="3. Have an Escape Plan">
            <p>
              Always have a plan for how you would escape from a dangerous
              situation. Identify exits and safe places in your environment, and
              practice quick, effective ways to get to safety. Being mentally
              prepared to act can make a significant difference in an emergency.
            </p>
          </TipCard>

          <TipCard title="4. Use Your Voice">
            <p>
              Don’t hesitate to use your voice assertively if you feel
              threatened. Shouting commands like “Back off!” or “Leave me
              alone!” can attract attention and deter an attacker. It also helps
              you maintain control of the situation by asserting your presence.
            </p>
          </TipCard>

          <TipCard title="5. Stock Up on Safety Supplies">
            <p>
              Equip yourself with safety tools like whistles, pepper spray, or a
              personal taser. These items can provide an extra layer of
              protection and help you alert others if you’re in danger. Ensure
              you know how to use them effectively and keep them easily
              accessible.
            </p>
          </TipCard>
        </div>
      </div>
    </main>
  );
}
