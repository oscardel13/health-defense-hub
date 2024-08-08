export default function InfoCard({ children, title }) {
  let bgColor = "";
  if (title === "Self-Defense") {
    bgColor = "bg-[#6F0B21]";
  } else if (title === "Martial Arts") {
    bgColor = "bg-[#101C42]";
  }
  return (
    <div
      className={`flex flex-col md:w-80 lg:w-96 xl:w-[450px] p-5 pb-10 gap-5 justify-start border-black border rounded-3xl ${bgColor}`}
    >
      <h4 className="text-2xl font-semibold">{title}</h4>
      {children}
    </div>
  );
}
