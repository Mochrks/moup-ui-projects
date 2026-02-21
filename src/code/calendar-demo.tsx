import { Calendar } from "@/components/ui-shadcn/calendar";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { Badge } from "@/components/ui-shadcn/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui-shadcn/popover";
import { Button } from "@/components/ui-shadcn/button";
import { CalendarIcon, Zap, Target, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

// Enhancing Calendar Demos with high-fidelity styling and interesting use-cases

// 1. Sleek Black Border
export const CalendarSimple = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex justify-center flex-col items-center gap-6 p-8 border-2 border-black rounded-[2rem] bg-white shadow-[8px_8px_0_0_#000]">
      <div className="flex items-center gap-3 w-full border-b border-zinc-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-main border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]">
          <Target className="text-white" size={20} />
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm">Schedule Master</h4>
          <p className="text-[10px] text-muted-foreground font-bold">
            Pick your primary execution window
          </p>
        </div>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] mx-auto"
      />
      {date && (
        <div className="bg-black text-white px-6 py-2 rounded-full text-xs font-black italic tracking-widest shadow-[4px_4px_0_0_#88aaee]">
          LOCKED: {format(date, "PPP").toUpperCase()}
        </div>
      )}
    </div>
  );
};

// 2. Industrial Range Selector
export const CalendarRange = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  return (
    <div className="p-6 bg-zinc-50 border-2 border-black rounded-3xl shadow-[6px_6px_0_0_#000]">
      <div className="mb-4 flex gap-2">
        <Badge className="bg-main border-2 border-black text-white px-3">SPRINT 12</Badge>
        <Badge variant="outline" className="border-2 border-black bg-white font-bold">
          Q1 PIPELINE
        </Badge>
      </div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-2xl border-2 border-black bg-white mx-auto shadow-[4px_4px_0_0_#000]"
      />
    </div>
  );
};

// 3. Multi-Select Cluster
export const CalendarMultiple = () => {
  const [dates, setDates] = useState<Date[] | undefined>([new Date(), addDays(new Date(), 2)]);
  return (
    <div className="space-y-4">
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-[2.5rem] border-4 border-black p-6 bg-white shadow-[12px_12px_0_0_#fbbf24] mx-auto"
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {dates?.map((d) => (
          <div
            key={d.toString()}
            className="text-[10px] font-black bg-black text-white px-3 py-1 rounded-sm border border-white/20"
          >
            {format(d, "MMM d")}
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Restricted Workflow (Weekdays Only)
export const CalendarDisabled = () => (
  <div className="p-1 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl shadow-xl">
    <div className="bg-white rounded-[1.4rem] p-4">
      <div className="flex items-center gap-2 mb-3 text-red-600 font-black text-xs uppercase pl-2">
        <ShieldCheck size={14} /> Production Restriction Active
      </div>
      <Calendar
        mode="single"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        className="rounded-xl border-2 border-black opacity-90 mx-auto"
      />
    </div>
  </div>
);

// 5. Minimal Boundary (Next 30 Days)
export const CalendarBoundaries = () => (
  <div className="border-2 border-black rounded-3xl p-6 bg-white shadow-[4px_4px_0_0_#000]">
    <h5 className="font-heading text-xs mb-4 opacity-40 italic">30-DAY WINDOW ONLY</h5>
    <Calendar
      mode="single"
      fromDate={new Date()}
      toDate={addDays(new Date(), 30)}
      className="rounded-2xl border-2 border-black bg-zinc-50 mx-auto"
    />
  </div>
);

// 6. Alert-Driven Calendar (Event Markers)
export const CalendarModifiers = () => {
  const bookedDays = [addDays(new Date(), 2), addDays(new Date(), 5), addDays(new Date(), 8)];
  return (
    <div className="bg-zinc-950 p-6 rounded-[2rem] border-2 border-black">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black text-pink-500 uppercase italic">High Load Days</span>
        <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/30">
          <Zap size={14} className="text-pink-500 animate-pulse" />
        </div>
      </div>
      <Calendar
        mode="single"
        modifiers={{ booked: bookedDays }}
        modifiersStyles={{
          booked: {
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "900",
            borderRadius: "8px",
            border: "1px solid black",
          },
        }}
        className="rounded-2xl bg-zinc-900 text-zinc-400 border-2 border-zinc-800 mx-auto"
      />
    </div>
  );
};

// 7. Interactive Footer Tools
export const CalendarFooter = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="p-6 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#88aaee]">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={
          <div className="pt-6 border-t-2 border-black border-dashed mt-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-main" />
              <span className="text-[10px] font-black uppercase text-zinc-400">Timestamp</span>
            </div>
            <Button
              className="bg-black text-white hover:bg-main hover:text-black border-2 border-black rounded-lg h-8 text-[10px] font-bold"
              onClick={() => setDate(new Date())}
            >
              RESET TO UTC
            </Button>
          </div>
        }
        className="p-0 border-0 mx-auto"
      />
    </div>
  );
};

// 8. Popover Dynamic Form
export const CalendarPopover = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className="w-full max-w-sm p-4 border-2 border-black rounded-2xl bg-white space-y-4 shadow-[4px_4px_0_0_#000]">
      <div className="space-y-1">
        <label className="text-xs font-black uppercase text-muted-foreground pl-1">
          Departure Vector
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-between h-12 border-2 border-black rounded-xl font-bold bg-zinc-50 hover:bg-zinc-100",
                !date && "text-muted-foreground italic"
              )}
            >
              <div className="flex items-center">
                <CalendarIcon className="mr-3 h-4 w-4 text-main" />
                {date ? format(date, "PPP") : <span>Set Coordinate...</span>}
              </div>
              <ChevronRight size={16} className="opacity-30" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-4 border-2 border-black rounded-2xl shadow-xl"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="rounded-xl border-0 mx-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

// 9. Panoramic Multi-Month
export const CalendarMultiMonth = () => (
  <div className="p-8 border-2 border-black rounded-[2.5rem] bg-zinc-50 overflow-x-auto">
    <div className="min-w-[500px]">
      <div className="flex justify-between items-center mb-6 border-b-2 border-black border-dashed pb-4">
        <h4 className="font-heading text-xl">Quarterly Overview</h4>
        <Badge className="bg-black text-white px-4 border-0">FY 2024</Badge>
      </div>
      <Calendar
        mode="range"
        numberOfMonths={2}
        className="rounded-2xl border-2 border-black bg-white p-4 mx-auto"
      />
    </div>
  </div>
);

// 10. Cyberpunk Themed Selection
export const CalendarStyled = () => (
  <div className="p-6 bg-zinc-950 border-2 border-black rounded-3xl relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-main shadow-[0_0_15px_#88aaee]"></div>
    <Calendar
      mode="single"
      className="p-0 border-0 mx-auto"
      classNames={{
        month: "space-y-4 text-zinc-500",
        caption_label: "font-black uppercase tracking-widest text-main",
        weekday: "text-main/40 font-black",
        selected:
          "bg-main text-black hover:bg-main hover:text-black focus:bg-main focus:text-black font-black border-0 shadow-[0_0_10px_#88aaee]",
        today: "bg-zinc-800 text-white font-black border-2 border-main/20",
        day: "hover:bg-zinc-800 hover:text-white transition-all rounded-lg h-9 w-9 p-0 flex items-center justify-center",
        day_button: "h-9 w-9 p-0 font-bold",
        nav_button:
          "border-2 border-zinc-800 text-zinc-500 hover:text-main hover:border-main bg-transparent",
      }}
    />
  </div>
);
