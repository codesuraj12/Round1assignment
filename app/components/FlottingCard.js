export default function FloatingCard({
  icon,
  label,
  color = "blue",
  rotation = "",
  className = "",
}) {

  const colorClasses = {
    blue: "bg-blue-500 text-white",
    orange: "bg-orange-500 text-white",
    dark: "bg-[#2d2542] text-orange-400",
    darkpurple: "bg-[#2d2542] text-orange-400"
  };

  return (
    <div className={`absolute   ${className}`}>
      <div className={` ${rotation}`}>
    <div
      className={`
       
        flex items-center gap-2
        px-10 py-4
        rounded-full
        shadow-2xl
        backdrop-blur-md
        animate-float
        ${colorClasses[color]}
       
     
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
    </div>
    </div>
  );
}