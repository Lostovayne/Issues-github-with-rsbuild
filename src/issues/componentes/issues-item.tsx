import { useNavigate } from "@tanstack/react-router";
import { FiInfo, FiMessageSquare } from "react-icons/fi";

export const IssueItem = ({ index }: { index: number }) => {
  const navigate = useNavigate({ from: "/issues/list" });

  return (
    <div 
      className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-200 hover:bg-slate-300 transition-colors"
    >
      <FiInfo size={30} color="red" className="min-w-10" />
      <div className="flex flex-col flex-grow px-2">
        <a onClick={() => navigate({ to: "/issues/issue/$id", params: { id: "123" } })} className="hover:underline">
          Suggestion: why not make accessing and changing the state possible globally?
        </a>
        <span className="text-gray-500">
          #25581 opened 2 days ago by <span className="font-bold">segfaulty1</span>
        </span>
      </div>

      <img
        src="https://avatars.githubusercontent.com/u/1933404?v=4"
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">2</span>
      </div>
    </div>
  );
};
