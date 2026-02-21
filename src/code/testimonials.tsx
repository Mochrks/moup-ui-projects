import { Card, CardContent } from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechFlow",
      text: "MoupUI transformed our development workflow. The neobrutalist aesthetic is exactly what we needed to stand out.",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Sarah Smith",
      role: "Product Designer",
      text: "Finally a library that doesn't look like every other Bootstrap site. Creative, bold, and incredibly easy to customize.",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Mike Ross",
      role: "Lead Engineer",
      text: "The code quality is top-notch. Components are highly accessible and the documentation is best in class.",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      name: "Elena Gilbert",
      role: "Freelance Dev",
      text: "Building my portfolio was a breeze with MoupUI. The pre-built sections saved me weeks of design work.",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className="border-2 border-black shadow-[4px_4px_0_0_#000] bg-white hover:translate-y-[-4px] transition-transform"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex gap-1 text-[#ffe135]">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" stroke="black" strokeWidth={2} />
              ))}
            </div>
            <p className="font-bold text-sm italic text-zinc-700 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t-2 border-zinc-100">
              <Avatar className="h-10 w-10 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <AvatarImage src={t.avatar} />
                <AvatarFallback>{t.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-black text-sm">{t.name}</h4>
                <p className="text-[10px] uppercase font-black text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const SingleFeaturedTestimonial = () => (
  <div className="w-full max-w-4xl mx-auto bg-[#ffe135] border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] rounded-2xl relative overflow-hidden group">
    <Quote
      size={120}
      className="absolute -top-10 -right-10 text-black/5 rotate-12 group-hover:rotate-0 transition-transform duration-500"
    />
    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
      <div className="flex gap-1">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={20} fill="black" />
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-black leading-tight max-w-2xl">
        "Our conversion rate increased by 40% after switching to MoupUI. The unique design language
        builds instant trust with our customers."
      </h3>
      <div className="flex flex-col items-center">
        <Avatar className="h-16 w-16 border-4 border-white shadow-[4px_4px_0_0_#000] mb-3">
          <AvatarImage src="https://i.pravatar.cc/150?u=9" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h4 className="font-black text-lg">James Wilson</h4>
        <p className="text-xs uppercase font-black text-black/60 tracking-widest">
          Growth Director @ MetaScale
        </p>
      </div>
    </div>
  </div>
);

export const MasonryTestimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "UX Designer",
      text: "The layout possibilities are endless.",
      color: "bg-blue-200",
      size: "col-span-1",
    },
    {
      name: "Sia Park",
      role: "DevRel",
      text: "Finally, a UI kit with personality. No more boring gray boxes!",
      color: "bg-green-200",
      size: "col-span-2",
    },
    {
      name: "Tom Baker",
      role: "Founder",
      text: "Clean code and bold design. Perfect for our startup's landing page.",
      color: "bg-purple-200",
      size: "col-span-1",
    },
    {
      name: "Maria Garcia",
      role: "Web Dev",
      text: "Neobrutalism is the future of the web.",
      color: "bg-[#ffe135]",
      size: "col-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className={`border-2 border-black shadow-[4px_4px_0_0_#000] ${t.color} ${t.size} hover:rotate-1 transition-transform cursor-default`}
        >
          <CardContent className="p-6">
            <Quote className="mb-4 opacity-20" size={32} />
            <p className="text-lg font-black mb-6 leading-tight">"{t.text}"</p>
            <div className="flex items-center gap-2 pt-4 border-t-2 border-black/10">
              <div className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center font-black text-xs uppercase">
                {t.name[0]}
              </div>
              <div>
                <h5 className="font-black text-xs">{t.name}</h5>
                <p className="text-[10px] font-bold uppercase opacity-60">{t.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
