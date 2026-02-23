import { useState } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Textarea } from "@/components/ui-shadcn/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui-neobrutalism/card";
import { Avatar, AvatarFallback } from "@/components/ui-neobrutalism/avatar";
import { Badge } from "@/components/ui-neobrutalism/badge";
import { Label } from "@/components/ui-neobrutalism/label";
import { Star, ThumbsUp, ThumbsDown, Send, Activity, MessageSquare } from "lucide-react";

// ─── Animated Star Rating ─────────────────────────────────────────────────────
export const AnimatedStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const labels: Record<number, string> = {
    1: "CRITICAL_FAILURE_01 😤",
    2: "SUBSTANDARD_02 😕",
    3: "NOMINAL_03 😐",
    4: "OPTIMIZED_04 😊",
    5: "APEX_PERFORMANCE_05 🤩",
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white overflow-hidden rounded-3xl">
        <CardHeader className="text-center pb-6 bg-[#ffe135] border-b-4 border-black relative">
          <div className="absolute top-2 right-4 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500 border border-black" />
            <div className="w-2 h-2 rounded-full bg-green-500 border border-black animate-pulse" />
          </div>
          <div className="text-5xl mb-3">{rating ? "⚡" : "⚙️"}</div>
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
            DATASET_RATING
          </CardTitle>
          <CardDescription className="text-black/60 font-bold uppercase text-[10px] tracking-widest">
            Evaluate System Output Quality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="flex justify-center gap-3 py-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                className="transition-transform hover:scale-125 active:scale-90"
              >
                <Star
                  size={42}
                  className={`transition-all duration-150 ${
                    star <= (hovered || rating)
                      ? "text-black fill-[#ffe135] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
                      : "text-black/20"
                  }`}
                />
              </button>
            ))}
          </div>
          {(hovered || rating) > 0 && (
            <div className="bg-black text-white px-4 py-2 border-2 border-black rounded shadow-[4px_4px_0_0_#ffe135] text-center">
              <p className="font-black uppercase italic text-sm tracking-widest">
                {labels[hovered || rating]}
              </p>
            </div>
          )}
          <div className="space-y-2">
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2 flex items-center gap-2">
              <MessageSquare size={12} /> LOG_ADDITIONAL_INTEL
            </Label>
            <Textarea
              placeholder="FIELD_INPUT_01..."
              className="resize-none border-2 border-black font-bold focus-visible:ring-0 shadow-[4px_4px_0_0_#000]"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="p-8 bg-zinc-50 border-t-2 border-black">
          <Button
            className="w-full h-14 bg-black text-[#ffe135] border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase italic text-lg"
            disabled={!rating}
          >
            TRANSMIT RATING
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── Emoji Feedback ───────────────────────────────────────────────────────────
export const EmojiFeedback = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    { id: "love", icon: "😍", label: "ELITE" },
    { id: "good", icon: "😊", label: "NOMINAL" },
    { id: "okay", icon: "😐", label: "STABLE" },
    { id: "bad", icon: "😞", label: "CRIT_ERR" },
  ];

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="border-4 border-black shadow-[12px_12px_0_0_#34A853] bg-white rounded-3xl overflow-hidden">
          <CardContent className="pt-16 pb-16 text-center space-y-6">
            <div className="w-24 h-24 bg-green-400 border-4 border-black rounded-full flex items-center justify-center mx-auto shadow-[4px_4px_0_0_#000] rotate-6">
              <span className="text-5xl">📡</span>
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">DATA_SYNCHED!</h3>
            <p className="text-sm font-bold uppercase text-black/40 italic">
              Input integrated into core processing unit.
            </p>
            <Button
              variant="neutral"
              onClick={() => {
                setSubmitted(false);
                setSelected(null);
              }}
              className="mt-4 border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase italic"
            >
              NEW_TRANSMISSION
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white rounded-3xl overflow-hidden">
        <CardHeader className="text-center pb-6 bg-indigo-400 border-b-4 border-black">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter text-white">
            EMO_STATUS_SCAN
          </CardTitle>
          <CardDescription className="text-white/80 font-bold uppercase text-[10px] tracking-widest">
            Synchronize experience State
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="grid grid-cols-4 gap-3">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelected(mood.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-4 transition-all hover:translate-y-[-2px] active:scale-95 ${
                  selected === mood.id
                    ? "border-black bg-[#ffe135] shadow-[4px_4px_0_0_#000] -rotate-2"
                    : "border-black/5 bg-zinc-50 hover:border-black/20"
                }`}
              >
                <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">{mood.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tighter italic">
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
          {selected && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <Label className="font-black uppercase text-[10px] tracking-widest pl-2">
                CORE_THOUGHTS
              </Label>
              <Textarea
                placeholder="EXPAND_SYSTEM_Intel..."
                className="resize-none border-2 border-black font-bold h-24 focus-visible:ring-0 shadow-[4px_4px_0_0_#000]"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="p-8">
          <Button
            className="w-full h-14 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#indigo-400] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase italic text-lg shadow-[4px_4px_0_0_#4C1D95]"
            disabled={!selected}
            onClick={() => setSubmitted(true)}
          >
            <Send className="w-5 h-5 mr-3" />
            START_UPLOAD
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── Review Page ──────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: 1,
    user: "Alex.Nodes",
    initials: "AN",
    rating: 5,
    title: "TOTAL SYSTEM OVERHAUL",
    comment:
      "Integrated the entire module. Input-to-output latency is minimal. High aesthetic impact. Optimized for core users.",
    date: "18_FEB_2025",
    helpful: 28,
  },
  {
    id: 2,
    user: "Sarah.Core",
    initials: "SC",
    rating: 4,
    title: "SOLID ARCHITECTURE",
    comment:
      "Reliable component density. The documentation nodes are clearly defined. Integration was a success.",
    date: "15_FEB_2025",
    helpful: 14,
  },
  {
    id: 3,
    user: "Marcus.Prime",
    initials: "MP",
    rating: 5,
    title: "INDUSTRY PEAK",
    comment:
      "Terminal visual clarity is 100%. Dark/Light state toggles are seamless. No packet loss in heavy layouts.",
    date: "10_FEB_2025",
    helpful: 42,
  },
];

export const RenderReviewsPage = () => {
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState<Record<number, number>>({});

  return (
    <div className="space-y-10 w-full max-w-3xl mx-auto">
      {/* Write Review */}
      <Card className="border-4 border-black shadow-[8px_8px_0_0_#000] rounded-3xl overflow-hidden bg-white">
        <CardHeader className="pb-6 border-b-4 border-black bg-zinc-50">
          <CardTitle className="text-3xl font-black italic uppercase tracking-tighter">
            PUBLISH_REVIEW
          </CardTitle>
          <CardDescription className="font-bold uppercase text-[10px] tracking-widest italic opacity-50">
            Broadcast system experience to network
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div>
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2 mb-3 block">
              RATING_SPEC:
            </Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => setRating(s)}
                  className="transition-transform active:scale-90"
                >
                  <Star
                    size={32}
                    className={`transition-all ${s <= rating ? "text-black fill-[#ffe135] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" : "text-black/10"}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2">
              HEADER_TITLE
            </Label>
            <input
              placeholder="SUMMARY_FIELD..."
              className="w-full h-12 px-4 border-2 border-black rounded-lg font-black uppercase italic text-sm shadow-[4px_4px_0_0_#000] focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2">
              CORE_LOG_BODY
            </Label>
            <Textarea
              placeholder="DETAILED_MANIFEST... (LIKE/DISLIKE DATA)"
              className="resize-none border-2 border-black font-bold shadow-[4px_4px_0_0_#000] h-32"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="p-8 bg-black">
          <Button className="w-full h-14 bg-[#ffe135] text-black border-2 border-black shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase italic text-lg">
            BROADCAST_REVIEW
          </Button>
        </CardFooter>
      </Card>

      {/* Reviews List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between bg-black p-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#ffe135]">
          <h3 className="font-black text-xl italic uppercase text-white tracking-widest">
            COMMUNITY_LOGS
          </h3>
          <Badge className="bg-[#ffe135] text-black border-2 border-white font-black italic">
            AVG: 4.8 / APEX
          </Badge>
        </div>

        {REVIEWS.map((r) => (
          <Card
            key={r.id}
            className="border-4 border-black shadow-[6px_6px_0_0_#000] rounded-2xl overflow-hidden bg-white hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-black shadow-[2px_2px_0_0_#000] rounded-lg">
                    <AvatarFallback className="bg-indigo-400 text-white font-black italic rounded-lg">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-black uppercase italic text-sm tracking-tight">{r.user}</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          className={s <= r.rating ? "text-black fill-[#ffe135]" : "text-black/10"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="border-2 border-black font-black uppercase text-[9px] h-6 italic text-black/50"
                >
                  {r.date}
                </Badge>
              </div>
              <div>
                <p className="font-black uppercase italic text-lg mb-2 leading-none border-l-4 border-[#ffe135] pl-3">
                  {r.title}
                </p>
                <p className="text-sm font-bold text-gray-700 italic leading-relaxed">
                  {r.comment}
                </p>
              </div>
              <div className="flex gap-4 pt-4 border-t-2 border-black/5">
                <Button
                  variant="neutral"
                  size="sm"
                  className="h-9 border-2 border-black bg-zinc-50 font-black italic uppercase text-[10px] shadow-[2px_2px_0_0_#000] hover:bg-[#ffe135]"
                  onClick={() => setVotes((v) => ({ ...v, [r.id]: (v[r.id] || 0) + 1 }))}
                >
                  <ThumbsUp className="h-3.5 w-3.5 mr-2" />
                  VAL_HELP ({r.helpful + (votes[r.id] || 0)})
                </Button>
                <Button
                  variant="neutral"
                  size="sm"
                  className="h-9 border-2 border-black bg-zinc-50 font-black italic uppercase text-[10px] shadow-[2px_2px_0_0_#000]"
                >
                  <ThumbsDown className="h-3.5 w-3.5 mr-2" />
                  VAL_NULL
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── Feedback Page ────────────────────────────────────────────────────────────
export const RenderFeedbackPage = () => {
  const [type, setType] = useState<string | null>(null);
  const [satisfaction, setSatisfaction] = useState(75);
  const [submitted, setSubmitted] = useState(false);

  const types = [
    { id: "bug", emoji: "🐛", label: "CRIT_ERR" },
    { id: "idea", emoji: "💡", label: "EXPANSION" },
    { id: "praise", emoji: "🎉", label: "OPTIMAL" },
    { id: "other", emoji: "💬", label: "MISC" },
  ];

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="border-4 border-black shadow-[12px_12px_0_0_#ffe135] rounded-3xl overflow-hidden bg-white">
          <CardContent className="pt-20 pb-20 text-center space-y-6">
            <div className="w-24 h-24 bg-[#ffe135] border-4 border-black rounded-3xl flex items-center justify-center mx-auto shadow-[4px_4px_0_0_#000] -rotate-6">
              <span className="text-6xl">📥</span>
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">
              DATA_ACCEPTED!
            </h3>
            <p className="text-xs font-bold uppercase text-black/50 italic">
              Processing Intel Nodes...
            </p>
            <Button
              className="mt-6 h-12 px-8 bg-black text-white border-2 border-black shadow-[4px_4px_0_0_#ffe135] font-black uppercase italic"
              onClick={() => setSubmitted(false)}
            >
              BACK_TO_INTAKE
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-3xl overflow-hidden bg-white">
        <CardHeader className="pb-6 bg-pink-400 border-b-4 border-black">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter text-white">
            INTEL_FEEDBACK
          </CardTitle>
          <CardDescription className="text-white font-bold uppercase text-[10px] tracking-widest italic opacity-80">
            Refine system architecture through direct relay
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div>
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2 block mb-3">
              FEEDBACK_TYPE:
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-4 transition-all ${
                    type === t.id
                      ? "border-black bg-pink-400 shadow-[2px_2px_0_0_#000] scale-105"
                      : "border-black/5 bg-zinc-50 hover:border-black/20"
                  }`}
                >
                  <span className="text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">{t.emoji}</span>
                  <span className="text-[10px] font-black uppercase leading-none text-center">
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-black uppercase text-[10px] tracking-widest pl-2">
              MESSAGE_RELAY
            </Label>
            <Textarea
              placeholder="DECLARE_DETAILS_01..."
              className="resize-none border-2 border-black font-bold shadow-[4px_4px_0_0_#000]"
              rows={3}
            />
          </div>
          <div className="p-4 bg-zinc-50 border-2 border-black rounded-2xl shadow-[4px_4px_0_0_#000]">
            <div className="flex items-center justify-between mb-4">
              <Label className="font-black uppercase italic text-xs tracking-tighter flex items-center gap-2">
                <Activity size={14} /> SATISFACTION_INDEX
              </Label>
              <span className="font-black font-mono text-xl">{satisfaction}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={satisfaction}
              onChange={(e) => setSatisfaction(Number(e.target.value))}
              className="w-full accent-black h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[8px] font-black uppercase italic mt-2">
              <span className="text-red-500">LOW_PRIORITY</span>
              <span className="text-green-500">MAX_EFFICIENCY</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-8">
          <Button
            className="w-full h-14 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#pink-400] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase italic text-lg shadow-[4px_4px_0_0_#F472B6]"
            onClick={() => setSubmitted(true)}
          >
            <Send className="w-5 h-5 mr-3" />
            INITIATE_RELAY
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── Interactive Review Card ──────────────────────────────────────────────────
export const InteractiveReviewCard = () => {
  const [helpful, setHelpful] = useState(42);
  const [vote, setVote] = useState<"helpful" | "not-helpful" | null>(null);

  const handleVote = (v: "helpful" | "not-helpful") => {
    if (vote === v) {
      setVote(null);
      if (v === "helpful") setHelpful((h) => h - 1);
    } else {
      if (vote === "helpful") setHelpful((h) => h - 1);
      setVote(v);
      if (v === "helpful") setHelpful((h) => h + 1);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="border-4 border-black shadow-[12px_12px_0_0_#000] rounded-3xl overflow-hidden bg-white">
        <CardHeader className="pb-6 bg-[#ffe135] border-b-4 border-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-14 h-14 border-4 border-black shadow-[3px_3px_0_0_#000] rounded-xl overflow-hidden">
                <AvatarFallback className="font-black text-xl italic bg-white rounded-none">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-black uppercase italic text-xl tracking-tighter">JORDAN_LOG</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-black fill-black" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge className="bg-black text-white border-2 border-white font-black italic uppercase text-[9px] px-2 h-6">
                VERIFIED_UNIT
              </Badge>
              <span className="text-[10px] font-black uppercase text-black/50 italic tracking-widest">
                3_DAYS_LOG
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <p className="font-black italic uppercase text-2xl leading-none border-b-4 border-black/5 pb-2">
            APEX PERFORMANCE DATA 🔥
          </p>
          <p className="font-bold text-gray-700 italic leading-relaxed text-lg">
            Genuinely the most well-crafted infrastructure module I've integrated. Zero packet loss,
            total aesthetic dominance. Works optimally for all high-load grids.
          </p>
          <div className="flex flex-wrap gap-2 py-4 border-y-2 border-black/5">
            {["ELITE_QUALITY", "WELL_LOGGED", "NOMINAL_USE", "APEX_STYLE"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase italic px-3 py-1 bg-black text-[#ffe135] rounded-full border border-black shadow-[2px_2px_0_0_#000]"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-8 bg-zinc-50 border-t-2 border-black flex items-center justify-between">
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              variant="neutral"
              size="sm"
              onClick={() => handleVote("helpful")}
              className={`h-12 px-6 border-2 border-black font-black italic uppercase text-xs transition-all ${vote === "helpful" ? "bg-[#ffe135] shadow-none translate-x-1 translate-y-1" : "bg-white shadow-[4px_4px_0_0_#000]"}`}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              VAL_HELP ({helpful})
            </Button>
            <Button
              variant="neutral"
              size="sm"
              onClick={() => handleVote("not-helpful")}
              className={`h-12 w-12 border-2 border-black bg-zinc-100 font-black flex items-center justify-center transition-all ${vote === "not-helpful" ? "bg-red-500 text-white shadow-none translate-x-1 translate-y-1" : "bg-white shadow-[4px_4px_0_0_#000]"}`}
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
          <button className="text-[10px] font-black uppercase italic text-black/40 hover:text-black underline decoration-2 underline-offset-4 hidden sm:block">
            REPORT_ANOMALY
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};
