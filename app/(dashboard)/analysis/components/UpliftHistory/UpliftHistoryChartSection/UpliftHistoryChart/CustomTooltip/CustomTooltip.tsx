export const CustomTooltip = ({ payload, label, active }: any) => {
  const dateLabel = new Date(label).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className="p-8 custom-tooltip bg-white/5 shadow-md border border-black/10 rounded-lg backdrop-blur-md grid grid-cols-4 relative">
          <div
            className="absolute left-2 top-2 w-4 h-4 rounded-full"
            style={{ background: analysis.atmosphereColor }}
          ></div>
        <div className="flex justify-start items-center">
          <p className="text-5xl">{payload[0].value}</p>
        </div>
        <div className="col-span-3">
          <p className="label text-sm text-black/30">{dateLabel}</p>
          <p className="intro text-xl uppercase">{analysis.storyTitle}</p>
          <p className="label text-sm text-black/30">
            Story atmosphere: {analysis.atmosphere}
          </p>
        </div>
      </div>
    );
  }

  return null;
};
