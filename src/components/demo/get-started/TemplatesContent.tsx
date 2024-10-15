import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import CodePreview from '../CodePriview';


// e-commerce
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ChevronLeft, ChevronRight, Plus, Minus, Trash2, CheckCircle } from 'lucide-react'


const EcommerceLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="container mx-auto p-4">
        {children}
    </div>
)

const ProductListingPage = () => {
    const [view, setView] = useState('grid')
    const products = [
        { id: 1, name: "Modern Desk Lamp", price: 59.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.5 },
        { id: 2, name: "Ergonomic Office Chair", price: 199.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.8 },
        { id: 3, name: "Wireless Bluetooth Earbuds", price: 79.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.2 },
        { id: 4, name: "Smart Home Security Camera", price: 129.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.6 },
        { id: 5, name: "Portable Power Bank", price: 39.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.4 },
        { id: 6, name: "Stainless Steel Water Bottle", price: 24.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.7 },
    ]

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Our Products</h2>
                <div className="flex items-center space-x-4">
                    <Select defaultValue="featured">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex border rounded-md">
                        <Button variant="noShadow" size="icon" onClick={() => setView('grid')} className={view === 'grid' ? 'bg-secondary' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                        </Button>
                        <Button variant="noShadow" size="icon" onClick={() => setView('list')} className={view === 'list' ? 'bg-secondary' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {products.map((product) => (
                    <Card key={product.id} className={view === 'list' ? 'flex flex-row' : ''}>
                        <img src={product.image} alt={product.name} className={`object-cover ${view === 'grid' ? 'h-48 w-full' : 'h-full w-48'}`} />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                                <Button>Add to Cart</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                <Button variant="neutral" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="neutral">1</Button>
                <Button variant="neutral">2</Button>
                <Button variant="neutral">3</Button>
                <Button variant="neutral" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center items-center ">
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product" className="object-cover rounded-lg" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Modern Desk Lamp</h1>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">(121 reviews)</span>
                    </div>
                    <p className="text-xl font-bold mb-4">$59.99</p>
                    <p className="text-gray-600 mb-6">Illuminate your workspace with our sleek and adjustable Modern Desk Lamp. Perfect for home offices or study areas, this lamp provides ample lighting while adding a touch of contemporary style to your decor.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Label htmlFor="color">Color:</Label>
                        <Select defaultValue="black">
                            <SelectTrigger id="color" className="w-[180px]">
                                <SelectValue placeholder="Select color" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="black">Black</SelectItem>
                                <SelectItem value="white">White</SelectItem>
                                <SelectItem value="silver">Silver</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Label>Quantity:</Label>
                        <div className="flex items-center border rounded-md">
                            <Button variant="noShadow" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center">{quantity}</span>
                            <Button variant="noShadow" size="icon" onClick={() => setQuantity(quantity + 1)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Button className="w-full">Add to Cart</Button>
                    <Button variant="neutral" className="w-full">Add to Wishlist</Button>
                </div>
                <Separator />
                <div className="space-y-4">
                    <h3 className="font-semibold">Product Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>Adjustable arm and head for precise lighting</li>
                        <li>Energy-efficient LED bulb included</li>
                        <li>Touch-sensitive controls with multiple brightness levels</li>
                        <li>USB charging port for convenient device charging</li>
                        <li>Compact base with cable management system</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CartPage = () => {
    const cartItems = [
        { id: 1, name: "Modern Desk Lamp", price: 59.99, quantity: 1, image: "https://picsum.photos/id/1018/600/400" },
        { id: 2, name: "Ergonomic Office Chair", price: 199.99, quantity: 1, image: "https://picsum.photos/id/1018/600/400" },
    ]

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = 10
    const total = subtotal + shipping

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <Card key={item.id}>
                                <CardContent className="flex items-center space-x-4 p-4">
                                    <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="neutral" size="icon">
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span>{item.quantity}</span>
                                            <Button variant="neutral" size="icon">
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <Button variant="noShadow" size="icon" className="text-red-500">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Button className="w-full">Proceed to Checkout</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

const CheckoutPage = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="postalCode">Postal Code</Label>
                                <Input id="postalCode" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select>
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="expirationDate">Expiration Date</Label>
                                <Input id="expirationDate" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Modern Desk Lamp</span>
                                <span>$59.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ergonomic Office Chair</span>
                                <span>$199.99</span>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$259.98</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>$26.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$295.98</span>
                        </div>
                        <Button className="w-full">Place Order</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const OrderConfirmationPage = () => {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-gray-600">Thank you for your purchase. Your order has been received and is being processed.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Order Number:</span>
                        <span className="font-semibold">#12345</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Order Date:</span>
                        <span>May 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-semibold">$295.98</span>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <h3 className="font-semibold">Items Ordered:</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Modern Desk Lamp (1)</li>
                            <li>Ergonomic Office Chair (1)</li>
                        </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <h3 className="font-semibold">Shipping Address:</h3>
                        <p className="text-sm text-gray-600">
                            John Doe<br />
                            123 Main St<br />
                            Anytown, ST 12345<br />
                            United States
                        </p>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-8 space-x-4 ">
                <Button variant="default">Track Order</Button>
                <Button variant="default">Continue Shopping</Button>
            </div>
        </div>
    )
}

const OrderHistoryPage = () => {
    const orders = [
        { id: '12345', date: 'May 15, 2023', total: 295.98, status: 'Delivered' },
        { id: '12344', date: 'April 30, 2023', total: 149.99, status: 'Shipped' },
        { id: '12343', date: 'April 15, 2023', total: 79.99, status: 'Processing' },
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <div className="space-y-4">
                {orders.map((order) => (
                    <Card key={order.id}>
                        <CardHeader>
                            <CardTitle>Order #{order.id}</CardTitle>
                            <CardDescription>Placed on {order.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                                    <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Shipped' ? 'outline' : 'destructive'}>
                                        {order.status}
                                    </Badge>
                                </div>
                                <Button variant="default">View Details</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const SampleComponent = () => {

    const [currentPage, setCurrentPage] = useState('productListing')

    const renderPage = () => {
        switch (currentPage) {
            case 'productListing':
                return <ProductListingPage />
            case 'productDetail':
                return <ProductDetailPage />
            case 'cart':
                return <CartPage />
            case 'checkout':
                return <CheckoutPage />
            case 'orderConfirmation':
                return <OrderConfirmationPage />
            case 'orderHistory':
                return <OrderHistoryPage />
            default:
                return <ProductListingPage />
        }
    }

    return (
        <>

            <EcommerceLayout>
                <Tabs value={currentPage} onValueChange={setCurrentPage} className="w-full mb-8">
                    <TabsList className="grid w-full grid-cols-6">
                        <TabsTrigger value="productListing">Products</TabsTrigger>
                        <TabsTrigger value="productDetail">Details</TabsTrigger>
                        <TabsTrigger value="cart">Cart</TabsTrigger>
                        <TabsTrigger value="checkout">Checkout</TabsTrigger>
                        <TabsTrigger value="orderConfirmation">Confirmation</TabsTrigger>
                        <TabsTrigger value="orderHistory">History</TabsTrigger>
                    </TabsList>
                </Tabs>
                {renderPage()}
            </EcommerceLayout>
        </>
    )
}


export const TemplatesContent = () => {

    const sampleCode = `
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {  Star, ChevronLeft, ChevronRight, Plus, Minus, Trash2, CheckCircle } from 'lucide-react'


const EcommerceLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="container mx-auto p-4">
        {children}
    </div>
)

const ProductListingPage = () => {
    const [view, setView] = useState('grid')
    const products = [
        { id: 1, name: "Modern Desk Lamp", price: 59.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.5 },
        { id: 2, name: "Ergonomic Office Chair", price: 199.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.8 },
        { id: 3, name: "Wireless Bluetooth Earbuds", price: 79.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.2 },
        { id: 4, name: "Smart Home Security Camera", price: 129.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.6 },
        { id: 5, name: "Portable Power Bank", price: 39.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.4 },
        { id: 6, name: "Stainless Steel Water Bottle", price: 24.99, image: "https://picsum.photos/id/1018/600/400", rating: 4.7 },
    ]

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Our Products</h2>
                <div className="flex items-center space-x-4">
                    <Select defaultValue="featured">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex border rounded-md">
                        <Button variant="noShadow" size="icon" onClick={() => setView('grid')} className={view === 'grid' ? 'bg-secondary' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                        </Button>
                        <Button variant="noShadow" size="icon" onClick={() => setView('list')} className={view === 'list' ? 'bg-secondary' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={'grid gap-6 ($){view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} '}>
                {products.map((product) => (
                    <Card key={product.id} className={view === 'list' ? 'flex flex-row' : ''}>
                        <img src={product.image} alt={product.name} className={'object - cover ($){view === 'grid' ? 'h-48 w-full' : 'h-full w-48'} '} />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={'h - 4 w - 4 ($){i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} '} />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg"> ($){product.price.toFixed(2)}</span>
                                <Button>Add to Cart</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                <Button variant="neutral" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="neutral">1</Button>
                <Button variant="neutral">2</Button>
                <Button variant="neutral">3</Button>
                <Button variant="neutral" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center items-center ">
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product" className="object-cover rounded-lg" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                    <img src="https://picsum.photos/id/1018/600/400" alt="Product thumbnail" className="object-cover rounded-lg" />
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Modern Desk Lamp</h1>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">(121 reviews)</span>
                    </div>
                    <p className="text-xl font-bold mb-4">$59.99</p>
                    <p className="text-gray-600 mb-6">Illuminate your workspace with our sleek and adjustable Modern Desk Lamp. Perfect for home offices or study areas, this lamp provides ample lighting while adding a touch of contemporary style to your decor.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Label htmlFor="color">Color:</Label>
                        <Select defaultValue="black">
                            <SelectTrigger id="color" className="w-[180px]">
                                <SelectValue placeholder="Select color" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="black">Black</SelectItem>
                                <SelectItem value="white">White</SelectItem>
                                <SelectItem value="silver">Silver</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Label>Quantity:</Label>
                        <div className="flex items-center border rounded-md">
                            <Button variant="noShadow" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center">{quantity}</span>
                            <Button variant="noShadow" size="icon" onClick={() => setQuantity(quantity + 1)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Button className="w-full">Add to Cart</Button>
                    <Button variant="neutral" className="w-full">Add to Wishlist</Button>
                </div>
                <Separator />
                <div className="space-y-4">
                    <h3 className="font-semibold">Product Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>Adjustable arm and head for precise lighting</li>
                        <li>Energy-efficient LED bulb included</li>
                        <li>Touch-sensitive controls with multiple brightness levels</li>
                        <li>USB charging port for convenient device charging</li>
                        <li>Compact base with cable management system</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CartPage = () => {
    const cartItems = [
        { id: 1, name: "Modern Desk Lamp", price: 59.99, quantity: 1, image: "https://picsum.photos/id/1018/600/400" },
        { id: 2, name: "Ergonomic Office Chair", price: 199.99, quantity: 1, image: "https://picsum.photos/id/1018/600/400" },
    ]

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = 10
    const total = subtotal + shipping

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <Card key={item.id}>
                                <CardContent className="flex items-center space-x-4 p-4">
                                    <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2"> ($){item.price.toFixed(2)}</p>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="neutral" size="icon">
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span>{item.quantity}</span>
                                            <Button variant="neutral" size="icon">
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold"> ($){(item.price * item.quantity).toFixed(2)}</p>
                                        <Button variant="noShadow" size="icon" className="text-red-500">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span> ($){subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span> ($){shipping.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span> ($){total.toFixed(2)}</span>
                            </div>
                            <Button className="w-full">Proceed to Checkout</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

const CheckoutPage = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="postalCode">Postal Code</Label>
                                <Input id="postalCode" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select>
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="expirationDate">Expiration Date</Label>
                                <Input id="expirationDate" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Modern Desk Lamp</span>
                                <span>$59.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ergonomic Office Chair</span>
                                <span>$199.99</span>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$259.98</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>$26.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$295.98</span>
                        </div>
                        <Button className="w-full">Place Order</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const OrderConfirmationPage = () => {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-gray-600">Thank you for your purchase. Your order has been received and is being processed.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Order Number:</span>
                        <span className="font-semibold">#12345</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Order Date:</span>
                        <span>May 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-semibold">$295.98</span>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <h3 className="font-semibold">Items Ordered:</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Modern Desk Lamp (1)</li>
                            <li>Ergonomic Office Chair (1)</li>
                        </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <h3 className="font-semibold">Shipping Address:</h3>
                        <p className="text-sm text-gray-600">
                            John Doe<br />
                            123 Main St<br />
                            Anytown, ST 12345<br />
                            United States
                        </p>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-8 space-x-4 ">
                <Button variant="default">Track Order</Button>
                <Button variant="default">Continue Shopping</Button>
            </div>
        </div>
    )
}

const OrderHistoryPage = () => {
    const orders = [
        { id: '12345', date: 'May 15, 2023', total: 295.98, status: 'Delivered' },
        { id: '12344', date: 'April 30, 2023', total: 149.99, status: 'Shipped' },
        { id: '12343', date: 'April 15, 2023', total: 79.99, status: 'Processing' },
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <div className="space-y-4">
                {orders.map((order) => (
                    <Card key={order.id}>
                        <CardHeader>
                            <CardTitle>Order #{order.id}</CardTitle>
                            <CardDescription>Placed on {order.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold"> ($){order.total.toFixed(2)}</p>
                                    <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Shipped' ? 'outline' : 'destructive'}>
                                        {order.status}
                                    </Badge>
                                </div>
                                <Button variant="default">View Details</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

const SampleComponent = () => {

    const [currentPage, setCurrentPage] = useState('productListing')

    const renderPage = () => {
        switch (currentPage) {
            case 'productListing':
                return <ProductListingPage />
            case 'productDetail':
                return <ProductDetailPage />
            case 'cart':
                return <CartPage />
            case 'checkout':
                return <CheckoutPage />
            case 'orderConfirmation':
                return <OrderConfirmationPage />
            case 'orderHistory':
                return <OrderHistoryPage />
            default:
                return <ProductListingPage />
        }
    }

    return (
        <>

            <EcommerceLayout>
                <Tabs value={currentPage} onValueChange={setCurrentPage} className="w-full mb-8">
                    <TabsList className="grid w-full grid-cols-6">
                        <TabsTrigger value="productListing">Products</TabsTrigger>
                        <TabsTrigger value="productDetail">Details</TabsTrigger>
                        <TabsTrigger value="cart">Cart</TabsTrigger>
                        <TabsTrigger value="checkout">Checkout</TabsTrigger>
                        <TabsTrigger value="orderConfirmation">Confirmation</TabsTrigger>
                        <TabsTrigger value="orderHistory">History</TabsTrigger>
                    </TabsList>
                </Tabs>
                {renderPage()}
            </EcommerceLayout>
        </>
    )
}
`.trim()

    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-0 md:px-3 '>
            <div className='p-6 text-start w-full'>
                <h2 className="text-2xl font-bold ">Templates</h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    Discover our expertly crafted templates, designed to accelerate your development workflow. From sleek landing pages to full-fledged applications, MoupUI provides a comprehensive set of pre-built solutions tailored for modern web development. These templates not only save you time but also help you achieve stunning, professional results effortlessly.
                </p>
            </div>

            <div className="flex px-6 py-2 mb-10 justify-between w-full">
                <Button className='px-2 md:px-4 py-2 text-md'>
                    <FaArrowLeft className='m-2 w-4 h-4' />
                    <a href="/docs/installation" className="hover:underline">
                        Installation
                    </a>
                </Button>
                <Button className='px-2 md:px-4 py-2 text-md'>
                    <a href="/components/all-components" className="hover:underline">
                        Components
                    </a>
                    <FaArrowRight className='m-2 w-4 h-4' />
                </Button>
            </div>

            <div className='flex items-center justify-center w-full pt-5 px-5 '>
                <CodePreview
                    title="E-Commerce"
                    code={sampleCode}
                    language="javascript"
                    nameFile='e-commerce.tsx'
                    preview={<SampleComponent />}
                />
            </div>
        </div>

    )
}
