export const sampleCodeMultiSteps = `
import React from "react"
import { Check } from "lucide-react"

export function StepIndicator() {
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
              className={\`w-9 h-9 rounded-full border flex items-center justify-center text-sm font-medium transition-all \${
                step.status === "complete"
                  ? "bg-primary text-primary-foreground border-primary"
                  : step.status === "current"
                  ? "border-primary text-primary"
                  : "bg-background text-muted-foreground"
              }\`}
            >
              {step.status === "complete" ? <Check size={16} /> : step.id}
            </div>
            <span
              className={\`text-[10px] font-medium uppercase tracking-wider \${
                step.status === "current" ? "text-primary" : "text-muted-foreground"
              }\`}
            >
              {step.name}
            </span>
          </div>
          {i < steps.length - 1 && <div className="flex-1 h-[1px] bg-border mb-6" />}
        </React.Fragment>
      ))}
    </div>
  )
}
`.trim();

export const sampleCodeLMS = `
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, PlayCircle } from "lucide-react"

export function CourseCard() {
  return (
    <Card className="max-w-[350px] overflow-hidden group bg-white border shadow-sm">
      <div className="h-40 bg-zinc-100 flex items-center justify-center relative overflow-hidden uppercase">
        <BookOpen size={60} className="text-zinc-400 group-hover:scale-105 transition-transform duration-300" />
        <Badge className="absolute top-3 right-3" variant="secondary">Advanced</Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold leading-tight">Mastering UI Design Patterns</CardTitle>
        <CardDescription className="text-xs flex items-center gap-2 mt-1">
          <Clock size={12} /> 12 Hours · <PlayCircle size={12} /> 24 Lessons
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] font-medium uppercase text-muted-foreground">
            <span>Progress</span>
            <span>65%</span>
          </div>
          <Progress value={65} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Continue Learning</Button>
      </CardFooter>
    </Card>
  )
}
`.trim();

export const sampleCodeRoadmap = `
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Milestone } from "lucide-react"

export function RoadmapTimeline() {
  const roadmap = [
    { q: "Q1 2024", title: "Beta Launch", status: "done", tasks: ["Core Components", "Standard Theme"] },
    { q: "Q2 2024", title: "Advanced Modules", status: "active", tasks: ["CMS Ready", "Ecommerce Kit"] },
  ];

  return (
    <div className="space-y-8 w-full max-w-2xl mx-auto">
      {roadmap.map((item, i) => (
        <div key={i} className="flex gap-4 relative">
          {i < roadmap.length - 1 && <div className="absolute left-[17px] top-[40px] bottom-[-32px] w-[2px] bg-border" />}
          <div className={\`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center z-10 \${
            item.status === 'done' ? 'bg-primary text-primary-foreground border-primary' : 'border-primary text-primary'
          }\`}>
            <Milestone size={16} />
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-[10px] uppercase">{item.q}</Badge>
              <h4 className="text-base font-semibold">{item.title}</h4>
            </div>
            <Card className="border shadow-none bg-zinc-50/50 mt-2">
              <CardContent className="p-3">
                <ul className="space-y-1.5">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-zinc-400" /> {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
`.trim();

export const sampleCodeLMSModules = `
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Check, Lock, Clock, ChevronRight } from "lucide-react"

export function CourseModules() {
  const modules = [
    { title: "Introduction to UI Design", duration: "15:00", status: "completed" },
    { title: "Working with Design Systems", duration: "24:30", status: "completed" },
    { title: "Advanced Component Patterns", duration: "18:20", status: "current" },
    { title: "Typography & Layout", duration: "22:00", status: "locked" },
  ];

  return (
    <Card className="w-full border shadow-sm bg-white overflow-hidden">
      <CardHeader className="bg-zinc-50 border-b p-4">
        <CardTitle className="text-base font-semibold">Course Curriculum</CardTitle>
        <CardDescription className="text-xs">4 Modules · 1h 20m total</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {modules.map((mod, i) => (
          <div key={i} className={\`flex items-center justify-between p-3 border-b last:border-0 hover:bg-zinc-50 transition-colors group \${mod.status === 'current' ? 'bg-primary/5' : ''}\`}>
            <div className="flex items-center gap-3">
              <div className={\`w-7 h-7 rounded-md border flex items-center justify-center text-xs \${
                mod.status === 'completed' ? 'bg-primary text-primary-foreground border-primary' : 
                mod.status === 'current' ? 'border-primary text-primary font-bold' : 'text-muted-foreground'
              }\`}>
                {mod.status === 'completed' ? <Check size={12} /> : mod.status === 'locked' ? <Lock size={12} /> : i + 1}
              </div>
              <div>
                <p className="text-sm font-medium">{mod.title}</p>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1 uppercase">
                  <Clock size={10} /> {mod.duration}
                </p>
              </div>
            </div>
            <ChevronRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
`.trim();

export const sampleCodeVerticalSteps = `
import { Check } from "lucide-react"

export function VerticalStepper() {
  const steps = [
    { title: "Personal Info", desc: "Contact details", status: "complete" },
    { title: "Verification", desc: "Documents", status: "current" },
  ];

  return (
    <div className="space-y-0 w-full max-w-sm mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 relative">
          {i < steps.length - 1 && <div className="absolute left-[13px] top-[30px] bottom-0 w-[1px] bg-border" />}
          <div className={\`w-7 h-7 rounded-full border flex items-center justify-center text-xs z-10 \${
            step.status === 'complete' ? 'bg-primary text-primary-foreground border-primary' : 'border-primary text-primary'
          }\`}>
            {step.status === 'complete' ? <Check size={12} /> : i + 1}
          </div>
          <div className="pb-6">
            <h4 className="text-sm font-semibold">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
`.trim();

export const sampleCodeLessonCard = `
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Users, Star } from "lucide-react"

export function LessonCard() {
  return (
    <Card className="max-w-[320px] border shadow-sm overflow-hidden bg-white">
      <div className="h-40 bg-zinc-100 flex items-center justify-center relative group">
        <PlayCircle size={40} className="text-zinc-300 group-hover:text-primary transition-colors" />
      </div>
      <CardHeader className="p-4 space-y-1">
        <div className="flex justify-between items-center mb-1">
          <Badge variant="secondary" className="text-[10px] font-medium">Video</Badge>
          <span className="text-[10px] text-muted-foreground font-medium uppercase">12:45 min</span>
        </div>
        <CardTitle className="text-sm font-semibold">04. Mastering Design Systems</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Users size={12} /> 1.2k</span>
          <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500 fill-yellow-500" /> 4.9</span>
        </div>
        <Button className="w-full" size="sm">
          Start Lesson
        </Button>
      </CardContent>
    </Card>
  )
}
`.trim();
