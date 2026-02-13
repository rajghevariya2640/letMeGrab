import { useMemo } from "react";
import Chart from "react-apexcharts";
import Card from "../shared/Card";
import { DotsIcon } from "../shared/Icons";
import Button from "../shared/Button";

const categories = [
  { name: "Employees Salary", amount: 8000, color: "#ec4899" },
  { name: "Material Supplies", amount: 2130, color: "#f9a8d4" },
  { name: "Company tax", amount: 1510, color: "#a855f7" },
  { name: "Maintenance system", amount: 2245, color: "#40a198" },
  { name: "Development System", amount: 4385, color: "#38bdf8" },
  { name: "Production Tools", amount: 1000, color: "#1e40af" },
];

function SpendByCategoryChart() {
  const series = useMemo(() => categories.map((c) => c.amount), []);

  const options = useMemo(
    () => ({
      chart: {
        type: "donut",
        fontFamily: "inherit",
      },
      colors: categories.map((c) => c.color),
      labels: categories.map((c) => c.name),
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: { show: false },
              value: {
                show: true,
                fontSize: "18px",
                fontWeight: 700,
                color: "#1a202c",
                formatter: () => "Overall Spending",
              },
              total: {
                show: true,
                label: "$19,760.00",
                fontSize: "14px",
                fontWeight: 600,
                color: "#596780",
              },
            },
          },
        },
      },
      tooltip: {
        y: { formatter: (val) => `$${val?.toLocaleString() ?? 0}` },
      },
      states: {
        hover: { filter: { type: "darken", value: 0.08 } },
      },
    }),
    []
  );

  return (
    <Card>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-base font-semibold text-dark-gray">
          Spend by category
        </h3>
        <Button
          variant="ghost"
          size="icon"
          aria-label="More options"
          className="bg-transparent"
        >
          <DotsIcon />
        </Button>
      </div>
      <div className="flex flex-col lg:items-center lg:gap-10">
        <div className="w-full max-w-[220px] mx-auto lg:mx-0 lg:shrink-0">
          <Chart options={options} series={series} type="donut" height={220} />
        </div>
        <ul className="mt-10 lg:mt-0 flex-1 w-full space-y-[17px]">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center justify-between gap-2 font-semibold"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-gray-50 text-xs truncate">
                  {cat.name}
                </span>
              </span>
              <span className="text-dark-gray shrink-0 text-sm">
                ${cat.amount.toLocaleString()}.00
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default SpendByCategoryChart;
