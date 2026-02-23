import { MoveRight, Play, Star, ChevronRight, Check } from "lucide-react";

// 1. Simple Gradient Hero
export const HeroSimpleGradient = () => (
  <div className="w-full py-16 px-6 text-center bg-gradient-to-b from-indigo-50 to-white border-2 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
    <div className="max-w-3xl mx-auto space-y-6">
      <span className="px-4 py-1.5 rounded-full border-2 border-black bg-[#ffe135] text-xs font-black uppercase tracking-widest">
        Now in Beta
      </span>
      <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
        Build faster with{" "}
        <span className="underline decoration-indigo-500 underline-offset-4">Modern</span> UI
      </h1>
      <p className="text-lg font-medium text-gray-600">
        The ultimate neobrutalist component library for React and Tailwind CSS.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="px-8 py-3 bg-black text-white font-black rounded-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0_0_#ffe135] border-2 border-black">
          Get Started
        </button>
        <button className="px-8 py-3 bg-white text-black font-black rounded-xl border-4 border-black hover:bg-zinc-100 transition-colors">
          View Demo
        </button>
      </div>
    </div>
  </div>
);

// 2. Glassmorphism Hero
export const HeroGlassmorphism = () => (
  <div className="w-full min-h-[400px] relative overflow-hidden rounded-3xl border-4 border-black bg-[#6366f1] p-8 md:p-12">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-20 -mt-20 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/30 rounded-full -ml-10 -mb-10 blur-2xl" />

    <div className="relative z-10 max-w-2xl space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black text-white text-[10px] font-black uppercase tracking-widest">
        <Star className="w-3 h-3 text-[#ffe135]" /> Premium Template
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
        Experience the <br /> Future of Web
      </h1>
      <p className="text-lg text-indigo-100 font-medium">
        Stunning glassmorphism effects combined with neobrutalist structure.
      </p>
      <div className="pt-4 flex items-center gap-4">
        <button className="px-6 py-4 bg-[#ffe135] text-black font-black rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2">
          Start Project <MoveRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

// 3. Split Hero
export const HeroSplit = () => (
  <div className="w-full flex flex-col md:flex-row border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[8px_8px_0_0_#000]">
    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 border-b-4 md:border-b-0 md:border-r-4 border-black">
      <h1 className="text-4xl font-black text-black">Mastering the Art of Design.</h1>
      <p className="text-gray-600 font-medium">
        Learn from the best designers in the industry with our curated courses and workshops.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-black text-white font-bold rounded-lg border-2 border-black">
          Browse Courses
        </button>
        <button className="p-3 border-2 border-black rounded-lg hover:bg-zinc-100 transition-colors">
          <Play className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
    <div className="flex-1 bg-main p-8 flex items-center justify-center min-h-[300px]">
      <div className="w-full max-w-xs aspect-square border-4 border-black bg-white rounded-2xl shadow-[8px_8px_0_0_#000] flex items-center justify-center p-8 rotate-3">
        <div className="w-full h-full border-2 border-black rounded-xl bg-zinc-50 flex items-center justify-center overflow-hidden">
          <span className="text-6xl font-black opacity-10">IMAGE</span>
        </div>
      </div>
    </div>
  </div>
);

// 4. Feature Card Hero
export const HeroFeatures = () => (
  <div className="w-full py-12 px-6 bg-zinc-50 border-2 border-black rounded-3xl relative overflow-hidden">
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-400 border-2 border-black rounded-full" />
    <div className="text-center mb-12 space-y-4">
      <h1 className="text-4xl font-black">All-in-one platform</h1>
      <p className="max-w-xl mx-auto text-gray-500 font-medium">
        The most powerful tool for teams to collaborate and ship faster than ever.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="p-6 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all"
        >
          <div className="w-10 h-10 bg-indigo-100 border-2 border-black rounded-lg mb-4 flex items-center justify-center font-black">
            0{i}
          </div>
          <h3 className="text-xl font-black mb-2">Feature {i}</h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      ))}
    </div>
  </div>
);

