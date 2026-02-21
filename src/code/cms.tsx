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
import { FileText, Settings, Eye, Edit, Trash2, Plus, Calendar } from "lucide-react";

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
      <div className="flex justify-between items-center bg-white p-4 border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
        <h2 className="text-xl font-black">All Posts</h2>
        <Button className="gap-2 bg-black text-[#ffe135] shadow-[2px_2px_0_0_#000] border-2 border-black hover:bg-zinc-800">
          <Plus size={16} /> New Post
        </Button>
      </div>

      <div className="border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0_0_#000] bg-white">
        <Table>
          <TableHeader className="bg-zinc-50 border-b-2 border-black">
            <TableRow>
              <TableHead className="font-bold text-black">Title</TableHead>
              <TableHead className="font-bold text-black">Status</TableHead>
              <TableHead className="font-bold text-black">Author</TableHead>
              <TableHead className="font-bold text-black">Date</TableHead>
              <TableHead className="text-right font-bold text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors"
              >
                <TableCell className="font-bold flex items-center gap-2">
                  <FileText size={14} className="text-muted-foreground" />
                  {post.title}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`border-2 border-black shadow-[2px_2px_0_0_#000] ${
                      post.status === "Published"
                        ? "bg-green-400"
                        : post.status === "Draft"
                          ? "bg-zinc-400"
                          : "bg-[#ffe135]"
                    } text-black font-black text-[10px] uppercase`}
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-medium">{post.author}</TableCell>
                <TableCell className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 border-2 border-black shadow-[2px_2px_0_0_#000]"
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 border-2 border-black shadow-[2px_2px_0_0_#000]"
                    >
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
    <div className="lg:col-span-3 border-2 border-black rounded-xl p-6 bg-white shadow-[4px_4px_0_0_#000] space-y-4">
      <Input
        placeholder="Enter post title..."
        className="text-xl font-black h-12 border-2 border-black shadow-[2px_2px_0_0_#000]"
      />
      <div className="flex-1 bg-zinc-50 border-2 border-black rounded-lg min-h-[300px] p-4 text-muted-foreground font-mono text-sm">
        Start writing your story here...
      </div>
    </div>

    {/* Sidebar Settings */}
    <div className="lg:col-span-1 border-2 border-black rounded-xl p-5 bg-white shadow-[4px_4px_0_0_#000] space-y-6 overflow-y-auto">
      <div className="space-y-4">
        <h4 className="font-black text-sm uppercase tracking-widest border-b-2 border-black pb-2 flex items-center gap-2">
          <Settings size={14} /> Settings
        </h4>
        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase">Visibility</label>
          <Tabs defaultValue="public" className="w-full">
            <TabsList className="grid grid-cols-2 border-2 border-black bg-zinc-100 h-10">
              <TabsTrigger value="public" className="text-[10px] font-bold">
                Public
              </TabsTrigger>
              <TabsTrigger value="private" className="text-[10px] font-bold">
                Private
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-1.5 pt-4">
          <label className="text-xs font-black uppercase">Publish Target</label>
          <Input
            placeholder="Schedule date..."
            className="h-10 border-2 border-black shadow-[1px_1px_0_0_#000]"
          />
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <Button className="w-full bg-black text-white font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
          Publish Post
        </Button>
        <Button
          variant="outline"
          className="w-full border-2 border-black font-bold shadow-[2px_2px_0_0_#000]"
        >
          Save as Draft
        </Button>
        <Button variant="ghost" className="w-full text-red-500 font-bold hover:bg-red-50">
          <Trash2 size={16} className="mr-2" /> Delete
        </Button>
      </div>
    </div>
  </div>
);
