"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  DrawerBottom,
  SheetRight,
  SheetLeft,
  SheetTop,
  DrawerConfirm,
  SheetFull,
  SheetForm,
  DrawerFilter,
  SheetList,
  DrawerActions,
} from "@/code/drawer-demo";
import { drawerDefaultSnippet } from "@/data/code/all-snippets";
import { PanelLeftOpen } from "lucide-react";

export const DrawerDemo = () => (
  <ContentLayout>
    <SectionDoc
      icon={<PanelLeftOpen className="w-5 h-5" />}
      iconBg="bg-teal-100"
      title="Drawer & Sheet"
      componentCount={10}
      description="Overlays that slide in from the edges of the screen. Sheets are best for sidebars and deep dives, while Drawers are optimized for mobile-first bottom interactions."
      features={[
        "Bottom drawer pattern using Vaul (resizable & dismissible)",
        "Four-side Sheet support (Top, Right, Bottom, Left)",
        "Optimized for touch and mouse interactions",
        "Responsive sizing based on viewport percentage",
        "Smooth backdrop transitions and focus trapping",
        "Ideal for navigation, filters, and quick data entry",
      ]}
      dependencies={["vaul", "@radix-ui/react-dialog", "lucide-react"]}
      shadcnDeps={["drawer", "sheet", "button"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock
          title="Bottom Drawer (Vaul)"
          subtitle="Standard mobile-first bottom interaction"
        >
          <CodePreview
            preview={<DrawerBottom />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Bottom"
            language="tsx"
            nameFile="drawer-bottom.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Right Side Sheet" subtitle="Classic slide-out sidebar for menus">
          <CodePreview
            preview={<SheetRight />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Right"
            language="tsx"
            nameFile="sheet-right.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Left Side Explorer" subtitle="Navigation drawer for secondary views">
          <CodePreview
            preview={<SheetLeft />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Left"
            language="tsx"
            nameFile="sheet-left.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Top Search Overlay" subtitle="Drop-down panel from the top edge">
          <CodePreview
            preview={<SheetTop />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Top"
            language="tsx"
            nameFile="sheet-top.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Action Confirmation"
          subtitle="Safe pattern for deleting or confirming data"
        >
          <CodePreview
            preview={<DrawerConfirm />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Confirm"
            language="tsx"
            nameFile="drawer-confirm.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Full-Width Content"
          subtitle="Maximum space for complex data management"
        >
          <CodePreview
            preview={<SheetFull />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Full Width"
            language="tsx"
            nameFile="sheet-full.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Side Data Form"
          subtitle="Dedicated space for editing resource details"
        >
          <CodePreview
            preview={<SheetForm />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Form"
            language="tsx"
            nameFile="sheet-form.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Interactive Filters"
          subtitle="Tall bottom sheet for list refinement"
        >
          <CodePreview
            preview={<DrawerFilter />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Filter"
            language="tsx"
            nameFile="drawer-filter.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Dark Directory" subtitle="Sidebar list with high-contrast theme">
          <CodePreview
            preview={<SheetList />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Directory"
            language="tsx"
            nameFile="sheet-list.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Quick Action Menu" subtitle="Mini tray for contextual operations">
          <CodePreview
            preview={<DrawerActions />}
            code={drawerDefaultSnippet.react}
            codeNext={drawerDefaultSnippet.next}
            codeHtml={drawerDefaultSnippet.html}
            title="Actions"
            language="tsx"
            nameFile="drawer-actions.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
