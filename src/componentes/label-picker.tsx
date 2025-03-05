import { useQuery } from "@tanstack/react-query";
import { sleep } from "../helpers/sleep";
const getLabels = async () => {
  await sleep(2);
  const response = await fetch("https://api.github.com/repos/facebook/react/labels");
  const data = await response.json();
  return data;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  if (labelsQuery.isLoading)
    return (
      <div className="flex flex-wrap gap-2 max-w-80">
        {Array.from({ length: 10 }).map((_, index) => (
          <LabelSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </>
  );
};

const LabelSkeleton = () => {
  return (
    <span className="px-2 w-15 h-6 py-1 bg-gray-200/80 animate-pulse rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"></span>
  );
};
