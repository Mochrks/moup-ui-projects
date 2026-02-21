// ─── Feedback & Rating Code Strings ──────────────────────────────────────────

export const sampleCodeStarRating = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

export const AnimatedStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const labels = { 1: "Terrible 😤", 2: "Poor 😕", 3: "Okay 😐", 4: "Good 😊", 5: "Excellent 🤩" };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl font-black">Rate Your Experience</CardTitle>
          <CardDescription>How satisfied are you with MoupUI?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                className="transition-transform hover:scale-125 active:scale-90"
              >
                <Star
                  size={36}
                  className={\`transition-colors \${star <= (hovered || rating) ? "text-[#ffe135] fill-[#ffe135]" : "text-gray-300"}\`}
                />
              </button>
            ))}
          </div>
          {(hovered || rating) > 0 && (
            <p className="text-center font-black text-lg">{labels[hovered || rating]}</p>
          )}
          <Textarea placeholder="Tell us more..." className="border-2 border-black resize-none" rows={2} />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-[#ffe135] text-black"
            disabled={!rating}
          >
            Submit Rating →
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};`.trim();

export const sampleCodeEmojiFeedback = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send } from "lucide-react";

const moods = [
  { id: "love", icon: "😍", label: "Love it!", color: "bg-[#d1fae5] border-green-400" },
  { id: "good", icon: "😊", label: "Pretty good", color: "bg-[#dbeafe] border-blue-400" },
  { id: "okay", icon: "😐", label: "It's okay", color: "bg-[#fef3c7] border-yellow-400" },
  { id: "bad", icon: "😞", label: "Not great", color: "bg-[#fee2e2] border-red-400" },
];

export const EmojiFeedback = () => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="text-6xl mb-3">🎉</div>
          <h3 className="text-xl font-black">Thanks for your feedback!</h3>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-black">How do you feel?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelected(mood.id)}
              className={\`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all \${
                selected === mood.id ? \`\${mood.color} border-black shadow-[2px_2px_0_0_#000]\` : "border-gray-200 hover:border-black"
              }\`}
            >
              <span className="text-3xl">{mood.icon}</span>
              <span className="text-[9px] font-black">{mood.label}</span>
            </button>
          ))}
        </div>
        {selected && <Textarea placeholder="What can we improve?" className="border-2 border-black resize-none" rows={2} />}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-black text-white"
          disabled={!selected}
          onClick={() => setSubmitted(true)}
        >
          <Send className="w-4 h-4 mr-2" /> Send Feedback
        </Button>
      </CardFooter>
    </Card>
  );
};`.trim();

export const sampleCodeInteractiveReview = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

export const InteractiveReviewCard = () => {
  const [helpful, setHelpful] = useState(42);
  const [vote, setVote] = useState(null);

  const handleVote = (v) => {
    if (vote === v) { setVote(null); if (v === "helpful") setHelpful(h => h - 1); }
    else { if (vote === "helpful") setHelpful(h => h - 1); setVote(v); if (v === "helpful") setHelpful(h => h + 1); }
  };

  return (
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl overflow-hidden">
      <div className="bg-black px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-9 h-9 border-2 border-[#ffe135]">
            <AvatarFallback className="bg-[#ffe135] text-black font-black text-xs">JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-black text-white text-sm">Jordan Davis</p>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-[#ffe135] fill-[#ffe135]" />)}
            </div>
          </div>
        </div>
        <Badge className="bg-[#ffe135] text-black font-black text-xs">Verified</Badge>
      </div>
      <CardContent className="pt-4 pb-4 space-y-3">
        <p className="font-black text-lg">Absolutely phenomenal! 🔥</p>
        <p className="text-sm text-muted-foreground">MoupUI is the most well-crafted component library I've used. The neobrutalist aesthetic is refreshing and every component just works.</p>
        <div className="flex gap-2 pt-2 border-t-2 border-black/10">
          <Button
            variant="outline" size="sm"
            onClick={() => handleVote("helpful")}
            className={\`border-2 text-xs font-bold h-8 \${vote === "helpful" ? "border-green-500 bg-[#d1fae5] text-green-700" : "border-black"}\`}
          >
            <ThumbsUp className="h-3.5 w-3.5 mr-1" /> Helpful ({helpful})
          </Button>
          <Button
            variant="outline" size="sm"
            onClick={() => handleVote("not-helpful")}
            className={\`border-2 text-xs font-bold h-8 \${vote === "not-helpful" ? "border-red-400 bg-[#fee2e2]" : "border-gray-200"}\`}
          >
            <ThumbsDown className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};`.trim();

export const sampleCodeFeedbackHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Feedback — MoupUI</title></head>
<body style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f9fafb;margin:0;">
  <div style="width:100%;max-width:400px;border:2px solid black;border-radius:12px;padding:24px;box-shadow:4px 4px 0 0 #000;background:white;">
    <h2 style="font-weight:900;font-size:1.25rem;text-align:center;">Rate Your Experience</h2>
    <div style="display:flex;justify-content:center;gap:8px;margin:16px 0;">
      <span style="font-size:2rem;cursor:pointer;" onclick="rate(1)">⭐</span>
      <span style="font-size:2rem;cursor:pointer;" onclick="rate(2)">⭐</span>
      <span style="font-size:2rem;cursor:pointer;" onclick="rate(3)">⭐</span>
      <span style="font-size:2rem;cursor:pointer;" onclick="rate(4)">⭐</span>
      <span style="font-size:2rem;cursor:pointer;" onclick="rate(5)">⭐</span>
    </div>
    <textarea placeholder="Tell us more..." style="width:100%;padding:8px;border:2px solid black;border-radius:8px;resize:none;box-sizing:border-box;margin-bottom:12px;" rows="3"></textarea>
    <button style="width:100%;padding:10px;background:#ffe135;border:2px solid black;border-radius:8px;font-weight:900;cursor:pointer;box-shadow:3px 3px 0 0 rgba(0,0,0,0.3);">
      Submit Rating →
    </button>
  </div>
</body>
</html>`.trim();
