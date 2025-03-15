import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading)
    return (
      <div className="flex flex-wrap gap-2 max-w-80">
        {Array.from({ length: 20 }).map((_, index) => (
          <LabelSkeleton key={index} />
        ))}
      </div>
    );

  if (!labelsQuery.data) return null;

  return (
    <div className="flex flex-wrap gap-2 max-w-90">
      {labelsQuery.data.map(({ name, color, id }) => (
        <span
          key={id}
          className={`px-2 py-1 rounded-full text-xs font-semibold hover:bg-[#${color}] cursor-pointer border-1 border-[#${color}] text-[#${color}] hover:text-white  transition-colors`}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

const LabelSkeleton = () => {
  return (
    <span
      style={{ width: `${Math.floor(Math.random() * (180 - 5 + 10) + 15)}px` }}
      className="px-2 h-6 py-1 bg-gray-200/80 animate-pulse rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
    ></span>
  );
};
