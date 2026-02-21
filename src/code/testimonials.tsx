import { Card, CardContent } from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechFlow",
      text: "This UI library transformed our development workflow. The components are clean, accessible, and very easy to customize.",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Sarah Smith",
      role: "Product Designer",
      text: "Creative and well-built components. It's refreshing to have a library that has a strong focus on UX and clean visuals.",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Mike Ross",
      role: "Lead Engineer",
      text: "Code quality is top-notch. The documentation is extremely clear, and the components work flawlessly with Next.js.",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      name: "Elena Gilbert",
      role: "Front-end Developer",
      text: "Building complex layouts became much faster. The consistency across sections saves us a lot of design time.",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <Card key={i} className="border shadow-sm bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t">
              <Avatar className="h-9 w-9">
                <AvatarImage src={t.avatar} />
                <AvatarFallback>{t.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-sm">{t.name}</h4>
                <p className="text-[10px] text-muted-foreground uppercase">{t.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const SingleFeaturedTestimonial = () => (
  <div className="w-full max-w-4xl mx-auto bg-zinc-50 border p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-sm">
    <Quote
      size={120}
      className="absolute -top-10 -right-10 text-zinc-100 rotate-12 transition-transform duration-500"
    />
    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
      <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={20} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold leading-tight max-w-2xl text-foreground">
        "Our conversion rate increased by 40% after integrating these components. The professional
        design language builds instant trust with our customers."
      </h3>
      <div className="flex flex-col items-center">
        <Avatar className="h-14 w-14 border-2 border-white shadow-sm mb-3">
          <AvatarImage src="https://i.pravatar.cc/150?u=9" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h4 className="font-bold text-base">James Wilson</h4>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
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
      text: "The layout possibilities are consistent and well-thought-out.",
      color: "bg-white",
    },
    {
      name: "Sia Park",
      role: "DevRel",
      text: "Finally, a UI kit that balances personality with professional aesthetics. No more generic-looking sites!",
      color: "bg-zinc-50",
    },
    {
      name: "Tom Baker",
      role: "Founder",
      text: "Clean code and professional-grade design. Perfect for our startup's landing page.",
      color: "bg-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <Card
          key={i}
          className={`border shadow-sm ${t.color} hover:border-primary transition-all cursor-default`}
        >
          <CardContent className="p-6">
            <Quote className="mb-4 text-zinc-200" size={32} />
            <p className="text-base font-medium mb-6 leading-tight">"{t.text}"</p>
            <div className="flex items-center gap-2 pt-4 border-t">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-[10px] font-bold">{t.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="font-semibold text-xs">{t.name}</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">
                  {t.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
