import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui-shadcn/card";
import { Button } from "@/components/ui-shadcn/button";
import { Badge } from "@/components/ui-shadcn/badge";
import { Progress } from "@/components/ui-shadcn/progress";
import { Check, PlayCircle, BookOpen, Clock, Milestone } from "lucide-react";

// ─── LMS Components ───
export const CourseCard = () => (
  <Card className="max-w-[350px] border-2 border-black shadow-[4px_4px_0_0_#000] overflow-hidden group bg-white">
    <div className="h-40 bg-[#ffe135] border-b-2 border-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]" />
      <BookOpen
        size={60}
        className="text-black group-hover:scale-110 transition-transform duration-300"
      />
      <Badge className="absolute top-3 right-3 border-2 border-black bg-white text-black font-black uppercase text-[9px]">
        Advanced
      </Badge>
    </div>
    <CardHeader className="p-4">
      <CardTitle className="text-lg font-black leading-tight">
        Mastering Neobrutalist Design Patterns
      </CardTitle>
      <CardDescription className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-2 mt-1">
        <Clock size={12} /> 12 Hours · <PlayCircle size={12} /> 24 Lessons
      </CardDescription>
    </CardHeader>
    <CardContent className="px-4 pb-4">
      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px] font-black uppercase">
          <span>Progress</span>
          <span>65%</span>
        </div>
        <Progress value={65} className="h-2 border-2 border-black bg-zinc-100" />
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Button className="w-full h-10 border-2 border-black bg-black text-white font-black hover:bg-[#ffe135] hover:text-black transition-colors">
        Continue Learning
      </Button>
    </CardFooter>
  </Card>
);

// ─── Multi-Steps Components ───
export const StepIndicator = () => {
  const steps = [
    { id: 1, name: "Account", status: "complete" },
    { id: 2, name: "Profile", status: "current" },
    { id: 3, name: "Project", status: "pending" },
    { id: 4, name: "Review", status: "pending" },
  ];

  return (
    <div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center font-black shadow-[2px_2px_0_0_#000] transition-all ${
                step.status === "complete"
                  ? "bg-green-400"
                  : step.status === "current"
                    ? "bg-[#ffe135]"
                    : "bg-white"
              }`}
            >
              {step.status === "complete" ? <Check size={18} /> : step.id}
            </div>
            <span
              className={`text-[10px] font-black uppercase tracking-widest ${step.status === "current" ? "text-black" : "text-muted-foreground"}`}
            >
              {step.name}
            </span>
          </div>
          {i < steps.length - 1 && <div className="flex-1 h-[2px] bg-black mb-6" />}
        </React.Fragment>
      ))}
    </div>
  );
};

// ─── Roadmap Components ───
export const RoadmapTimeline = () => {
  const roadmap = [
    {
      q: "Q1 2024",
      title: "Beta Launch",
      status: "done",
      tasks: ["Core Components", "Neobrutalist Theme", "Documentation"],
    },
    {
      q: "Q2 2024",
      title: "Advanced Modules",
      status: "active",
      tasks: ["CMS Ready", "Ecommerce Kit", "LMS Template"],
    },
    {
      q: "Q3 2024",
      title: "Global Expansion",
      status: "next",
      tasks: ["Multi-language", "Accessibility V2", "Community Plugin"],
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto">
      {roadmap.map((item, i) => (
        <div key={i} className="flex gap-6 relative">
          {i < roadmap.length - 1 && (
            <div className="absolute left-[23px] top-[48px] bottom-[-32px] w-[3px] bg-black" />
          )}
          <div
            className={`shrink-0 w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] z-10 ${
              item.status === "done"
                ? "bg-green-400"
                : item.status === "active"
                  ? "bg-[#ffe135]"
                  : "bg-white"
            }`}
          >
            <Milestone size={20} />
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-black text-white border-2 border-black text-[10px] uppercase font-black">
                {item.q}
              </Badge>
              <h4 className="text-lg font-black">{item.title}</h4>
            </div>
            <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] bg-white mt-3">
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-bold opacity-75">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" /> {task}
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
