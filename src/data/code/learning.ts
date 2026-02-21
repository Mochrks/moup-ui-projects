export const sampleCodeMultiSteps = `
import React from "react"
import { Check } from "lucide-react"

export function StepIndicator() {
  const steps = [
    { id: 1, name: "Account", status: "complete" },
    { id: 2, name: "Profile", status: "current" },
    { id: 3, name: "Review", status: "pending" },
  ];

  return (
    <div className="flex items-center gap-4 w-full max-w-2xl mx-auto text-black">
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div className={\`w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center font-black shadow-[2px_2px_0_0_#000] transition-all \${step.status === 'complete' ? 'bg-green-400' :
              step.status === 'current' ? 'bg-[#ffe135]' : 'bg-white'
            }\`}>
            {step.status === 'complete' ? <Check size={18} /> : step.id}
          </div>
          <span className={\`text-[10px] font-black uppercase tracking-widest \${step.status === 'current' ? 'text-black' : 'text-muted-foreground'}\`}>
            {step.name}
          </span>
          {i < steps.length - 1 && <div className="h-0.5 w-8 bg-black/10" />}
        </React.Fragment>
      ))}
    </div>
  )
}
`.trim();

export const sampleCodeLMS = `
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play } from "lucide-react"

export function CourseCard() {
  return (
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] overflow-hidden bg-white text-black">
      <div className="aspect-video bg-zinc-100 border-b-2 border-black relative group cursor-pointer">
         <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#ffe135] border-2 border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Play fill="black" size={20} />
            </div>
         </div>
      </div>
      <CardContent className="p-4 space-y-4">
        <h4 className="font-black">React Mastery</h4>
        <Progress value={65} className="h-3 border-2 border-black bg-zinc-100 fill-blue-400" />
      </CardContent>
    </Card>
  )
}
`.trim();

export const sampleCodeRoadmap = `
import { Card } from "@/components/ui/card"

export function Roadmap() {
  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:w-1 before:bg-black/10 text-black">
      <div className="relative pl-12">
        <div className="absolute left-0 w-10 h-10 rounded-xl border-2 border-black bg-[#ffe135] flex items-center justify-center shadow-[2px_2px_0_0_#000]">Q1</div>
        <Card className="p-4 border-2 border-black shadow-[4px_4px_0_0_#000]">
          <h4 className="font-black text-black">Alpha Launch</h4>
          <p className="text-sm font-bold text-black/60">Core features release</p>
        </Card>
      </div>
    </div>
  )
}
`.trim();
