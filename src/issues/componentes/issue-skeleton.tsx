export const IssueSkeleton = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center px-2 py-[19px] mb-5 border rounded-md bg-slate-200 animate-pulse">
      <div className="min-w-10 h-8 bg-gray-300 rounded"></div>
      <div className="flex flex-col flex-grow px-2 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      <div className="flex flex-col mx-2 items-center">
        <div className="min-w-5 h-6 bg-gray-300 rounded"></div>
        <div className="px-4 h-4 bg-gray-300 rounded w-4"></div>
      </div>
    </div>
  );
};
