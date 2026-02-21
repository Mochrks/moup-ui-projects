export const sampleCodeECommerce =
  "import React, { useState } from 'react'\n" +
  'import { Button } from "@/components/ui/button"\n' +
  'import { Input } from "@/components/ui/input"\n' +
  'import { Label } from "@/components/ui/label"\n' +
  'import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"\n' +
  'import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"\n' +
  'import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"\n' +
  'import { Badge } from "@/components/ui/badge"\n' +
  'import { Separator } from "@/components/ui/separator"\n' +
  "import { Star, ChevronLeft, ChevronRight, Plus, Minus, Trash2, CheckCircle } from 'lucide-react'\n\n" +
  "const ProductListingPage = () => {\n" +
  "    const [view, setView] = useState('grid')\n" +
  "    const products = [\n" +
  '        { id: 1, name: "Modern Desk Lamp", price: 59.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.5 },\n' +
  '        { id: 2, name: "Ergonomic Chair", price: 199.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.8 },\n' +
  "    ]\n\n" +
  "    return (\n" +
  '        <div className="text-black">\n' +
  '            <div className="flex justify-between items-center mb-10">\n' +
  '                <h2 className="text-3xl font-black uppercase tracking-tighter">New Arrivals</h2>\n' +
  '                <div className="flex items-center space-x-4">\n' +
  '                    <Select defaultValue="featured">\n' +
  '                        <SelectTrigger className="w-[180px] border-2 border-black font-bold shadow-[2px_2px_0_0_#000]">\n' +
  '                            <SelectValue placeholder="Sort by" />\n' +
  "                        </SelectTrigger>\n" +
  '                        <SelectContent className="border-2 border-black">\n' +
  '                            <SelectItem value="featured">Featured</SelectItem>\n' +
  '                            <SelectItem value="price-low-high">Price: Low to High</SelectItem>\n' +
  "                        </SelectContent>\n" +
  "                    </Select>\n" +
  "                </div>\n" +
  "            </div>\n" +
  "            <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>\n" +
  "                {products.map((product) => (\n" +
  '                    <Card key={product.id} className="border-2 border-black shadow-[6px_6px_0_0_#000] overflow-hidden group hover:translate-y-[-2px] transition-transform">\n' +
  '                        <div className="aspect-[4/3] bg-zinc-100 border-b-2 border-black relative">\n' +
  '                            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />\n' +
  '                            <Badge className="absolute top-4 left-4 bg-[#ffe135] text-black border-2 border-black font-black uppercase shadow-[2px_2px_0_0_#000]">New</Badge>\n' +
  "                        </div>\n" +
  '                        <CardContent className="p-5 flex flex-col justify-between h-full bg-white">\n' +
  "                            <div>\n" +
  '                                <h3 className="font-black text-xl mb-1">{product.name}</h3>\n' +
  '                                <div className="flex items-center mb-4">\n' +
  '                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />\n' +
  '                                    <span className="ml-2 font-bold text-sm">{product.rating}</span>\n' +
  "                                </div>\n" +
  "                            </div>\n" +
  '                            <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-black/5">\n' +
  '                                <span className="font-black text-2xl tracking-tighter">$ {product.price}</span>\n' +
  '                                <Button className="border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none font-black uppercase transition-all">Add</Button>\n' +
  "                            </div>\n" +
  "                        </CardContent>\n" +
  "                    </Card>\n" +
  "                ))}\n" +
  "            </div>\n" +
  "        </div>\n" +
  "    )\n" +
  "}\n";

export const sampleCodeECommerceNext = '"use client"\n\n' + sampleCodeECommerce;

export const sampleCodeECommerceHtml = `<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-mono">
  <div class="border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
    <div class="aspect-video bg-zinc-100 border-b-2 border-black"></div>
    <div class="p-5">
      <h3 class="font-black text-xl mb-2 italic">Product Name</h3>
      <div class="flex justify-between items-center mt-4">
        <span class="font-black text-2xl">$99.99</span>
        <button class="bg-[#ffe135] border-2 border-black px-4 py-2 font-black shadow-[3px_3px_0_0_#000]">ADD</button>
      </div>
    </div>
  </div>
</div>`;
