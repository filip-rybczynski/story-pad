"use client";

import { StoryScoreChartProps } from "./StoryScoreChartProps";
import { ChangeEvent, useEffect, useState } from "react";
import { UpliftHistoryChart } from "./UpliftHistoryChart/UpliftHistoryChart";

type Range = "all" | "month" | "week";

export const UpliftHistoryChartSection = ({
  data,
  xAxisKey = "createdAt",
}: StoryScoreChartProps) => {
  const [range, setRange] = useState<Range>("all");
  const [orderBy, setOrderBy] = useState<"createdAt" | "updatedAt">(
    "createdAt"
  );

  const [chartData, setChartData] = useState(data);

  // Change X Axis key
  useEffect(() => {
    const sortedChartData = data
      .slice()
      .sort((a, b) => a[orderBy].getTime() - b[orderBy].getTime());

    if (range === "all") {
      setChartData(sortedChartData);
    } else {
      const cutOff = range === "month" ? 10 : 5;

      const today = new Date();
      const cutOffDate = new Date(new Date().setDate(today.getDate() - cutOff));

      const filteredChartData = sortedChartData.filter(
        (story) => story[orderBy].getDate() >= cutOffDate.getDate()
      );

      setChartData(filteredChartData);
    }
  }, [data, orderBy, range]);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRange(e.target.value as Range);
  };

  const handleOrderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderBy(e.target.value as "createdAt" | "updatedAt");
  };

  return (
    <div className="h-full py-3">
      <fieldset>
        <legend>Time range:</legend>
        <span>
          <input
            type="radio"
            id="all"
            name="range"
            value={"all"}
            checked={range === "all"}
            onChange={handleRangeChange}
            className="ml-4 mr-2"
          />
          <label htmlFor="all">All</label>
        </span>
        <span>
          <input
            type="radio"
            id="month"
            name="range"
            value={"month"}
            checked={range === "month"}
            onChange={handleRangeChange}
            className="ml-4 mr-2"
          />
          <label htmlFor="month">Last 30 days</label>
        </span>
        <span>
          <input
            type="radio"
            id="week"
            name="range"
            value={"week"}
            checked={range === "week"}
            onChange={handleRangeChange}
            className="ml-4 mr-2"
          />
          <label htmlFor="week">Last 7 days</label>
        </span>
      </fieldset>

      <fieldset>
        <legend>Order by:</legend>
        <span>
          <input
            type="radio"
            id="createdAt"
            name="creation"
            value="createdAt"
            onChange={handleOrderChange}
            checked={orderBy === "createdAt"}
            className="ml-4 mr-2"
          />
          <label htmlFor="createdAt">Creation date</label>
        </span>
        <span>
          <input
            type="radio"
            id="updatedAt"
            name="creation"
            value="updatedAt"
            onChange={handleOrderChange}
            checked={orderBy === "updatedAt"}
            className="ml-4 mr-2"
          />
          <label htmlFor="updatedAt">Update date</label>
        </span>
      </fieldset>

      <UpliftHistoryChart data={chartData} xAxisKey={orderBy} />
    </div>
  );
};
