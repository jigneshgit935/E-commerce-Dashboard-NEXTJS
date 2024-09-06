import { BarCharts } from "@/components/dashboard/BarCharts";
import { HorizontalBarChart } from "@/components/dashboard/HorizontalBarChart";
import { PieCharts } from "@/components/dashboard/PieCharts";
import { RadarCharts } from "@/components/dashboard/RadarCharts";
import Summary from "@/components/dashboard/Summary";
import TopCustomers from "@/components/dashboard/TopCustomers";
import TopProducts from "@/components/dashboard/TopProducts";

export default function Home() {
  return (
    <div className="p-4 grid gap-5">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-10">
        <BarCharts />
        <RadarCharts/>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <PieCharts/>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <HorizontalBarChart/>
        <TopCustomers />
      </div>
    </div>
  );
}
