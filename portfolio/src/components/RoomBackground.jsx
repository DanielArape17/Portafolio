export default function RoomBackground() {
  return (
    <div className="absolute inset-0">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-[#1b1630] to-[#1f1728]"></div>

      {/* window glow */}
      <div className="absolute -top-6 right-8 w-48 h-28 rounded-lg"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(78,201,240,0.08), transparent 40%)",
          filter: "blur(16px)"
        }} />

      {/* lamp (simple) */}
      <div className="absolute left-6 top-8 w-12 h-20 rounded-md bg-[linear-gradient(180deg,#FFB86C,#FF7A5C)] opacity-85" style={{ filter: "blur(1px)"}} />

      {/* desk block */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,#251a2b,#211422)]"></div>

      {/* small props placeholders */}
      <div className="absolute bottom-14 left-20 w-12 h-8 bg-[#5a3b6f] rounded-md"></div>
      <div className="absolute bottom-8 right-20 w-16 h-10 bg-[#3a2d45] rounded-md"></div>
      
    </div>

    
  );
}
