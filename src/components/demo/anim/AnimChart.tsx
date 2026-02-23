import { useState, useEffect } from "react";
import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import { BarChart2 } from "lucide-react";
import { sampleCodeHeros } from "@/data/code/heros";

const ChartBar = () => {
  const data = [65, 80, 45, 90, 70, 55, 85];
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const maxPx = 90;
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnim(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[180px] flex flex-col gap-4">
      <p className="font-black text-sm uppercase">WEEKLY ACTIVITY</p>
      <div className="flex items-end gap-2" style={{ height: `${maxPx + 18}px` }}>
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-end">
            <div
              className="w-full border-2 border-black rounded-t-lg bg-[#6366f1]"
              style={{
                height: anim ? `${Math.round((v / 100) * maxPx)}px` : "0px",
                transition: `height 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms`,
              }}
            />
            <span className="font-black text-[8px] text-black/40 mt-1">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartLineGraph = () => {
  const data = [30, 55, 40, 80, 60, 90, 75];
  const W = 240;
  const H = 100;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data.map((v, i) => [i * (W / (data.length - 1)), (1 - (v - min) / (max - min)) * H]);
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-2">
      <p className="font-black text-sm uppercase">GROWTH CHART</p>
      <svg viewBox={`0 0 ${W} ${H + 10}`} className="w-full">
        <style>{`@keyframes linedraw{from{stroke-dashoffset:500}to{stroke-dashoffset:0}}`}</style>
        <path d={`${d} L${W},${H + 10} L0,${H + 10}Z`} fill="rgba(0,0,0,0.1)" />
        <path
          d={d}
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="500"
          style={{ animation: "linedraw 1.5s ease-out forwards" }}
        />
        {pts.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="black"
            className="transition-all duration-700"
          />
        ))}
      </svg>
    </div>
  );
};

