"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  CalendarSimple,
  CalendarRange,
  CalendarMultiple,
  CalendarDisabled,
  CalendarBoundaries,
  CalendarModifiers,
  CalendarFooter,
  CalendarPopover,
  CalendarMultiMonth,
  CalendarStyled,
} from "@/code/calendar-demo";
import { calendarDefaultSnippet } from "@/data/code/all-snippets";
import { CalendarDays } from "lucide-react";

export const Calendar = () => (
  <ContentLayout>
    <SectionDoc
      icon={<CalendarDays className="w-5 h-5" />}
      iconBg="bg-green-100"
      title="Calendar"
      componentCount={10}
      description="A date picker component that allows users to select one or more days. Built with DayPicker and accessible for all users."
      features={[
        "Single, Multiple, and Range selection modes",
        "Disabling specific dates (e.g. weekends)",
        "Minimum and Maximum date bounds",
        "Custom modifiers for highlighting special days",
        "Integration with Popovers for input-based selection",
        "Multi-month display for planning interfaces",
      ]}
      dependencies={["react-day-picker", "date-fns", "lucide-react"]}
      shadcnDeps={["calendar", "button", "popover"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock
          title="Single Selection"
          subtitle="Standard date picker for birthdays or tasks"
        >
          <CodePreview
            preview={<CalendarSimple />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Simple"
            language="tsx"
            nameFile="calendar-simple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Range Picker" subtitle="Select span of days for stays or events">
          <CodePreview
            preview={<CalendarRange />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Range"
            language="tsx"
            nameFile="calendar-range.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Multiple Dates" subtitle="Select individual non-consecutive days">
          <CodePreview
            preview={<CalendarMultiple />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Multiple"
            language="tsx"
            nameFile="calendar-multiple.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Disabled Weekends"
          subtitle="Prevents selection of specific weekday patterns"
        >
          <CodePreview
            preview={<CalendarDisabled />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Disabled"
            language="tsx"
            nameFile="calendar-disabled.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Boundary Limits" subtitle="Constrain selection to a specific window">
          <CodePreview
            preview={<CalendarBoundaries />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Boundaries"
            language="tsx"
            nameFile="calendar-bound.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Marked (Booked) Days"
          subtitle="Higher-level visualization for availability"
        >
          <CodePreview
            preview={<CalendarModifiers />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Modifiers"
            language="tsx"
            nameFile="calendar-mod.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="With Custom Footer"
          subtitle="Includes summary info or quick-select actions"
        >
          <CodePreview
            preview={<CalendarFooter />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Footer"
            language="tsx"
            nameFile="calendar-footer.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Input Popover" subtitle="Compact integration for form fields">
          <CodePreview
            preview={<CalendarPopover />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Popover"
            language="tsx"
            nameFile="calendar-pop.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Two-Month Display"
          subtitle="Expanded view for better scheduling context"
        >
          <CodePreview
            preview={<CalendarMultiMonth />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Multi-month"
            language="tsx"
            nameFile="calendar-multi.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Styled Variations"
          subtitle="Custom color schemes for brand integration"
        >
          <CodePreview
            preview={<CalendarStyled />}
            code={calendarDefaultSnippet.react}
            codeNext={calendarDefaultSnippet.next}
            codeHtml={calendarDefaultSnippet.html}
            title="Styled"
            language="tsx"
            nameFile="calendar-style.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
