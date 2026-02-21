export const sampleCodeECommerce = `
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Plus, Minus, Trash2 } from 'lucide-react'

export function ProductListing() {
    const products = [
        { id: 1, name: "Modern Desk Lamp", price: 59.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.5 },
        { id: 2, name: "Ergonomic Chair", price: 199.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.8 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
                <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden border shadow-sm group">
                        <div className="aspect-[4/3] bg-zinc-100 relative">
                            <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                            <Badge className="absolute top-3 left-3" variant="secondary">New</Badge>
                        </div>
                        <CardContent className="p-4 flex flex-col h-full bg-white">
                            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                            <div className="flex items-center mb-4">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="ml-1.5 text-sm text-muted-foreground">{product.rating}</span>
                            </div>
                            <div className="flex justify-between items-center mt-auto pt-4 border-t">
                                <span className="font-bold text-xl">$ {product.price}</span>
                                <Button size="sm">Add to Cart</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
`.trim();

export const sampleCodeECommerceNext = '"use client"\n\n' + sampleCodeECommerce;

export const sampleCodeECommerceHtml = `<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div class="border rounded-lg shadow-sm bg-white overflow-hidden">
    <div class="aspect-video bg-zinc-100"></div>
    <div class="p-4 border-t">
      <h3 class="font-semibold text-lg mb-1">Product Name</h3>
      <div class="flex justify-between items-center mt-4">
        <span class="font-bold text-xl">$99.99</span>
        <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add to Cart</button>
      </div>
    </div>
  </div>
</div>`;
