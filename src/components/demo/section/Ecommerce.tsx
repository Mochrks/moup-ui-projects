"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  ProductListingPage,
  ProductDetailPage,
  CartPage,
  CheckoutPage,
  OrderConfirmationPage,
  OrderHistoryPage,
} from "@/code/e-commerce";
import {
  sampleCodeECommerce,
  sampleCodeECommerceNext,
  sampleCodeECommerceHtml,
} from "@/data/code/e-commerce";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const Ecommerce = () => (
  <ContentLayout>
    <SectionDoc
      icon={<CartIcon />}
      iconBg="bg-[#fef3c7]"
      title="E-commerce"
      componentCount={6}
      description="Full E-commerce storefront patterns built with Shadcn UI. This section includes everything you need for a modern shopping experience: clean product grids with filtering, detailed product pages with variant selectors, interactive shopping carts, streamlined checkout flows with payment forms, and post-purchase confirmation/history pages."
      features={[
        "Responsive Product Grid with grid/list view toggles and sorting",
        "Detailed Product Page with image gallery and quantity controls",
        "Interactive Cart Drawer/Page with real-time subtotal calculation",
        "Streamlined Checkout Flow with shipping and payment information",
        "Post-purchase Order Confirmation with summary and tracking",
        "User Order History with status badges and re-order buttons",
      ]}
      dependencies={["lucide-react"]}
      shadcnDeps={["card", "button", "input", "select", "badge", "separator", "label"]}
    >
      {/* Product Listing */}
      <ComponentBlock
        title="Product Listing"
        subtitle="Grid/List toggle with advanced sorting"
        features={["Grid & List View", "Sorting Dropdown", "Rating Stars", "Pagination Bar"]}
      >
        <CodePreview
          title="Product Listing"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="product-listing.tsx"
          preview={<ProductListingPage />}
        />
      </ComponentBlock>

      {/* Product Detail */}
      <ComponentBlock
        title="Product Detail"
        subtitle="Comprehensive view with gallery and variants"
        features={[
          "Image Gallery",
          "Color/Size Selectors",
          "Quantity Increment",
          "Add to Cart CTA",
        ]}
      >
        <CodePreview
          title="Product Detail"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="product-detail.tsx"
          preview={<ProductDetailPage />}
        />
      </ComponentBlock>

      {/* Shopping Cart */}
      <ComponentBlock
        title="Shopping Cart"
        subtitle="Item management with live summary"
        features={["Item List", "Live Subtotal", "Quantity adjustment", "Summary Card"]}
      >
        <CodePreview
          title="Shopping Cart"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="shopping-cart.tsx"
          preview={<CartPage />}
        />
      </ComponentBlock>

      {/* Checkout Page */}
      <ComponentBlock
        title="Checkout Flow"
        subtitle="Shipping and Payment step-by-step"
        features={["Shipping Form", "Payment Integration", "Order Summary", "Tax calculation"]}
      >
        <CodePreview
          title="Checkout Flow"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="checkout.tsx"
          preview={<CheckoutPage />}
        />
      </ComponentBlock>

      {/* Order Confirmation */}
      <ComponentBlock
        title="Order Confirmation"
        subtitle="Clean success state for post-purchase"
        features={["Success Checkmark", "Order Summary", "Shipping Info", "Next Steps CTA"]}
      >
        <CodePreview
          title="Order Confirmation"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="order-confirmation.tsx"
          preview={<OrderConfirmationPage />}
        />
      </ComponentBlock>

      {/* Order History */}
      <ComponentBlock
        title="Order History"
        subtitle="User purchase log with status tracking"
        features={["Historical List", "Order ID labels", "Status Badges", "Re-order button"]}
      >
        <CodePreview
          title="Order History"
          code={sampleCodeECommerce}
          codeNext={sampleCodeECommerceNext}
          codeHtml={sampleCodeECommerceHtml}
          language="javascript"
          nameFile="order-history.tsx"
          preview={<OrderHistoryPage />}
        />
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
