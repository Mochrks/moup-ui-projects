import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-neobrutalism/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui-neobrutalism/tabs";
import {
  FileText,
  Settings,
  Eye,
  Edit,
  Trash2,
  Plus,
  BarChart3,
  Users,
  MessageSquare,
  Image as ImageIcon,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export const CMSPostList = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with MoupUI",
      status: "Published",
      author: "Alex J.",
      date: "2024-02-21",
      color: "bg-green-400",
    },
    {
      id: 2,
      title: "Modern Web Aesthetics",
      status: "Draft",
      author: "Alex J.",
      date: "2024-02-20",
      color: "bg-yellow-400",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      status: "Review",
      author: "Sarah K.",
      date: "2024-02-18",
      color: "bg-yellow-400",
    },
    {
      id: 4,
      title: "The Neobrutalist Way",
      status: "Published",
      author: "Mike T.",
      date: "2024-02-15",
      color: "bg-green-400",
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#ffe135] p-6 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-2xl gap-4">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Content Manager</h2>
          <p className="text-xs font-bold uppercase opacity-70">
            Manage your digital assets and articles
          </p>
        </div>
        <Button className="h-12 bg-black text-white border-2 border-black shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase font-black italic">
          <Plus className="mr-2 h-5 w-5" /> Create New Post
        </Button>
      </div>

      <div className="border-4 border-black rounded-2xl bg-white shadow-[8px_8px_0_0_#000] overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-100 border-b-4 border-black">
            <TableRow>
              <TableHead className="w-[400px] font-black text-black uppercase italic">
                Article Title
              </TableHead>
              <TableHead className="font-black text-black uppercase italic">Status</TableHead>
              <TableHead className="font-black text-black uppercase italic">Author</TableHead>
              <TableHead className="font-black text-black uppercase italic">Date</TableHead>
              <TableHead className="text-right font-black text-black uppercase italic">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                className="border-b-2 border-black/5 hover:bg-zinc-50 transition-colors"
              >
                <TableCell className="font-black text-lg py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                      <FileText size={16} />
                    </div>
                    {post.title}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 border-2 border-black ${post.color} shadow-[2px_2px_0_0_#000] rounded-md font-black text-[10px] uppercase`}
                  >
                    {post.status === "Published" && <CheckCircle2 size={12} />}
                    {post.status === "Draft" && <Clock size={12} />}
                    {post.status === "Review" && <AlertCircle size={12} />}
                    {post.status}
                  </div>
                </TableCell>
                <TableCell className="font-bold underline decoration-2 decoration-indigo-400 underline-offset-4">
                  {post.author}
                </TableCell>
                <TableCell className="font-mono text-xs font-black opacity-60">
                  {post.date}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="neutral"
                      size="icon"
                      className="border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all bg-white"
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      variant="neutral"
                      size="icon"
                      className="border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all bg-[#ffe135]"
                    >
                      <Edit size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export const CMSEditorLayout = () => (
  <div className="grid lg:grid-cols-4 gap-8">
    <div className="lg:col-span-3 space-y-6">
      <div className="p-8 border-4 border-black rounded-3xl bg-white shadow-[8px_8px_0_0_#000] space-y-6">
        <Input
          placeholder="ARTICLE TITLE GOES HERE..."
          className="text-4xl font-black h-auto border-none p-0 focus-visible:ring-0 shadow-none uppercase placeholder:opacity-20 italic underline decoration-8 decoration-[#ffe135] underline-offset-4"
        />
        <div className="min-h-[400px] p-6 bg-zinc-50 border-4 border-dashed border-black rounded-2xl font-bold text-zinc-400 italic">
          Start typing your masterpiece...
        </div>
      </div>
    </div>

    <div className="lg:col-span-1 space-y-6">
      <div className="p-6 border-4 border-black rounded-3xl bg-white shadow-[6px_6px_0_0_#ffe135] space-y-6">
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase italic tracking-widest border-b-4 border-black pb-2 flex items-center gap-2">
            <Settings size={18} /> CONFIGURATION
          </h4>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40">
              Visibility
            </label>
            <Tabs defaultValue="public" className="w-full">
              <TabsList className="grid grid-cols-2 p-1 bg-zinc-100 border-2 border-black h-12">
                <TabsTrigger
                  value="public"
                  className="data-[state=active]:bg-black data-[state=active]:text-white font-black uppercase text-xs transition-all"
                >
                  Public
                </TabsTrigger>
                <TabsTrigger
                  value="private"
                  className="data-[state=active]:bg-black data-[state=active]:text-white font-black uppercase text-xs transition-all"
                >
                  Private
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="space-y-2 pt-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40">
              Schedule Date
            </label>
            <Input
              type="date"
              className="border-2 border-black font-black uppercase shadow-[2px_2px_0_0_#000] h-11"
            />
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <Button className="w-full h-14 bg-[#34A853] text-black border-4 border-black shadow-[4px_4px_0_0_#000] font-black uppercase italic hover:bg-green-500 transition-all rounded-xl">
            Launch Article
          </Button>
          <Button
            variant="neutral"
            className="w-full h-12 border-2 border-black bg-white font-black uppercase tracking-widest hover:bg-zinc-50 rounded-xl"
          >
            Save Draft
          </Button>
          <Button
            variant="neutral"
            className="w-full bg-red-100 text-red-600 border-2 border-black font-black uppercase text-[10px] hover:bg-red-200"
          >
            <Trash2 size={14} className="mr-2" /> Move to Trash
          </Button>
        </div>
      </div>

      <div className="p-6 border-4 border-black rounded-3xl bg-[#ffe135] shadow-[4px_4px_0_0_#000]">
        <h5 className="font-black text-xs uppercase mb-3 italic">SEO Score</h5>
        <div className="h-4 w-full bg-white border-2 border-black rounded-full overflow-hidden shadow-[2px_2px_0_0_#000]">
          <div className="h-full bg-green-500 w-[85%] border-r-2 border-black" />
        </div>
        <p className="mt-2 text-[10px] font-bold uppercase italic">85/100 - Good to go!</p>
      </div>
    </div>
  </div>
);

export const CMSSiteStats = () => {
  const stats = [
    {
      label: "Total Posts",
      value: "124",
      icon: <FileText size={24} />,
      color: "bg-blue-400",
      shadow: "shadow-blue-900",
    },
    {
      label: "Active Users",
      value: "12k",
      icon: <Users size={24} />,
      color: "bg-green-400",
      shadow: "shadow-green-900",
    },
    {
      label: "Comments",
      value: "856",
      icon: <MessageSquare size={24} />,
      color: "bg-yellow-400",
      shadow: "shadow-yellow-900",
    },
    {
      label: "Growth",
      value: "+12%",
      icon: <BarChart3 size={24} />,
      color: "bg-purple-400",
      shadow: "shadow-purple-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`p-6 border-4 border-black rounded-3xl ${stat.color} shadow-[8px_8px_0_0_#000] flex flex-col items-start gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair group`}
        >
          <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_#000] rotate-3 group-hover:rotate-0 transition-transform">
            {stat.icon}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">
              {stat.label}
            </p>
            <p className="text-4xl font-black italic tracking-tighter">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CMSMediaGrid = () => {
  const files = [
    { name: "hero-bg.jpg", size: "1.2 MB", color: "bg-pink-300" },
    { name: "logo-main.svg", size: "45 KB", color: "bg-indigo-300" },
    { name: "article-1.png", size: "850 KB", color: "bg-green-300" },
    { name: "footer-map.png", size: "2.1 MB", color: "bg-yellow-300" },
    { name: "user-avatar.webp", size: "12 KB", color: "bg-yellow-300" },
    { name: "banner-ad.gif", size: "3.4 MB", color: "bg-purple-300" },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row justify-between gap-6 bg-white p-6 border-4 border-black rounded-3xl shadow-[6px_6px_0_0_#000]">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
          <Input
            placeholder="FIND YOUR ASSETS..."
            className="pl-12 h-12 border-2 border-black bg-zinc-50 font-black uppercase placeholder:opacity-30 focus-visible:ring-0 shadow-[2px_2px_0_0_#000]"
          />
        </div>
        <div className="flex gap-3">
          <Button
            variant="neutral"
            className="h-12 px-6 border-2 border-black shadow-[4px_4px_0_0_#000] font-black uppercase italic"
          >
            <Filter size={16} className="mr-2" /> Filter
          </Button>
          <Button className="h-12 px-8 bg-black text-white font-black uppercase italic border-2 border-black shadow-[4px_4px_0_0_#ffe135]">
            Upload
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {files.map((file, i) => (
          <div
            key={i}
            className="group border-4 border-black rounded-2xl overflow-hidden bg-white shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
          >
            <div
              className={`aspect-square ${file.color} flex items-center justify-center relative border-b-4 border-black`}
            >
              <ImageIcon
                size={40}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-white border-2 border-black text-[8px] font-black uppercase shadow-[1px_1px_0_0_#000]">
                {file.name.split(".").pop()}
              </div>
            </div>
            <div className="p-3">
              <p className="text-[11px] font-black uppercase truncate italic">{file.name}</p>
              <p className="text-[9px] font-bold opacity-50 uppercase tracking-tighter">
                {file.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
