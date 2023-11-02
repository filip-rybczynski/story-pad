"use client";
import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
} from "recharts";
import { UpliftHistoryChartProps } from "./UpliftHistoryChartProps";
import { CustomTooltip } from "./CustomTooltip/CustomTooltip";

const simplifyDate = (date: Date) => {
  return new Date(date).toLocaleString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const UpliftHistoryChart = ({
  data,
  xAxisKey
}: UpliftHistoryChartProps) => {
  const displayData = data.map((dataPoint) => {
    const { analysis, storyTitle, createdAt, updatedAt } = dataPoint;

    return {
      storyTitle,
      createdAt: simplifyDate(createdAt),
      updatedAt: simplifyDate(updatedAt),
      ...analysis,
    };
  });

  return (
    <ResponsiveContainer width={"90%"} height={"100%"}>
      <LineChart width={300} height={200} data={displayData}>
        <Line
          dataKey="upliftingScore"
          type="monotone"
          stroke="#bada55"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey={xAxisKey} name="Time" tick></XAxis>
        <YAxis tickCount={11} padding={{ top: 20, bottom: 20 }} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
