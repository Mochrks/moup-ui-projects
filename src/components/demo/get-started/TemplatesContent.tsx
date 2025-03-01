import React, { useState } from 'react'

import CodePreview from '../../ui-other/CodePriview';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Button as Button2 } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs"
import { CartPage, CheckoutPage, EcommerceLayout, OrderConfirmationPage, OrderHistoryPage, ProductDetailPage, ProductListingPage, sampleCodeECommerce } from '@/code/e-commerce';


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
        <React.Fragment>
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
        </React.Fragment>
    )
}


export const TemplatesContent = () => {

    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-0 md:px-3 '>
            <div className='p-6 text-start w-full'>
                <h2 className="text-2xl font-bold ">Templates</h2>
                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-full ">
                    Discover our expertly crafted templates, designed to accelerate your development workflow. From sleek landing pages to full-fledged applications, MoupUI provides a comprehensive set of pre-built solutions tailored for modern web development. These templates not only save you time but also help you achieve stunning, professional results effortlessly.
                </p>
            </div>

            <div className="flex px-6 py-2 mb-10 justify-between w-full">
                <Button2 className='px-2 md:px-4 py-2 text-md'>
                    <FaArrowLeft className='m-2 w-4 h-4' />
                    <a href="/docs/installation" className="hover:underline">
                        Installation
                    </a>
                </Button2>
                <Button2 className='px-2 md:px-4 py-2 text-md'>
                    <a href="/components/all-components" className="hover:underline">
                        Components
                    </a>
                    <FaArrowRight className='m-2 w-4 h-4' />
                </Button2>
            </div>

            <div className='sm:hidden md:block flex items-center justify-center w-full pt-5 px-5 '>
                <div className='md:block hidden'>
                    <CodePreview
                        title="E-Commerce"
                        code={sampleCodeECommerce}
                        language="javascript"
                        nameFile='e-commerce.tsx'
                        preview={<SampleComponent />}
                    />
                </div>
            </div>
        </div>

    )
}
