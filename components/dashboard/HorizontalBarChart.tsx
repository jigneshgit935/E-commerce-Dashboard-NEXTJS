"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AnalyticsCards from "./AnalyticsCards";

export const description = "A mixed bar chart";

const chartData = [
  { country: "USA", visitors: 275, fill: "#2563Eb" },
  { country: "India", visitors: 200, fill: "#61A8FB" },
  { country: "China", visitors: 187, fill: "#3B86F7" },
  { country: "Cuba", visitors: 173, fill: "#90C7FE" },
  { country: "Brazil", visitors: 90, fill: "#BEDCFE" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  USA: {
    label: "USA",
  },
  India: {
    label: "India",
  },
  China: {
    label: "China",
  },
  Cuba: {
    label: "Cuba",
  },
  Brazil: {
    label: "Brazil",
  },
} satisfies ChartConfig;

export function HorizontalBarChart() {
  return (
   <AnalyticsCards title="Traffic Bar Chart" subTitle="Showing Visitors From Different Countries">
     <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 0,
        }}
      >
        <YAxis
          dataKey="country"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="visitors" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="visitors" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
   </AnalyticsCards>
  );
}
