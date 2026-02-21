import { useState } from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Textarea } from "@/components/ui-shadcn/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback } from "@/components/ui-shadcn/avatar";
import { Badge } from "@/components/ui-shadcn/badge";
import { Label } from "@/components/ui-shadcn/label";
import { Star, ThumbsUp, ThumbsDown, Send } from "lucide-react";

// ─── Animated Star Rating ─────────────────────────────────────────────────────
export const AnimatedStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const labels: Record<number, string> = {
    1: "Terrible 😤",
    2: "Poor 😕",
    3: "Okay 😐",
    4: "Good 😊",
    5: "Excellent 🤩",
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader className="text-center pb-2">
          <div className="text-4xl mb-2">{rating ? "⭐" : "🎯"}</div>
          <CardTitle className="text-xl">Rate Your Experience</CardTitle>
          <CardDescription>How satisfied are you with our product?</CardDescription>
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
                  className={`transition-colors duration-150 ${
                    star <= (hovered || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground/30"
                  }`}
                />
              </button>
            ))}
          </div>
          {(hovered || rating) > 0 && (
            <p className="text-center font-semibold text-lg text-muted-foreground">
              {labels[hovered || rating]}
            </p>
          )}
          <div className="space-y-1.5">
            <Label className="text-sm">Leave a comment</Label>
            <Textarea
              placeholder="Tell us more about your experience..."
              className="resize-none text-sm"
              rows={2}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={!rating}>
            Submit Rating
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
    { id: "love", icon: "😍", label: "Love it!" },
    { id: "good", icon: "😊", label: "Pretty good" },
    { id: "okay", icon: "😐", label: "It's okay" },
    { id: "bad", icon: "😞", label: "Not great" },
  ];

  if (submitted) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <Card>
          <CardContent className="pt-10 pb-10 text-center space-y-3">
            <div className="text-6xl">🎉</div>
            <h3 className="text-xl font-semibold">Thanks for your feedback!</h3>
            <p className="text-sm text-muted-foreground">We'll use it to improve our product.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setSelected(null);
              }}
              className="mt-4"
            >
              Give more feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl">How do you feel?</CardTitle>
          <CardDescription>Pick the emoji that best matches your experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-4 gap-2">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelected(mood.id)}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-all hover:scale-105 active:scale-95 ${
                  selected === mood.id
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border hover:border-muted-foreground/40"
                }`}
              >
                <span className="text-3xl">{mood.icon}</span>
                <span className="text-[9px] font-medium text-center leading-tight text-muted-foreground">
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
          {selected && (
            <div className="space-y-1.5">
              <Label className="text-sm">Additional thoughts</Label>
              <Textarea
                placeholder="What can we improve?"
                className="resize-none text-sm"
                rows={2}
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={!selected} onClick={() => setSubmitted(true)}>
            <Send className="w-4 h-4 mr-2" />
            Send Feedback
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
    user: "Alex Chen",
    initials: "AC",
    rating: 5,
    title: "Game-changer for our team!",
    comment:
      "Switched our entire design system. The component quality is exceptional and every piece works out of the box.",
    date: "Feb 18, 2025",
    helpful: 28,
  },
  {
    id: 2,
    user: "Sarah Kim",
    initials: "SK",
    rating: 4,
    title: "Solid component library",
    comment:
      "Really appreciate the quality here. Copy-paste is smooth, all components are well-documented.",
    date: "Feb 15, 2025",
    helpful: 14,
  },
  {
    id: 3,
    user: "Marcus R.",
    initials: "MR",
    rating: 5,
    title: "Best UI kit on the market",
    comment:
      "The dark/light mode support is flawless and every component feels polished. Worth it!",
    date: "Feb 10, 2025",
    helpful: 42,
  },
];

export const RenderReviewsPage = () => {
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState<Record<number, number>>({});

  return (
    <div className="space-y-5 w-full max-w-2xl mx-auto">
      {/* Write Review */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Write a Review</CardTitle>
          <CardDescription>Share your honest experience with the community</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm mb-2 block">Your Rating</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} onClick={() => setRating(s)}>
                  <Star
                    size={28}
                    className={`transition-colors ${s <= rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm">Review Title</Label>
            <input
              placeholder="Summarize your experience"
              className="w-full px-3 py-2 border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm">Review Body</Label>
            <Textarea
              placeholder="What did you like or dislike?"
              className="resize-none"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Publish Review</Button>
        </CardFooter>
      </Card>

      {/* Reviews List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Community Reviews</h3>
          <Badge variant="secondary">★ 4.8 avg</Badge>
        </div>
        {REVIEWS.map((r) => (
          <Card key={r.id}>
            <CardContent className="pt-4 pb-3 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="text-xs font-medium">{r.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{r.user}</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          className={
                            s <= r.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground/30"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <div>
                <p className="font-medium text-sm mb-1">{r.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.comment}</p>
              </div>
              <div className="flex gap-2 pt-1 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setVotes((v) => ({ ...v, [r.id]: (v[r.id] || 0) + 1 }))}
                >
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  Helpful ({r.helpful + (votes[r.id] || 0)})
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
                  <ThumbsDown className="h-3 w-3 mr-1" />
                  Not helpful
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
    { id: "bug", emoji: "🐛", label: "Bug Report" },
    { id: "idea", emoji: "💡", label: "Feature Idea" },
    { id: "praise", emoji: "🎉", label: "Praise" },
    { id: "other", emoji: "💬", label: "Other" },
  ];

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardContent className="pt-10 pb-10 text-center space-y-3">
            <div className="text-6xl">✅</div>
            <h3 className="text-xl font-semibold">Feedback received!</h3>
            <p className="text-sm text-muted-foreground">We'll review it carefully. Thank you!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Send Feedback</CardTitle>
          <CardDescription>Help us build a better experience for you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <Label className="text-sm block mb-2">Feedback Type</Label>
            <div className="grid grid-cols-4 gap-2">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`flex flex-col items-center gap-1 p-2.5 rounded-lg border text-center transition-all ${
                    type === t.id
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border hover:border-muted-foreground/40"
                  }`}
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <span className="text-[9px] font-medium leading-tight text-muted-foreground">
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm">Your Message</Label>
            <Textarea
              placeholder="Describe your feedback in detail..."
              className="resize-none"
              rows={3}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm">Overall Satisfaction</Label>
              <span className="text-sm font-medium">{satisfaction}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={satisfaction}
              onChange={(e) => setSatisfaction(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Not satisfied</span>
              <span>Very satisfied</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setSubmitted(true)}>
            <Send className="w-4 h-4 mr-2" />
            Send Feedback
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
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="font-medium text-sm">JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Jordan Davis</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                Verified
              </Badge>
              <span className="text-xs text-muted-foreground">3 days ago</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <p className="font-semibold">Absolutely phenomenal! 🔥</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I've been building UIs for 6 years and this is genuinely the most well-crafted component
            library I've used. Clean, typed, and works perfectly out of the box.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Quality", "Well-documented", "Easy to use", "Great design"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex gap-2">
              <Button
                variant={vote === "helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleVote("helpful")}
                className="h-8 text-xs"
              >
                <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                Helpful ({helpful})
              </Button>
              <Button
                variant={vote === "not-helpful" ? "destructive" : "ghost"}
                size="sm"
                onClick={() => handleVote("not-helpful")}
                className="h-8 text-xs"
              >
                <ThumbsDown className="h-3.5 w-3.5" />
              </Button>
            </div>
            <button className="text-xs text-muted-foreground hover:text-foreground underline">
              Report
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
