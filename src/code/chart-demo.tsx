import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ComposedChart,
  ScatterChart,
  Scatter,
  RadialBarChart,
  RadialBar,
} from "recharts";

const data = [
  { name: "Mon", value: 400, uv: 2400, pv: 2400 },
  { name: "Tue", value: 300, uv: 1398, pv: 2210 },
  { name: "Wed", value: 600, uv: 9800, pv: 2290 },
  { name: "Thu", value: 800, uv: 3908, pv: 2000 },
  { name: "Fri", value: 500, uv: 4800, pv: 2181 },
  { name: "Sat", value: 900, uv: 3800, pv: 2500 },
  { name: "Sun", value: 700, uv: 4300, pv: 2100 },
];

const COLORS = ["#88aaee", "#4d80e6", "#FFBB28", "#FF8042", "#00C49F"];

// 1. Line
export const ChartLine = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
        <Tooltip
          contentStyle={{
            borderRadius: "12px",
            border: "none",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#88aaee"
          strokeWidth={3}
          dot={{ r: 4, fill: "#88aaee", strokeWidth: 2, stroke: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// 2. Area
export const ChartArea = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#88aaee" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#88aaee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="name" fontSize={12} axisLine={false} tickLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#88aaee"
          fillOpacity={1}
          fill="url(#colorValue)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

// 3. Bar
export const ChartBar = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="name" fontSize={12} axisLine={false} tickLine={false} />
        <Tooltip cursor={{ fill: "#f4f4f5" }} />
        <Bar dataKey="value" fill="#88aaee" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// 4. Pie
export const ChartPie = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data.slice(0, 5)}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

// 5. Radar
export const ChartRadar = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.slice(0, 6)}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" fontSize={10} />
        <Radar name="Activity" dataKey="value" stroke="#88aaee" fill="#88aaee" fillOpacity={0.5} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

// 6. Composed
export const ChartComposed = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="value" barSize={20} fill="#4d80e6" radius={[4, 4, 0, 0]} />
        <Line type="monotone" dataKey="value" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

// 7. Radial
export const ChartRadial = () => {
  const radialData = [
    { name: "Task A", uv: 31.47, pv: 2400, fill: "#8884d8" },
    { name: "Task B", uv: 26.69, pv: 4567, fill: "#83a6ed" },
    { name: "Task C", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
  ];
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="100%"
          barSize={10}
          data={radialData}
        >
          <RadialBar background dataKey="uv" cornerRadius={5} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

// 8. Scatter
export const ChartScatter = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="uv" type="number" name="stature" fontSize={10} />
        <YAxis dataKey="pv" type="number" name="weight" fontSize={10} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#88aaee" />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

// 9. Tiny Line (Mini Sparkline)
export const ChartSparkline = () => (
  <div className="h-[80px] w-full bg-zinc-50 rounded-lg p-2 flex items-center gap-4">
    <div className="w-24 h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#88aaee" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-muted-foreground uppercase">Revenue</span>
      <span className="text-sm font-bold">$12,450</span>
    </div>
  </div>
);

// 10. Stacked Bar
export const ChartStacked = () => (
  <div className="h-[200px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="uv" stackId="a" fill="#88aaee" radius={[0, 0, 0, 0]} />
        <Bar dataKey="pv" stackId="a" fill="#4d80e6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
