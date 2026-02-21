"use client";

import CodePreview from "@/components/ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  ChartLine,
  ChartArea,
  ChartBar,
  ChartPie,
  ChartRadar,
  ChartComposed,
  ChartRadial,
  ChartScatter,
  ChartSparkline,
  ChartStacked,
} from "@/code/chart-demo";
import { chartDefaultSnippet } from "@/data/code/all-snippets";
import { BarChart3 } from "lucide-react";

export const Charts = () => (
  <ContentLayout>
    <SectionDoc
      icon={<BarChart3 className="w-5 h-5" />}
      iconBg="bg-zinc-100"
      title="Charts"
      componentCount={10}
      description="Visual representations of data using Recharts. Optimized for responsive layouts and consistent branding with the MoupUI design system."
      features={[
        "Responsive containers for fluid resizing",
        "Clean, minimal tooltips and axes",
        "Gradient fills and custom colors for premium feel",
        "Multiple chart types: Line, Area, Bar, Pie, and more",
        "Support for composed and multi-data visualizations",
        "Accessible color palettes and readable typographies",
      ]}
      dependencies={["recharts", "lucide-react"]}
      shadcnDeps={["card"]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentBlock
          title="Smooth Line Chart"
          subtitle="Ideal for tracking single metrics over time"
        >
          <CodePreview
            preview={<ChartLine />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Line"
            language="tsx"
            nameFile="chart-line.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Gradient Area Chart"
          subtitle="Visualizes volume or growth with depth"
        >
          <CodePreview
            preview={<ChartArea />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Area"
            language="tsx"
            nameFile="chart-area.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Standard Bar Chart"
          subtitle="Categorical comparison with rounded bars"
        >
          <CodePreview
            preview={<ChartBar />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Bar"
            language="tsx"
            nameFile="chart-bar.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Donut Pie Chart"
          subtitle="Percentage distribution with clear spacing"
        >
          <CodePreview
            preview={<ChartPie />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Pie"
            language="tsx"
            nameFile="chart-pie.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Multi-Axis Radar"
          subtitle="Displays performance across several dimensions"
        >
          <CodePreview
            preview={<ChartRadar />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Radar"
            language="tsx"
            nameFile="chart-radar.tsx"
          />
        </ComponentBlock>

        <ComponentBlock title="Composed View" subtitle="Combines Bar and Line for dense metrics">
          <CodePreview
            preview={<ChartComposed />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Composed"
            language="tsx"
            nameFile="chart-composed.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Radial Progress"
          subtitle="Circular visualization for individual task status"
        >
          <CodePreview
            preview={<ChartRadial />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Radial"
            language="tsx"
            nameFile="chart-radial.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Scatter Distribution"
          subtitle="Uncovers patterns across two variables"
        >
          <CodePreview
            preview={<ChartScatter />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Scatter"
            language="tsx"
            nameFile="chart-scatter.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Mini Sparkline"
          subtitle="Dense indicator for dashboard summary tiles"
        >
          <CodePreview
            preview={<ChartSparkline />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Sparkline"
            language="tsx"
            nameFile="chart-spark.tsx"
          />
        </ComponentBlock>

        <ComponentBlock
          title="Stacked Comparison"
          subtitle="Breaks down categories within a single bar"
        >
          <CodePreview
            preview={<ChartStacked />}
            code={chartDefaultSnippet.react}
            codeNext={chartDefaultSnippet.next}
            codeHtml={chartDefaultSnippet.html}
            title="Stacked"
            language="tsx"
            nameFile="chart-stacked.tsx"
          />
        </ComponentBlock>
      </div>
    </SectionDoc>
  </ContentLayout>
);
