import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Badge } from "@/components/ui-shadcn/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-shadcn/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs";
import {
  FileText,
  Settings,
  Eye,
  Edit,
  Trash2,
  Plus,
  Calendar,
  BarChart3,
  Users,
  MessageSquare,
  Image as ImageIcon,
  Search,
  Filter,
} from "lucide-react";

export const CMSPostList = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with MoupUI",
      status: "Published",
      author: "Alex J.",
      date: "2024-02-21",
    },
    {
      id: 2,
      title: "Modern Web Aesthetics",
      status: "Draft",
      author: "Alex J.",
      date: "2024-02-20",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      status: "Review",
      author: "Sarah K.",
      date: "2024-02-18",
    },
    {
      id: 4,
      title: "The Neobrutalist Way",
      status: "Published",
      author: "Mike T.",
      date: "2024-02-15",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header bar - tetap dibuat bersih */}
      <div className="flex justify-between items-center bg-white p-4 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight">All Posts</h2>
        <Button className="gap-2">
          <Plus size={16} /> New Post
        </Button>
      </div>

      {/* Table - Polos bawaan Shadcn UI */}
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <FileText size={14} className="text-muted-foreground" />
                  {post.title}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      post.status === "Published"
                        ? "default"
                        : post.status === "Draft"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell className="text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit size={14} />
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
  <div className="grid lg:grid-cols-4 gap-6 h-[500px]">
    {/* Main Editor */}
    <div className="lg:col-span-3 border rounded-xl p-6 bg-white shadow-sm space-y-4">
      <Input
        placeholder="Enter post title..."
        className="text-xl font-semibold h-12 border-none px-0 focus-visible:ring-0 shadow-none"
      />
      <div className="flex-1 bg-zinc-50 border rounded-lg min-h-[350px] p-4 text-muted-foreground text-sm">
        Short intro about your article...
      </div>
    </div>

    {/* Sidebar Settings */}
    <div className="lg:col-span-1 border rounded-xl p-5 bg-white shadow-sm space-y-6 overflow-y-auto">
      <div className="space-y-4">
        <h4 className="font-semibold text-sm border-b pb-2 flex items-center gap-2">
          <Settings size={14} /> Post Settings
        </h4>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase">Visibility</label>
          <Tabs defaultValue="public" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="public">Public</TabsTrigger>
              <TabsTrigger value="private">Private</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-1.5 pt-2">
          <label className="text-xs font-medium text-muted-foreground uppercase">
            Publish Date
          </label>
          <Input placeholder="Status..." className="h-9" />
        </div>
      </div>

      <div className="pt-4 space-y-2">
        <Button className="w-full">Publish</Button>
        <Button variant="outline" className="w-full">
          Save Draft
        </Button>
        <Button variant="ghost" className="w-full text-destructive hover:text-destructive">
          <Trash2 size={16} className="mr-2" /> Delete
        </Button>
      </div>
    </div>
  </div>
);

export const CMSSiteStats = () => {
  const stats = [
    {
      label: "Total Posts",
      value: "124",
      icon: <FileText size={20} />,
      color: "text-blue-500 bg-blue-50",
    },
    {
      label: "Active Users",
      value: "12k",
      icon: <Users size={20} />,
      color: "text-green-500 bg-green-50",
    },
    {
      label: "Comments",
      value: "856",
      icon: <MessageSquare size={20} />,
      color: "text-yellow-500 bg-yellow-50",
    },
    {
      label: "Growth",
      value: "+12%",
      icon: <BarChart3 size={20} />,
      color: "text-purple-500 bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((stat, i) => (
        <div key={i} className="p-5 border rounded-xl bg-white shadow-sm flex items-center gap-4">
          <div className={`${stat.color} p-3 rounded-lg`}>{stat.icon}</div>
          <div>
            <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CMSMediaGrid = () => {
  const files = [
    { name: "hero-bg.jpg", size: "1.2 MB" },
    { name: "logo-main.svg", size: "45 KB" },
    { name: "article-1.png", size: "850 KB" },
    { name: "footer-map.png", size: "2.1 MB" },
    { name: "user-avatar.webp", size: "12 KB" },
    { name: "banner-ad.gif", size: "3.4 MB" },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white p-4 border rounded-xl shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={16}
          />
          <Input
            placeholder="Search media..."
            className="pl-10 h-10 border-none bg-zinc-50 focus-visible:ring-1"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter size={14} className="mr-2" /> Filter
          </Button>
          <Button size="sm">Upload</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {files.map((file, i) => (
          <div
            key={i}
            className="group border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="aspect-square bg-zinc-50 flex items-center justify-center relative">
              <ImageIcon size={32} className="text-zinc-300" />
            </div>
            <div className="p-2 border-t">
              <p className="text-[10px] font-medium truncate">{file.name}</p>
              <p className="text-[9px] text-muted-foreground">{file.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