const ChartDonut = () => {
  const segs = [
    { v: 40, c: "#6366f1" },
    { v: 25, c: "#ef4444" },
    { v: 20, c: "#22c55e" },
    { v: 15, c: "#ffe135" },
  ];
  const R = 40;
  const CX = 60;
  const CY = 60;
  const circum = 2 * Math.PI * R;
  let cum = 0;
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[180px] flex items-center gap-6">
      <svg viewBox="0 0 120 120" className="w-28 h-28 shrink-0 -rotate-90">
        {segs.map((s, i) => {
          const pct = s.v / 100;
          const off = circum * (1 - pct);
          const rot = cum * 360;
          cum += pct;
          return (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={s.c}
              strokeWidth="18"
              strokeDasharray={circum}
              strokeDashoffset={off}
              strokeLinecap="butt"
              style={{
                transform: `rotate(${rot}deg)`,
                transformOrigin: `${CX}px ${CY}px`,
                transition: "stroke-dashoffset 1s ease-out",
              }}
            />
          );
        })}
      </svg>
      <div className="flex flex-col gap-2">
        {[
          ["INDIGO", 40, "#6366f1"],
          ["RED", 25, "#ef4444"],
          ["GREEN", 20, "#22c55e"],
          ["YELLOW", 15, "#ffe135"],
        ].map(([l, v, c]) => (
          <div key={l} className="flex items-center gap-2">
            <div className="w-3 h-3 border border-white/20" style={{ background: c as string }} />
            <span className="text-white font-black text-xs uppercase">
              {l} {v}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartRadial = () => {
  const skills = [
    { l: "REACT", v: 90 },
    { l: "CSS", v: 85 },
    { l: "TS", v: 75 },
    { l: "NODE", v: 65 },
    { l: "DB", v: 70 },
  ];
  const R = 50;
  const cx = 70;
  const cy = 70;
  const max = 100;
  const pts = skills.map(({ v }, i) => {
    const a = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
    const r = (v / max) * R;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const axPts = skills.map((_, i) => {
    const a = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
  });
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[180px] flex items-center justify-center">
      <svg viewBox="0 0 140 140" className="w-36 h-36">
        {[0.25, 0.5, 0.75, 1].map((sc) => {
          const gp =
            skills
              .map((_, i) => {
                const a = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                const r = sc * R;
                return `${i === 0 ? "M" : "L"}${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
              })
              .join(" ") + "Z";
          return <path key={sc} d={gp} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />;
        })}
        {axPts.map(([x, y], i) => (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        ))}
        <path
          d={pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ") + "Z"}
          fill="rgba(99,102,241,0.3)"
          stroke="#6366f1"
          strokeWidth="2"
        />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#6366f1" />
        ))}
        {axPts.map(([x, y], i) => (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-black"
            style={{ fontSize: 7, fontWeight: 900, fill: "black" }}
            dx={(x - cx) * 0.15}
            dy={(y - cy) * 0.15}
          >
            {skills[i].l}
          </text>
        ))}
      </svg>
    </div>
  );
};

const ChartHorizontalBar = () => {
  const data = [
    { l: "REACT", v: 92, c: "#6366f1" },
    { l: "VUE", v: 65, c: "#22c55e" },
    { l: "SVT", v: 78, c: "#ef4444" },
    { l: "ANG", v: 55, c: "#f97316" },
  ];
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnim(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col gap-3">
      <p className="font-black text-sm uppercase">FRAMEWORK POPULARITY</p>
      {data.map(({ l, v, c }) => (
        <div key={l} className="flex items-center gap-3">
          <span className="font-black text-xs w-8 uppercase shrink-0">{l}</span>
          <div className="flex-1 h-5 bg-white/50 border-2 border-black rounded-full overflow-hidden">
            <div
              className="h-full rounded-full border-r-2 border-black"
              style={{
                width: anim ? `${v}%` : "0%",
                background: c,
                transition: "width 1s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </div>
          <span className="font-black text-xs font-mono w-8 text-right">{v}%</span>
        </div>
      ))}
    </div>
  );
};

const ChartBubble = () => {
  const bubbles = [
    { x: 30, y: 35, r: 30, c: "#6366f1", l: "A" },
    { x: 65, y: 25, r: 20, c: "#ef4444", l: "B" },
    { x: 50, y: 65, r: 25, c: "#22c55e", l: "C" },
    { x: 20, y: 65, r: 15, c: "#ffe135", l: "D" },
    { x: 80, y: 60, r: 18, c: "#ec4899", l: "E" },
  ];
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px]">
      <p className="font-black text-white text-sm uppercase mb-3">BUBBLE CHART</p>
      <svg viewBox="0 0 100 100" className="w-full h-32">
        {bubbles.map(({ x, y, r, c, l }) => (
          <g key={l}>
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={c}
              stroke="black"
              strokeWidth="2"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={c === "#ffe135" ? "black" : "white"}
              style={{ fontSize: 8, fontWeight: 900 }}
            >
              {l}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

const ChartAreaStack = () => {
  const data1 = [20, 40, 30, 60, 50, 80, 70];
  const data2 = [10, 20, 15, 30, 25, 40, 35];
  const W = 240;
  const H = 80;
  const pts1 = data1.map((v, i) => [i * (W / (data1.length - 1)), H - (v / 100) * H]);
  const pts2 = data2.map((v, i) => [i * (W / (data2.length - 1)), H - (v / 100) * H]);
  const toD = (pts: number[][], close = false) => {
    const d = pts
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    return close ? `${d} L${W},${H} L0,${H}Z` : d;
  };
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#6366f1] min-h-[180px]">
      <p className="font-black text-sm uppercase mb-3">STACKED AREA</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-32 border-b-2 border-l-2 border-black">
        <path d={toD(pts1, true)} fill="rgba(99,102,241,0.3)" />
        <path d={toD(pts1)} fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
        <path d={toD(pts2, true)} fill="rgba(34,197,94,0.3)" />
        <path d={toD(pts2)} fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};

const ChartGaugeSpeed = () => {
  const [val, setVal] = useState(65);
  const R = 50;
  const circumference = Math.PI * R;
  const offset = circumference * (1 - val / 100);
  return (
    <div className="p-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#000] min-h-[180px] flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 70" className="w-40">
        <path
          d="M10,65 A50,50 0 0,1 110,65"
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M10,65 A50,50 0 0,1 110,65"
          fill="none"
          stroke="black"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
        />
        <text
          x="60"
          y="58"
          textAnchor="middle"
          style={{ fontSize: 18, fontWeight: 900, fontFamily: "monospace" }}
        >
          {val}%
        </text>
      </svg>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(+e.target.value)}
        className="w-full accent-black"
      />
      <p className="text-black/40 font-black text-[10px] uppercase tracking-widest">DRAG SLIDER</p>
    </div>
  );
};

const ChartScatter = () => {
  const points = Array.from({ length: 20 }).map(() => ({
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
    c: ["#6366f1", "#ef4444", "#22c55e", "#ffe135"][Math.floor(Math.random() * 4)],
  }));
  return (
    <div className="p-6 bg-zinc-950 border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#ef4444] min-h-[180px]">
      <p className="font-black text-white text-sm uppercase mb-3">SCATTER PLOT</p>
      <svg viewBox="0 0 100 100" className="w-full h-32 border border-zinc-700">
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill={p.c}
            stroke="black"
            strokeWidth="0.5"
            className="hover:r-4 transition-all cursor-pointer"
          />
        ))}
      </svg>
    </div>
  );
};

const ChartSparkline = () => {
  const markets = [
    { name: "MOUP", data: [40, 55, 38, 72, 60, 88, 79], color: "#22c55e", trend: "+12.4%" },
    { name: "BRUT", data: [60, 45, 70, 35, 55, 40, 65], color: "#ef4444", trend: "-8.2%" },
  ];
  return (
    <div className="p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_#22c55e] min-h-[180px] flex flex-col gap-4">
      {markets.map(({ name, data, color, trend }) => {
        const W = 120;
        const H = 40;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const pts = data.map((v, i) => [
          i * (W / (data.length - 1)),
          (1 - (v - min) / (max - min)) * H,
        ]);
        return (
          <div key={name} className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-black text-lg uppercase">{name}</span>
              <span className="font-black text-sm" style={{ color }}>
                {trend}
              </span>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="flex-1 h-12">
              <path
                d={`${pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ")} L${W},${H} L0,${H}Z`}
                fill={`${color}22`}
              />
              <path
                d={pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ")}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export const AnimChart = () => (
  <ContentLayout>
    <SectionDoc
      icon={<BarChart2 className="w-5 h-5" />}
      iconBg="bg-violet-400"
      title="Chart Animations"
      componentCount={10}
      description="10 animated data visualizations — bar charts, line graphs, donut, radar, gauge, bubble, scatter, and sparklines, all CSS/SVG powered."
      features={[
        "Animated bar chart",
        "SVG line chart draw",
        "Donut segment chart",
        "Radar/spider chart",
        "Horizontal race bars",
        "Bubble size chart",
        "Stacked area chart",
        "Gauge speed meter",
        "Scatter plot dots",
        "Sparkline mini-chart",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={[]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComponentBlock title="Bar Chart" subtitle="Vertical bars grow from bottom on load">
          <CodePreview
            title="Bar"
            code={sampleCodeHeros}
            preview={<ChartBar />}
            language="tsx"
            nameFile="chart-bar.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Line Graph" subtitle="SVG path draws left to right">
          <CodePreview
            title="Line"
            code={sampleCodeHeros}
            preview={<ChartLineGraph />}
            language="tsx"
            nameFile="chart-line.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Donut Chart" subtitle="Stroke-dashoffset segment donut">
          <CodePreview
            title="Donut"
            code={sampleCodeHeros}
            preview={<ChartDonut />}
            language="tsx"
            nameFile="chart-donut.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Radar Chart" subtitle="5-axis spider/radar polygon">
          <CodePreview
            title="Radar"
            code={sampleCodeHeros}
            preview={<ChartRadial />}
            language="tsx"
            nameFile="chart-radar.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Progress Bars" subtitle="Horizontal bar race chart">
          <CodePreview
            title="HBar"
            code={sampleCodeHeros}
            preview={<ChartHorizontalBar />}
            language="tsx"
            nameFile="chart-hbar.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Bubble Chart" subtitle="Variable-radius SVG circles">
          <CodePreview
            title="Bubble"
            code={sampleCodeHeros}
            preview={<ChartBubble />}
            language="tsx"
            nameFile="chart-bubble.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Stacked Area" subtitle="Layered area chart with fill">
          <CodePreview
            title="Area"
            code={sampleCodeHeros}
            preview={<ChartAreaStack />}
            language="tsx"
            nameFile="chart-area.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Gauge Meter" subtitle="Semicircle gauge with range input">
          <CodePreview
            title="Gauge"
            code={sampleCodeHeros}
            preview={<ChartGaugeSpeed />}
            language="tsx"
            nameFile="chart-gauge.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Scatter Plot" subtitle="Random color dots on SVG canvas">
          <CodePreview
            title="Scatter"
            code={sampleCodeHeros}
            preview={<ChartScatter />}
            language="tsx"
            nameFile="chart-scatter.tsx"
          />
        </ComponentBlock>
        <ComponentBlock title="Sparklines" subtitle="Mini inline line charts with trend">
          <CodePreview
            title="Spark"
            code={sampleCodeHeros}
            preview={<ChartSparkline />}
            language="tsx"
            nameFile="chart-spark.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