// 5. Search Hero
export const HeroSearch = () => (
  <div className="w-full py-20 px-6 bg-[#ffe135] border-4 border-black rounded-3xl shadow-[12px_12px_0_0_#000] text-center">
    <h1 className="text-4xl md:text-5xl font-black mb-8">What are you looking for?</h1>
    <div className="max-w-2xl mx-auto relative group">
      <input
        type="text"
        placeholder="Search documentation, components..."
        className="w-full px-6 py-5 bg-white border-4 border-black rounded-2xl text-lg font-bold shadow-[6px_6px_0_0_#000] focus:outline-none focus:shadow-[2px_2px_0_0_#000] transition-all"
      />
      <button className="absolute right-3 top-3 px-6 py-2 bg-black text-white font-black rounded-xl border-2 border-black transition-all">
        Search
      </button>
    </div>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {["Buttons", "Navigation", "Cards", "Modals"].map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-black cursor-pointer hover:bg-black hover:text-white transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// 6. Minimalist Dark Hero
export const HeroDarkMinimal = () => (
  <div className="w-full py-24 px-6 bg-zinc-900 border-4 border-black rounded-3xl text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffe135] to-transparent" />
    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
      The Dark Side.
    </h1>
    <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto font-medium">
      Sleek, powerful, and mysterious. Design like never before with our dark mode first components.
    </p>
    <div className="flex justify-center flex-wrap gap-4">
      <button className="px-10 py-4 bg-white text-black font-black rounded-full border-2 border-white hover:bg-black hover:text-white transition-all">
        Join the waitlist
      </button>
      <button className="px-10 py-4 bg-transparent text-white font-black rounded-full border-2 border-zinc-700 hover:border-white transition-all">
        Learn More
      </button>
    </div>
  </div>
);

// 7. Announcement Hero
export const HeroAnnouncement = () => (
  <div className="w-full bg-[#34A853] border-4 border-black rounded-3xl p-1 shadow-[8px_8px_0_0_#000] overflow-hidden">
    <div className="bg-white border-b-4 border-black px-6 py-3 flex items-center justify-between">
      <span className="text-xs font-black uppercase tracking-widest">Global Event 2024</span>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400 border border-black" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
        <div className="w-3 h-3 rounded-full bg-green-400 border border-black" />
      </div>
    </div>
    <div className="p-10 text-center space-y-6">
      <h1 className="text-4xl font-black text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
        Join the World's First Neobrutalist Design Summit.
      </h1>
      <p className="text-[#f0f9ff] text-lg font-bold">
        12 Cities. 48 Speakers. 1 Unforgettable Experience.
      </p>
      <button className="px-8 py-3 bg-black text-white font-black rounded-xl border-2 border-white hover:bg-white hover:text-black transition-all">
        Secure your spot
      </button>
    </div>
  </div>
);

// 8. Visual List Hero
export const HeroVisualList = () => (
  <div className="w-full py-16 px-6 bg-white border-2 border-black rounded-3xl flex flex-col lg:flex-row gap-12 items-center">
    <div className="flex-1 space-y-6">
      <h1 className="text-4xl font-black leading-tight">Better tools for better workflows.</h1>
      <div className="space-y-4">
        {[
          { color: "bg-blue-400", text: "Real-time collaboration with teams" },
          { color: "bg-purple-400", text: "Advanced analytics and insights" },
          { color: "bg-green-400", text: "Secure cloud infrastructure" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div
              className={`w-10 h-10 border-2 border-black rounded-lg ${item.color} shadow-[2px_2px_0_0_#000] group-hover:shadow-none transition-all`}
            />
            <span className="font-bold text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
      <button className="px-8 py-3 bg-black text-white font-black rounded-xl">
        Explore features
      </button>
    </div>
    <div className="flex-1 w-full max-w-md bg-zinc-100 border-4 border-black rounded-2xl p-6 shadow-[10px_10px_0_0_#000]">
      <div className="space-y-4">
        <div className="h-6 w-1/2 bg-zinc-300 rounded-full" />
        <div className="h-40 w-full bg-white border-2 border-black rounded-xl p-4">
          <div className="w-full h-full bg-zinc-50 border border-dashed border-black/20 rounded flex items-center justify-center">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none">
              Visualization Preview
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-10 flex-1 bg-black rounded-lg" />
          <div className="h-10 flex-1 bg-zinc-300 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

// 9. Floating UI Hero
export const HeroFloatingUI = () => (
  <div className="w-full min-h-[450px] bg-indigo-50 border-4 border-black rounded-3xl relative overflow-hidden flex items-center justify-center p-6">
    <div className="absolute top-10 left-10 p-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] -rotate-6 animate-bounce">
      <div className="w-8 h-8 rounded bg-[#ffe135] border border-black mb-2" />
      <div className="h-2 w-12 bg-zinc-200 rounded-full" />
    </div>
    <div className="absolute bottom-10 right-10 p-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] rotate-12">
      <div className="flex gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-red-400 border border-black" />
        <div className="w-4 h-4 rounded-full bg-blue-400 border border-black" />
      </div>
      <div className="h-2 w-16 bg-zinc-200 rounded-full" />
    </div>

    <div className="relative text-center max-w-xl z-10">
      <h1 className="text-5xl font-black mb-6 leading-none">Modular & Dynamic Components.</h1>
      <p className="text-gray-600 font-medium mb-8">
        Stop rebuilding from scratch. Use our pre-built, tested, and high-performance components
        today.
      </p>
      <button className="px-8 py-4 bg-[#ffe135] text-black font-black text-xl rounded-2xl border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        Build your UI Now
      </button>
    </div>
  </div>
);

// 10. Pricing/Tier Hero
export const HeroTiered = () => (
  <div className="w-full py-16 px-6 bg-white border-4 border-black rounded-3xl relative overflow-hidden">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-black mb-4">Choose your plan</h1>
      <p className="font-bold text-gray-500 uppercase tracking-widest text-xs">
        Simple. Transparent. Fair.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
      <div className="flex-1 max-w-sm p-8 bg-zinc-50 border-4 border-black rounded-2xl">
        <span className="text-sm font-black text-zinc-400 uppercase">Starter</span>
        <h3 className="text-5xl font-black mt-2 mb-4">
          $0<span className="text-xl font-bold opacity-30">/mo</span>
        </h3>
        <ul className="space-y-3 mb-8">
          {["Basic access", "3 Projects", "Community support"].map((t) => (
            <li key={t} className="flex items-center gap-2 font-bold text-sm">
              <ChevronRight className="w-4 h-4" /> {t}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 bg-black text-white font-black rounded-xl border-2 border-black">
          Get Free
        </button>
      </div>
      <div className="flex-1 max-w-sm p-8 bg-[#ffe135] border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000] scale-105 relative z-10">
        <div className="absolute top-0 right-0 px-3 py-1 bg-black text-white text-[10px] uppercase font-black transform -translate-y-1/2 translate-x-4 rotate-3">
          Popular
        </div>
        <span className="text-sm font-black text-black uppercase opacity-60">Professional</span>
        <h3 className="text-5xl font-black mt-2 mb-4">
          $29<span className="text-xl font-bold opacity-30">/mo</span>
        </h3>
        <ul className="space-y-3 mb-8">
          {["Unlimited projects", "Custom domains", "Priority email support", "API access"].map(
            (t) => (
              <li key={t} className="flex items-center gap-2 font-black text-sm">
                <Check className="w-4 h-4" /> {t}
              </li>
            )
          )}
        </ul>
        <button className="w-full py-3 bg-white text-black font-black rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000]">
          Get Pro
        </button>
      </div>
    </div>
  </div>
);
