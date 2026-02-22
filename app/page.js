import { Gavel,Receipt, FileText, CheckSquare } from "lucide-react";
import FloatingCard from "./components/FlottingCard";

export default function Home() {
  return (
     <main className="relative min-h-screen bg-[#f3f4f8] overflow-hidden">

    
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-[-120px] w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

       
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-700">
            A single platform to <br />
            <span className="text-gray-900">manage</span> every part of <br />
            your <span className="text-gray-900">legal work</span>
          </h1>

          <p className="mt-6 text-blue-600 max-w-md">
            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication –
            all in one system.
          </p>
        </div>

        
        <div className="relative h-[500px] hidden md:block">

          <FloatingCard
            icon={<Receipt size={18} />}
            label="Billing"
            color="blue"
            rotation="rotate-[10deg]"
            className="top-10 right-20"
          />

          <FloatingCard
            icon={<Gavel size={18} />}
            label="Matters"
            color="orange"
            rotation="-rotate-[12deg]"
            className="top-52 left-10"
          />

          <FloatingCard
            icon={<CheckSquare size={18} />}
            label="Tasks"
            color="dark"
            rotation="rotate-[6deg]"
            className="bottom-20 left-32"
          />

          <FloatingCard
            icon={<FileText size={18} />}
            label="Documents"
            color="darkPurple"
            rotation="-rotate-[8deg]"
            className="bottom-16 right-0"
          />

        </div>
      </div>
    </main>
  );
}
