export default function TipCard({ children, title }) {
  return (
    <div className="flex flex-col gap-5 justify-start">
      <h4 className="text-2xl font-semibold">{title}</h4>
      {children}
    </div>
  );
}
