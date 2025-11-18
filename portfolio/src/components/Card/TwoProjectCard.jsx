import CardBase from "./CardBase";

export default function ProjectCard() {
  return (
    <CardBase
      cols={6}
      rows={2}
      className="p-4 bg-[#2B2235] rounded-2xl shadow-[0_0_20px_rgba(255,122,92,0.15)] flex items-center justify-center"
    >
      <p className="text-4xl font-bold text-purple-100">Proyecto 1</p>
    </CardBase>
  );
}



