import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui-neobrutalism/card";
import { Button } from "@/components/ui-neobrutalism/button";
import { Badge } from "@/components/ui-neobrutalism/badge";
import {
  Check,
  PlayCircle,
  Clock,
  Milestone,
  ChevronRight,
  Lock,
  Star,
  Users,
  Zap,
  Target,
} from "lucide-react";

// ─── LMS Components ───
export const CourseCard = () => (
  <Card className="max-w-[360px] overflow-hidden group bg-white border-4 border-black shadow-[8px_8px_0_0_#000] rounded-3xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
    <div className="h-48 bg-indigo-400 border-b-4 border-black flex items-center justify-center relative overflow-hidden uppercase group">
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Zap
        size={80}
        fill="white"
        className="text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
      />
      <Badge className="absolute top-4 right-4 bg-[#ffe135] text-black border-2 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000]">
        APEX_UNIT
      </Badge>
    </div>
    <CardHeader className="p-6">
      <CardTitle className="text-2xl font-black italic uppercase tracking-tighter leading-none mb-2 underline decoration-4 decoration-[#ffe135] underline-offset-4">
        UI_ARCH_PATTERNS
      </CardTitle>
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1.5 font-black uppercase italic text-[10px] text-black/50">
          <Clock size={12} /> 12_CYCLES
        </div>
        <div className="flex items-center gap-1.5 font-black uppercase italic text-[10px] text-black/50">
          <PlayCircle size={12} /> 24_MODULES
        </div>
      </div>
    </CardHeader>
    <CardContent className="px-6 pb-6">
      <div className="space-y-3 bg-zinc-50 p-4 border-2 border-dashed border-black rounded-2xl">
        <div className="flex justify-between text-[10px] font-black uppercase italic">
          <span>SYNC_PROGRESS</span>
          <span className="text-indigo-600">65%_LOADED</span>
        </div>
        <div className="w-full h-4 bg-white border-2 border-black rounded-full overflow-hidden shadow-[2px_2px_0_0_#000]">
          <div className="h-full bg-indigo-400 border-r-2 border-black" style={{ width: "65%" }} />
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <Button className="w-full h-14 bg-black text-white border-2 border-black font-black uppercase italic text-lg shadow-[4px_4px_0_0_#ffe135] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        RESUME_INTAKE
      </Button>
    </CardFooter>
  </Card>
);

