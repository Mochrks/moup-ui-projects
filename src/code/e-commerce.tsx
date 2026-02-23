import React, { useState } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Label } from "@/components/ui-neobrutalism/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-neobrutalism/select";
import { Badge } from "@/components/ui-neobrutalism/badge";
import { Separator } from "@/components/ui-neobrutalism/separator";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  CheckCircle,
  ShoppingBag,
  Heart,
  Eye,
} from "lucide-react";

export const EcommerceLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto p-4">{children}</div>
);

export const ProductListingPage = () => {
  const [view, setView] = useState("grid");
  const products = [
    {
      id: 1,
      name: "BRUTAL LAMP v.1",
      price: 59.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.5,
      color: "bg-[#ffe135]",
    },
    {
      id: 2,
      name: "NEO CHAIR PRO",
      price: 199.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.8,
      color: "bg-indigo-400",
    },
    {
      id: 3,
      name: "TECH BUDS X",
      price: 79.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.2,
      color: "bg-pink-400",
    },
    {
      id: 4,
      name: "SECURE CAM 360",
      price: 129.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.6,
      color: "bg-green-400",
    },
    {
      id: 5,
      name: "POWER TANK 20K",
      price: 39.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.4,
      color: "bg-orange-400",
    },
    {
      id: 6,
      name: "TITAIN FLASK",
      price: 24.99,
      image: "https://picsum.photos/id/1018/600/400",
      rating: 4.7,
      color: "bg-purple-400",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end bg-black p-8 border-4 border-black shadow-[8px_8px_0_0_#ffe135] rounded-3xl gap-6">
        <div>
          <Badge className="mb-4 bg-[#ffe135] text-black border-2 border-black font-black uppercase italic shadow-[2px_2px_0_0_#fff]">
            Summer Collection
          </Badge>
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
            Market / Shop
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <Select defaultValue="featured">
            <SelectTrigger className="w-full sm:w-[200px] h-14 border-4 border-black bg-white font-black uppercase italic shadow-[4px_4px_0_0_#fff]">
              <SelectValue placeholder="SORT BY" />
            </SelectTrigger>
            <SelectContent className="border-4 border-black">
              <SelectItem value="featured" className="font-black uppercase">
                Featured
              </SelectItem>
              <SelectItem value="price-low-high" className="font-black uppercase">
                Price: Low-High
              </SelectItem>
              <SelectItem value="price-high-low" className="font-black uppercase">
                Price: High-Low
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="flex bg-white border-4 border-black shadow-[4px_4px_0_0_#fff] overflow-hidden">
            <Button
              variant="neutral"
              size="icon"
              onClick={() => setView("grid")}
              className={`h-12 w-12 rounded-none border-none ${view === "grid" ? "bg-[#ffe135]" : "bg-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </Button>
            <Button
              variant="neutral"
              size="icon"
              onClick={() => setView("list")}
              className={`h-12 w-12 rounded-none border-l-4 border-black ${view === "list" ? "bg-[#ffe135]" : "bg-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-10 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            className={`group border-4 border-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-3xl overflow-hidden bg-white ${view === "list" ? "flex flex-col md:flex-row" : ""}`}
          >
            <div
              className={`relative overflow-hidden ${view === "grid" ? "h-64 border-b-4 border-black" : "h-auto w-full md:w-80 md:border-r-4 border-black"}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  className={`${product.color} text-black border-2 border-black font-black uppercase text-[10px] shadow-[2px_2px_0_0_#000]`}
                >
                  HOT ITEM
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-2">
                <Button
                  variant="neutral"
                  size="icon"
                  className="bg-white border-2 border-black shadow-[2px_2px_0_0_#000]"
                >
                  <Heart size={18} />
                </Button>
                <Button
                  variant="neutral"
                  size="icon"
                  className="bg-white border-2 border-black shadow-[2px_2px_0_0_#000]"
                >
                  <Eye size={18} />
                </Button>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow bg-white">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-2xl uppercase italic tracking-tighter leading-none">
                    {product.name}
                  </h3>
                  <div className="flex items-center bg-black text-[#ffe135] px-2 py-1 border-2 border-black rounded shadow-[2px_2px_0_0_#fff]">
                    <Star className="h-3 w-3 fill-current mr-1" />
                    <span className="text-[10px] font-black">{product.rating}</span>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-black/50 uppercase tracking-widest mb-4">
                  Industrial Grade / V.01-B
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="font-black text-3xl font-mono">${product.price.toFixed(2)}</span>
                <Button className="h-12 px-6 bg-[#ffe135] text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none font-black uppercase italic transition-all">
                  ADD TO CART
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-3">
        <Button
          variant="neutral"
          size="icon"
          className="border-2 border-black h-12 w-12 bg-white shadow-[4px_4px_0_0_#000]"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="neutral"
          className="border-2 border-black h-12 w-12 bg-[#ffe135] shadow-[4px_4px_0_0_#000] font-black"
        >
          1
        </Button>
        <Button
          variant="neutral"
          className="border-2 border-black h-12 w-12 bg-white shadow-[4px_4px_0_0_#000] font-black transition-all hover:bg-zinc-50"
        >
          2
        </Button>
        <Button
          variant="neutral"
          className="border-2 border-black h-12 w-12 bg-white shadow-[4px_4px_0_0_#000] font-black transition-all hover:bg-zinc-50"
        >
          3
        </Button>
        <Button
          variant="neutral"
          size="icon"
          className="border-2 border-black h-12 w-12 bg-white shadow-[4px_4px_0_0_#000]"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid md:grid-cols-2 gap-12 bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0_0_#000]">
      <div className="space-y-6">
        <div className="relative aspect-square border-4 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0_0_#ffe135]">
          <img
            src="https://picsum.photos/id/1018/800/800"
            alt="Product"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-6 left-6 rotate-[-15deg] bg-black text-white border-2 border-white px-4 py-2 font-black italic uppercase shadow-[4px_4px_0_0_#ffe135]">
            NEW SEASON
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0_0_#000] hover:translate-y-[-2px] transition-transform cursor-pointer"
            >
              <img
                src="https://picsum.photos/id/1018/200/200"
                alt="thumbnail"
                className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8 flex flex-col justify-center">
        <div>
          <Badge className="bg-indigo-400 text-black border-2 border-black font-black uppercase mb-4 italic">
            PREMIUM_ACCESSORY
          </Badge>
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
            BRUTAL LAMP v.1
          </h1>
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex bg-black p-1 px-2 border-2 border-black rounded">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#ffe135] fill-current" />
              ))}
            </div>
            <span className="text-xs font-black uppercase underline decoration-2 underline-offset-4 tracking-widest">
              (121 CUSTOMER_REVIEWS)
            </span>
          </div>
          <p className="text-5xl font-black font-mono mb-8">$59.99</p>
          <p className="text-lg font-bold text-gray-700 leading-relaxed border-l-8 border-[#ffe135] pl-6 mb-8 italic">
            Illuminate your workspace with our high-impact, adjustable Industrial Core Lamp.
            Engineered for high-performance output with a neobrutalist structural soul.
          </p>
        </div>

        <div className="space-y-6 bg-zinc-50 p-6 border-4 border-black rounded-2xl shadow-[4px_4px_0_0_#000]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Label htmlFor="color" className="font-black uppercase tracking-widest text-xs">
              MODULE_COLOR:
            </Label>
            <Select defaultValue="black">
              <SelectTrigger
                id="color"
                className="w-full sm:w-[200px] border-2 border-black bg-white font-black uppercase h-12 shadow-[2px_2px_0_0_#000]"
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black">
                <SelectItem value="black" className="font-black">
                  ONX_BLACK
                </SelectItem>
                <SelectItem value="white" className="font-black">
                  STARK_WHITE
                </SelectItem>
                <SelectItem value="silver" className="font-black">
                  PRO_SILVER
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Label className="font-black uppercase tracking-widest text-xs">UNIT_QUANTITY:</Label>
            <div className="flex items-center border-4 border-black bg-white rounded-xl shadow-[2px_2px_0_0_#000] overflow-hidden">
              <Button
                variant="neutral"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10 rounded-none border-none bg-zinc-100 hover:bg-[#ffe135]"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-14 text-center font-black text-lg">{quantity}</span>
              <Button
                variant="neutral"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10 rounded-none border-none bg-zinc-100 hover:bg-[#ffe135]"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button className="flex-1 h-16 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#34A853] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase italic text-xl flex gap-2">
            <ShoppingBag size={24} /> ADD TO CART
          </Button>
          <Button
            variant="neutral"
            className="h-16 px-8 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none font-black text-xl italic uppercase"
          >
            <Heart size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const CartPage = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "BRUTAL LAMP v.1",
      price: 59.99,
      quantity: 1,
      image: "https://picsum.photos/id/1018/200/200",
      color: "bg-[#ffe135]",
    },
    {
      id: 2,
      name: "NEO CHAIR PRO",
      price: 199.99,
      quantity: 1,
      image: "https://picsum.photos/id/1018/200/200",
      color: "bg-indigo-400",
    },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="space-y-8">
      <div className="bg-[#ffe135] border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0_0_#000]">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">
          SHIPPING CART
        </h2>
        <p className="font-bold uppercase text-xs opacity-60">
          You have {cartItems.length} items manifest in system
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="border-4 border-black shadow-[6px_6px_0_0_#000] rounded-2xl overflow-hidden bg-white hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
                <div
                  className={`h-24 w-24 border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0_0_#000] ${item.color} p-1`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-lg border border-black"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-black uppercase italic tracking-tight leading-none mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm font-black font-mono mb-4 text-black/50">
                    ${item.price.toFixed(2)} / UNIT
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <div className="flex items-center border-2 border-black bg-white rounded-lg shadow-[2px_2px_0_0_#000] h-9">
                      <Button
                        variant="neutral"
                        size="icon"
                        className="h-full w-8 border-none rounded-none bg-zinc-50 hover:bg-[#ffe135]"
                      >
                        <Minus size={12} />
                      </Button>
                      <span className="w-10 text-center font-black text-sm">{item.quantity}</span>
                      <Button
                        variant="neutral"
                        size="icon"
                        className="h-full w-8 border-none rounded-none bg-zinc-50 hover:bg-[#ffe135]"
                      >
                        <Plus size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-end justify-between self-stretch">
                  <p className="text-2xl font-black font-mono">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="neutral"
                    size="icon"
                    className="bg-red-200 text-red-600 border-2 border-black shadow-[2px_2px_0_0_#000] hover:bg-red-400 hover:text-white transition-colors h-10 w-10"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-3xl overflow-hidden bg-white sticky top-20">
            <CardHeader className="bg-zinc-100 border-b-4 border-black p-6">
              <CardTitle className="font-black uppercase italic tracking-tighter text-2xl">
                Manifest Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between font-bold text-sm uppercase opacity-60">
                <span>Core Subtotal</span>
                <span className="font-mono text-black font-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-sm uppercase opacity-60">
                <span>Standard Delivery</span>
                <span className="font-mono text-black font-black">${shipping.toFixed(2)}</span>
              </div>
              <Separator className="h-1 bg-black/10" />
              <div className="flex justify-between items-end">
                <span className="font-black text-xl uppercase italic tracking-tighter">
                  Total Payable
                </span>
                <span className="font-black text-4xl font-mono underline decoration-4 decoration-[#ffe135] underline-offset-4">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button className="w-full h-16 bg-black text-white hover:bg-zinc-800 border-2 border-black shadow-[6px_6px_0_0_#ffe135] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black text-xl uppercase italic mt-6 rounded-2xl">
                AUTH & CHECKOUT →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const CheckoutPage = () => {
  return (
    <div className="space-y-10">
      <div className="bg-indigo-400 border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0_0_#000] flex justify-between items-center text-white">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
          Checkout Secure
        </h2>
        <Badge className="bg-black text-white border-2 border-white font-black italic">
          ENCRYPTED_SSL
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Card className="border-4 border-black rounded-3xl shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
            <CardHeader className="bg-zinc-50 border-b-4 border-black p-6">
              <CardTitle className="font-black text-xl uppercase italic">
                1. Shipping Logistics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    First Unit Name
                  </Label>
                  <Input
                    id="firstName"
                    className="h-12 border-2 border-black font-bold uppercase shadow-[2px_2px_0_0_#000]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    Last Unit Name
                  </Label>
                  <Input
                    id="lastName"
                    className="h-12 border-2 border-black font-bold uppercase shadow-[2px_2px_0_0_#000]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="address"
                  className="font-black uppercase text-[10px] tracking-widest pl-2"
                >
                  Grid Location / Address
                </Label>
                <Input
                  id="address"
                  className="h-12 border-2 border-black font-bold uppercase shadow-[2px_2px_0_0_#000]"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    City Node
                  </Label>
                  <Input
                    id="city"
                    className="h-12 border-2 border-black font-bold uppercase shadow-[2px_2px_0_0_#000]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="country"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    Origin Country
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="country"
                      className="h-12 border-2 border-black font-black uppercase italic shadow-[2px_2px_0_0_#000]"
                    >
                      <SelectValue placeholder="Select Node" />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-black">
                      <SelectItem value="us" className="font-black uppercase">
                        United States
                      </SelectItem>
                      <SelectItem value="ca" className="font-black uppercase">
                        Canada
                      </SelectItem>
                      <SelectItem value="uk" className="font-black uppercase">
                        United Kingdom
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black rounded-3xl shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
            <CardHeader className="bg-zinc-50 border-b-4 border-black p-6">
              <CardTitle className="font-black text-xl uppercase italic">
                2. Finance Terminal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="cardNumber"
                  className="font-black uppercase text-[10px] tracking-widest pl-2"
                >
                  System Card Access Number
                </Label>
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-6 bg-zinc-200 border border-black rounded flex items-center justify-center font-black text-[8px] uppercase">
                    VISA
                  </div>
                  <Input
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    className="h-14 border-2 border-black font-mono font-black text-lg shadow-[2px_2px_0_0_#000]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="expirationDate"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    End Date (MM/YY)
                  </Label>
                  <Input
                    id="expirationDate"
                    placeholder="00/00"
                    className="h-12 border-2 border-black font-mono font-black shadow-[2px_2px_0_0_#000]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="cvv"
                    className="font-black uppercase text-[10px] tracking-widest pl-2"
                  >
                    Master Key (CVV)
                  </Label>
                  <Input
                    id="cvv"
                    placeholder="000"
                    className="h-12 border-2 border-black font-mono font-black shadow-[2px_2px_0_0_#000]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-4 border-black shadow-[10px_10px_0_0_#000] rounded-3xl overflow-hidden bg-[#ffe135] flex flex-col sticky top-20">
            <CardHeader className="bg-black text-white p-6">
              <CardTitle className="font-black uppercase italic tracking-tighter text-2xl">
                Secure Order Log
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-black uppercase">
                  <span>BRUTAL LAMP v.1</span>
                  <span className="font-mono">$59.99</span>
                </div>
                <div className="flex justify-between items-center text-sm font-black uppercase">
                  <span>NEO CHAIR PRO</span>
                  <span className="font-mono">$199.99</span>
                </div>
              </div>
              <Separator className="h-1 bg-black/20" />
              <div className="space-y-3 font-bold uppercase text-[10px]">
                <div className="flex justify-between">
                  <span>Subtotal Data</span>
                  <span>$259.98</span>
                </div>
                <div className="flex justify-between">
                  <span>Logistics Tax</span>
                  <span>$10.00</span>
                </div>
              </div>
              <div className="pt-6 border-t-4 border-black flex justify-between items-center">
                <span className="font-black text-2xl uppercase italic tracking-tighter">
                  FINAL TOTAL
                </span>
                <span className="font-black text-4xl font-mono underline decoration-4 decoration-black underline-offset-4 leading-none">
                  $269.98
                </span>
              </div>
              <Button className="w-full h-16 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black text-xl uppercase italic mt-8 rounded-2xl">
                AUTHORIZE PAYMENT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const OrderConfirmationPage = () => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-10">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-green-400 border-4 border-black rounded-full rotate-6 -z-10" />
        <div className="bg-white border-4 border-black p-12 rounded-full shadow-[8px_8px_0_0_#000]">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
      </div>

      <div>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">
          ORDER_CONFIRMED!
        </h1>
        <p className="text-xl font-bold uppercase tracking-widest text-black/50">
          Transmission received / items in transit
        </p>
      </div>

      <Card className="border-4 border-black shadow-[12px_12px_0_0_#ffe135] bg-white rounded-3xl overflow-hidden text-left">
        <CardHeader className="bg-black text-white p-8">
          <CardTitle className="font-black uppercase italic tracking-tighter text-3xl">
            System Receipt #12345
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase text-black/40 tracking-widest">
                TRANSACTION_DATE
              </p>
              <p className="text-lg font-black uppercase italic">MAY_15 / 2024</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase text-black/40 tracking-widest">
                TRANSACTION_TOTAL
              </p>
              <p className="text-3xl font-black font-mono underline decoration-4 decoration-[#ffe135] underline-offset-4 italic">
                $295.98
              </p>
            </div>
          </div>

          <Separator className="h-1 bg-black/10" />

          <div className="space-y-4">
            <h3 className="font-black uppercase italic tracking-widest text-sm border-l-8 border-black pl-4">
              UNITS ORDERED:
            </h3>
            <div className="bg-zinc-50 border-2 border-black rounded-xl p-6 font-black uppercase italic space-y-2">
              <div className="flex justify-between">
                <span>+ BRUTAL LAMP v.1</span>
                <span>[1 UNIT]</span>
              </div>
              <div className="flex justify-between">
                <span>+ NEO CHAIR PRO</span>
                <span>[1 UNIT]</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 text-center sm:text-left">
            <h3 className="font-black uppercase italic tracking-widest text-sm border-l-8 border-black pl-4">
              DELIVERY_NODE:
            </h3>
            <p className="font-bold text-gray-600 bg-zinc-100 p-6 border-2 border-dashed border-black rounded-xl italic">
              JOHN DOE / 123 MAIN ST / ANYTOWN, ST 12345 / UNITED STATES
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap justify-center gap-6 pt-4">
        <Button className="h-16 px-10 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#ffe135] font-black uppercase italic text-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          TRACK PACKAGE
        </Button>
        <Button
          variant="neutral"
          className="h-16 px-10 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] font-black uppercase italic text-lg hover:bg-zinc-50"
        >
          BACK TO STORE
        </Button>
      </div>
    </div>
  );
};

export const OrderHistoryPage = () => {
  const orders = [
    {
      id: "12345",
      date: "May 15, 2023",
      total: 295.98,
      status: "Delivered",
      color: "bg-green-400",
    },
    {
      id: "12344",
      date: "April 30, 2023",
      total: 149.99,
      status: "Shipped",
      color: "bg-indigo-400",
    },
    { id: "12343", date: "April 15, 2023", total: 79.99, status: "Review", color: "bg-yellow-400" },
  ];

  return (
    <div className="space-y-10">
      <div className="bg-pink-400 border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0_0_#000]">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none text-white">
          Archives / History
        </h2>
        <p className="font-bold uppercase text-xs text-white/80 mt-2">
          Accessing past transaction nodes...
        </p>
      </div>

      <div className="space-y-8">
        {orders.map((order) => (
          <Card
            key={order.id}
            className="group border-4 border-black shadow-[6px_6px_0_0_#000] rounded-3xl overflow-hidden bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <CardHeader className="bg-zinc-50 border-b-2 border-black flex flex-row items-center justify-between p-6">
              <div>
                <CardTitle className="font-black uppercase italic text-2xl leading-none">
                  Order Node #{order.id}
                </CardTitle>
                <CardDescription className="font-bold uppercase text-[10px] tracking-widest mt-1">
                  LOG_DATE: {order.date}
                </CardDescription>
              </div>
              <div
                className={`px-4 py-1.5 border-4 border-black ${order.color} font-black uppercase italic text-xs shadow-[4px_4px_0_0_#000]`}
              >
                {order.status}
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase opacity-40 mb-1">
                    TOTAL_TRANSACTION_VALUE
                  </p>
                  <p className="text-4xl font-black font-mono underline decoration-4 decoration-pink-400 underline-offset-4 tracking-tighter italic">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                  <Button
                    variant="neutral"
                    className="flex-1 sm:flex-none h-12 px-6 border-2 border-black bg-[#ffe135] font-black uppercase italic text-sm shadow-[4px_4px_0_0_#000] hover:shadow-none transition-all"
                  >
                    VIEW_MANIFEST
                  </Button>
                  <Button
                    variant="neutral"
                    className="flex-1 sm:flex-none h-12 px-6 border-2 border-black bg-white font-black uppercase italic text-sm shadow-[4px_4px_0_0_#000] hover:shadow-none transition-all"
                  >
                    INVOICE
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
