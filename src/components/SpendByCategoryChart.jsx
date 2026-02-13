import { useMemo, useState, useEffect, useRef } from "react";
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

const totalAmount = categories.reduce((sum, cat) => sum + cat.amount, 0);

function SpendByCategoryChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const chartContainerRef = useRef(null);
  const series = useMemo(() => categories.map((c) => c.amount), []);

  useEffect(() => {
    if (chartContainerRef.current && hoveredIndex !== null) {
      const paths = chartContainerRef.current.querySelectorAll(
        ".apexcharts-donut-series path"
      );
      paths.forEach((path, index) => {
        if (index === hoveredIndex) {
          path.style.opacity = "1";
        } else {
          path.style.opacity = "0.3";
        }
      });
    } else if (chartContainerRef.current) {
      const paths = chartContainerRef.current.querySelectorAll(
        ".apexcharts-donut-series path"
      );
      paths.forEach((path) => {
        path.style.opacity = "1";
      });
    }
  }, [hoveredIndex]);

  const options = useMemo(
    () => ({
      chart: {
        type: "donut",
        fontFamily: "inherit",
        events: {
          dataPointMouseEnter(_, __, config) {
            setHoveredIndex(config.dataPointIndex);
          },
          dataPointMouseLeave() {
            setHoveredIndex(null);
          },
        },
      },
      colors: categories.map((c) => c.color),
      labels: categories.map((c) => c.name),
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 3,
        colors: ["#ffffff"],
      },
      plotOptions: {
        pie: {
          borderRadius: 8,
          borderRadiusApplication: "end",
          donut: {
            size: "70%",
            labels: {
              show: false,
            },
          },
        },
      },
      tooltip: {
        y: { formatter: (val) => `$${val?.toLocaleString() ?? 0}` },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: hoveredIndex !== null ? 0.5 : 0.08,
          },
        },
        active: {
          filter: {
            type: "none",
          },
        },
      },
    }),
    [hoveredIndex]
  );

  const displayCategory =
    hoveredIndex !== null ? categories[hoveredIndex] : null;
  const displayLabel = displayCategory
    ? displayCategory.name
    : "Overall Spending";
  const displayAmount = displayCategory ? displayCategory.amount : totalAmount;

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
          className="bg-transparent hover:bg-primary/25 rounded-md"
        >
          <DotsIcon />
        </Button>
      </div>
      <div className="flex flex-col lg:items-center lg:gap-10">
        <div
          ref={chartContainerRef}
          className="w-full max-w-[220px] mx-auto lg:mx-0 lg:shrink-0 relative [&_.apexcharts-donut-series_path]:transition-opacity [&_.apexcharts-donut-series_path]:duration-300"
        >
          <Chart options={options} series={series} type="donut" height={220} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-sm font-medium mb-1 text-gray-50">
                {displayLabel}
              </p>
              <h4 className="text-2xl font-bold text-dark-gray">
                ${displayAmount.toLocaleString()}.00
              </h4>
            </div>
          </div>
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
