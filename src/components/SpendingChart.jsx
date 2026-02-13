import { useMemo } from "react";
import Chart from "react-apexcharts";
import Card from "../shared/Card";
import { LeftArrowIcon, RightArrowIcon } from "../shared/Icons";
import Button from "../shared/Button";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];
const spendingData = [
  4200, 5800, 3200, 8100, 6200, 15030, 9200, 7100, 8400, 5600, 10300, 9800,
];

const BAR_COLOR = "#40a198";
const BAR_HOVER_COLOR = "#1C1E23";

function formatExpense(val) {
  if (val == null) return "0";
  const n = Number(val);
  const int = Math.floor(n);
  const thousands = Math.floor(int / 1000);
  const rest = int % 1000;
  if (thousands === 0) return int.toString();
  return `${thousands}.${rest.toString().padStart(3, "0")}`;
}

function SpendingChart() {
  const options = useMemo(
    () => ({
      chart: {
        type: "bar",
        toolbar: { show: false },
        fontFamily: "inherit",
        events: {
          dataPointMouseEnter(_, chartContext, config) {
            const w = chartContext?.w;
            if (w?.globals?.dom?.baseEl) {
              const bar = w.globals.dom.baseEl.querySelector(
                `.apexcharts-bar-series path[j='${config.dataPointIndex}']`
              );
              if (bar) bar.setAttribute("fill", BAR_HOVER_COLOR);
            }
            requestAnimationFrame(() => {
              const w = chartContext?.w;
              if (!w?.globals?.dom?.baseEl) return;
              const bar = w.globals.dom.baseEl.querySelector(
                `.apexcharts-bar-series path[j='${config.dataPointIndex}']`
              );
              const tooltipEl = w.globals.dom.baseEl.querySelector(
                ".apexcharts-tooltip"
              );
              const elWrap = w.globals.dom.elWrap;
              if (!bar || !tooltipEl || !elWrap) return;
              const barRect = bar.getBoundingClientRect();
              const wrapRect = elWrap.getBoundingClientRect();
              const tooltipRect = tooltipEl.getBoundingClientRect();
              let left = barRect.left - wrapRect.left;
              const padding = 8;
              if (left + tooltipRect.width > wrapRect.width - padding) {
                left = wrapRect.width - tooltipRect.width - padding;
              }
              if (left < padding) {
                left = padding;
              }
              tooltipEl.style.left = `${left}px`;
              const isLastTwoBars = config.dataPointIndex >= 10;
              tooltipEl.classList.remove(
                "tooltip-arrow-left",
                "tooltip-arrow-right"
              );
              tooltipEl.classList.add(
                isLastTwoBars ? "tooltip-arrow-right" : "tooltip-arrow-left"
              );
            });
          },
          dataPointMouseLeave(_, chartContext, config) {
            const w = chartContext?.w;
            if (!w?.globals?.dom?.baseEl) return;
            const bar = w.globals.dom.baseEl.querySelector(
              `.apexcharts-bar-series path[j='${config.dataPointIndex}']`
            );
            if (bar) bar.setAttribute("fill", BAR_COLOR);
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          borderRadiusApplication: "end",
          columnWidth: "20px",
          distributed: false,
        },
      },
      dataLabels: { enabled: false },
      stroke: { show: false },
      xaxis: {
        categories: months,
        labels: {
          style: { colors: "#596780", fontSize: "12px" },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          style: { colors: "#596780", fontSize: "12px" },
          formatter: (val) => {
            if (val >= 1000) return `$${val / 1000}k`;
            return `$${val}`;
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickAmount: 5,
        min: 0,
        max: 16000,
      },
      grid: {
        borderColor: "#e2e8f0",
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      colors: ["#40a198"],
      tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex }) => {
          const val = series[seriesIndex]?.[dataPointIndex];
          const formatted = formatExpense(val);
          return (
            '<div class="apexcharts-custom-tooltip">' +
            '<div class="apexcharts-custom-tooltip-inner">' +
            '<span class="apexcharts-custom-tooltip-label">Expense</span>' +
            '<span class="apexcharts-custom-tooltip-value">$' +
            formatted +
            "</span>" +
            "</div>" +
            '<div class="apexcharts-custom-tooltip-arrow"></div>' +
            "</div>"
          );
        },
      },
      states: {
        hover: {
          filter: { type: "none" },
          color: "#1C1E23",
        },
        active: {
          filter: { type: "none" },
          color: "#1C1E23",
        },
      },
    }),
    []
  );

  const series = useMemo(() => [{ name: "Expense", data: spendingData }], []);

  return (
    <Card className="h-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-dark-gray">
          Spending Statistics
        </h3>
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            aria-label="Previous year"
            className="rounded-md"
          >
            <LeftArrowIcon size={12} />
          </Button>
          <span className="text-sm font-semibold text-dark-gray text-center">
            2024
          </span>
          <Button variant="ghost" aria-label="Next year" className="rounded-md">
            <RightArrowIcon size={12} />
          </Button>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height={225} />
    </Card>
  );
}

export default SpendingChart;