// ─── Multi-Steps Components ───
export const StepIndicator = () => {
  const steps = [
    { id: 1, name: "IDENT", status: "complete", color: "bg-green-400" },
    { id: 2, name: "ARCH", status: "current", color: "bg-[#ffe135]" },
    { id: 3, name: "PROT", status: "pending", color: "bg-zinc-200" },
    { id: 4, name: "SYNC", status: "pending", color: "bg-zinc-200" },
  ];

  return (
    <div className="flex items-center gap-4 w-full max-w-2xl mx-auto p-8 bg-white border-4 border-black shadow-[10px_10px_0_0_#000] rounded-3xl">
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center gap-3 group">
            <div
              className={`w-14 h-14 rounded-2xl border-4 border-black flex items-center justify-center text-xl font-black italic transition-all shadow-[4px_4px_0_0_#000] ${
                step.status === "complete"
                  ? "bg-green-400 rotate-3"
                  : step.status === "current"
                    ? "bg-[#ffe135] animate-pulse"
                    : "bg-white opacity-40"
              }`}
            >
              {step.status === "complete" ? <Check size={28} strokeWidth={4} /> : step.id}
            </div>
            <span
              className={`text-[10px] font-black uppercase italic tracking-widest ${step.status === "current" ? "text-black" : "text-black/40"}`}
            >
              {step.name}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-1 bg-black rounded-full mb-8 shadow-[2px_2px_0_0_#000]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// ─── Roadmap Timeline ───
export const RoadmapTimeline = () => {
  const roadmap = [
    {
      q: "PHASE_01",
      title: "BETA_INITIATION",
      status: "done",
      color: "bg-green-400",
      tasks: ["CORE_UNITS_DEPLOYED", "STANDARD_UI_MANIFEST", "DOC_NODES_ACTIVE"],
    },
    {
      q: "PHASE_02",
      title: "ADV_MODULE_SYNC",
      status: "active",
      color: "bg-[#ffe135]",
      tasks: ["CMS_PROTOCOL_READY", "COMMERCE_GRID_INT", "LMS_CORE_ARCH"],
    },
  ];

  return (
    <div className="space-y-12 w-full max-w-3xl mx-auto p-10 bg-zinc-50 border-4 border-black rounded-[40px] shadow-[12px_12px_0_0_#000]">
      <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-10 border-b-8 border-black pb-4 inline-block">
        ROADMAP_EXECUTION
      </h3>

      {roadmap.map((item, i) => (
        <div key={i} className="flex gap-8 relative">
          {i < roadmap.length - 1 && (
            <div className="absolute left-[26px] top-[60px] bottom-[-48px] w-2 bg-black rounded-full" />
          )}
          <div
            className={`shrink-0 w-14 h-14 rounded-2xl border-4 border-black flex items-center justify-center z-10 shadow-[4px_4px_0_0_#000] scale-110 ${
              item.status === "done"
                ? "bg-green-400 rotate-6"
                : item.status === "active"
                  ? "bg-[#ffe135] -rotate-3"
                  : "bg-white"
            }`}
          >
            <Milestone size={24} className="text-black" />
          </div>
          <div className="flex-1 pb-10">
            <div className="flex items-center gap-4 mb-3">
              <Badge className="bg-black text-white border-2 border-black font-black uppercase italic text-[10px] px-3 py-1">
                {item.q}
              </Badge>
              <h4 className="text-2xl font-black italic uppercase tracking-tighter">
                {item.title}
              </h4>
            </div>
            <Card className="border-4 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-3xl overflow-hidden group hover:translate-x-1 hover:translate-y-1 transition-all">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {item.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-bold uppercase italic text-black/60 group-hover:text-black transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-black" /> {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export const LMSCourseModules = () => {
  const modules = [
    { title: "FOUNDATION_OF_UI_DYNAMICS", duration: "15:00", status: "completed" },
    { title: "ARCHITECTING_DESIGN_SYSTEMS", duration: "24:30", status: "completed" },
    { title: "ADVANCED_GRID_STRATEGY", duration: "18:20", status: "current" },
    { title: "TYPOGRAPHY_CORE_OVERLAY", duration: "22:00", status: "locked" },
  ];

  return (
    <Card className="w-full border-4 border-black shadow-[10px_10px_0_0_#000] bg-white overflow-hidden rounded-[32px]">
      <CardHeader className="bg-zinc-50 border-b-4 border-black p-8 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
            COURSE_CURRICULUM
          </CardTitle>
          <CardDescription className="text-xs font-bold uppercase italic mt-1 text-black/40 tracking-widest">
            4_MODULES · 1H_20M_TOTAL_LOAD
          </CardDescription>
        </div>
        <Target className="text-black/20" size={40} />
      </CardHeader>
      <CardContent className="p-0">
        {modules.map((mod, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-8 py-6 border-b-2 border-black/5 last:border-0 hover:bg-[#ffe135]/10 transition-colors cursor-pointer group ${
              mod.status === "current" ? "bg-indigo-50" : ""
            }`}
          >
            <div className="flex items-center gap-6">
              <div
                className={`w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center text-sm font-black italic shadow-[3px_3px_0_0_#000] transition-transform group-hover:scale-110 ${
                  mod.status === "completed"
                    ? "bg-green-400 rotate-6"
                    : mod.status === "current"
                      ? "bg-[#ffe135] -rotate-6"
                      : "bg-white opacity-40"
                }`}
              >
                {mod.status === "completed" ? (
                  <Check size={18} strokeWidth={3} />
                ) : mod.status === "locked" ? (
                  <Lock size={18} />
                ) : (
                  i + 1
                )}
              </div>
              <div>
                <p className="text-base font-black italic uppercase tracking-tighter group-hover:underline underline-offset-4">
                  {mod.title}
                </p>
                <p className="text-[10px] font-black uppercase italic text-black/30 flex items-center gap-2 mt-1">
                  <Clock size={12} /> {mod.duration}_CYCLES
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-black flex items-center justify-center transition-all bg-zinc-50 group-hover:bg-[#ffe135] shadow-none group-hover:shadow-[2px_2px_0_0_#000]">
              <ChevronRight size={20} className="text-black" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export const VerticalStepper = () => {
  const steps = [
    { title: "USER_IDENTIFICATION", desc: "CONTACT_DATA_AND_LOC_COORDS", status: "complete" },
    { title: "VALIDATION_CHECK", desc: "UPLOAD_SECURITY_CLEARANCE", status: "current" },
    { title: "PAYMENT_PROTOCOL", desc: "SYNCHRONIZE_BANK_NODES", status: "pending" },
  ];

  return (
    <div className="space-y-0 w-full max-w-md mx-auto p-10 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-6 relative">
          {i < steps.length - 1 && (
            <div className="absolute left-[18px] top-[40px] bottom-0 w-1 bg-black rounded-full" />
          )}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-xl border-4 border-black flex items-center justify-center font-black italic z-10 transition-all text-sm shadow-[3px_3px_0_0_#000] ${
                step.status === "complete"
                  ? "bg-green-400 rotate-12"
                  : step.status === "current"
                    ? "bg-[#ffe135] scale-110"
                    : "bg-white opacity-40 shadow-none"
              }`}
            >
              {step.status === "complete" ? <Check size={18} strokeWidth={3} /> : i + 1}
            </div>
          </div>
          <div className="pb-10">
            <h4
              className={`text-lg font-black italic uppercase tracking-tighter ${step.status === "pending" ? "text-black/30" : "text-black"}`}
            >
              {step.title}
            </h4>
            <p className="text-[10px] font-bold uppercase italic text-black/40 tracking-widest">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const LessonCard = () => (
  <Card className="max-w-[340px] border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden bg-white rounded-3xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
    <div className="h-44 bg-pink-400 border-b-4 border-black flex items-center justify-center relative group overflow-hidden">
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <PlayCircle
        size={60}
        fill="white"
        className="text-white group-hover:scale-110 transition-transform duration-500 shadow-[4px_4px_0_0_#000] rounded-full"
      />
      <Badge className="absolute bottom-4 left-4 bg-black text-white border-2 border-white font-black italic uppercase text-[10px]">
        STREAM_ACTIVE
      </Badge>
    </div>
    <CardHeader className="p-6 space-y-3">
      <div className="flex justify-between items-center">
        <Badge className="bg-[#ffe135] text-black border-2 border-black font-black uppercase text-[10px] h-6 px-3 shadow-[2px_2px_0_0_#000]">
          VIDEO_INTAKE
        </Badge>
        <span className="text-[10px] font-black uppercase italic text-black/40 tracking-widest">
          12:45_CYCLES
        </span>
      </div>
      <CardTitle className="text-xl font-black italic uppercase tracking-tighter leading-tight border-l-4 border-pink-400 pl-4">
        04. CORE_DESIGN_SYSTEMS
      </CardTitle>
    </CardHeader>
    <CardContent className="px-6 pb-6">
      <div className="flex items-center gap-6 py-4 border-y-2 border-black/5 mb-6">
        <span className="flex items-center gap-2 font-black uppercase italic text-xs">
          <Users size={14} className="text-indigo-600" /> 1.2K_UNITS
        </span>
        <span className="flex items-center gap-2 font-black uppercase italic text-xs">
          <Star size={14} className="text-[#ffe135] fill-[#ffe135]" /> 4.9_APEX
        </span>
      </div>
      <Button className="w-full h-14 bg-black text-white border-2 border-black font-black uppercase italic text-lg shadow-[4px_4px_0_0_#pink-400] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0_0_#F472B6]">
        INIT_SESSION
      </Button>
    </CardContent>
  </Card>
);
