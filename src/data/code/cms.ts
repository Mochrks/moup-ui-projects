export const sampleCodeCMS = `
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CMSPostList() {
  const posts = [
    { id: 1, title: "Getting Started with MoupUI", status: "Published" },
    { id: 2, title: "Modern Web Aesthetics", status: "Draft" },
  ];

  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>
                <Badge variant={post.status === 'Published' ? 'default' : 'secondary'}>
                  {post.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
`.trim();

export const sampleCodeCMSStats = `
import { FileText, Users } from "lucide-react"

export function CMSSiteStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="p-5 border rounded-xl bg-white shadow-sm flex items-center gap-4">
        <div className="bg-blue-50 p-3 rounded-lg text-blue-500">
          <FileText size={20} />
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Total Posts</p>
          <p className="text-2xl font-bold">124</p>
        </div>
      </div>
      {/* ... other stats */}
    </div>
  )
}
`.trim();

export const sampleCodeCMSMedia = `
import { ImageIcon } from "lucide-react"

export function CMSMediaGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="group border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
          <div className="aspect-square bg-zinc-50 flex items-center justify-center">
            <ImageIcon size={32} className="text-zinc-300" />
          </div>
          <div className="p-2 border-t text-[10px] font-medium truncate">
            image-\${i}.jpg
          </div>
        </div>
      ))}
    </div>
  )
}
`.trim();
