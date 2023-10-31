"use client"
import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
} from "recharts";
import { StoryScoreChartProps } from "./StoryScoreChartProps";

export const StoryScoreChart = ({
  data,
  xAxisKey = "createdAt",
}: StoryScoreChartProps) => {
  const displayData = data.map((dataPoint) => {
    return {
      xAxis: dataPoint[xAxisKey],
      score: dataPoint.analysis.upliftingScore,
    };
  });

  return (
    <div className="h-full">
      <ResponsiveContainer width={"90%"} height={"100%"}>
        <LineChart width={300} height={200} data={displayData}>
          <Line
            dataKey="score"
            type="monotone"
            stroke="#bada55"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <XAxis dataKey="xAxis" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
