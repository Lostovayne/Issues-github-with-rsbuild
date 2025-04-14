import { useNavigate } from "@tanstack/react-router";
import { FiCheckCircle, FiInfo, FiMessageSquare } from "react-icons/fi";
import { GithubIssue, State } from "../interface/issue";

interface Props {
  issue: GithubIssue;
}

export const IssueItem = ({ issue }: Props) => {
  const navigate = useNavigate({ from: "/issues/list" });

  return (
    <div className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-200 hover:bg-slate-300 transition-colors">
      {issue.state === State.Close ? (
        <FiCheckCircle size={30} color="green" className="min-w-10" />
      ) : (
        <FiInfo size={30} color="gray" className="min-w-10" />
      )}
      <div className="flex flex-col flex-grow px-2">
        <a
          onClick={() => navigate({ to: "/issues/issue/$id", params: { id: `${issue.number}` } })}
          className="hover:underline"
        >
          {issue.title}
        </a>
        <span className="text-gray-500">
          #25581 opened 2 days ago by <span className="font-bold">{issue.user.login}</span>
        </span>
      </div>

      <img
        src={issue.user.avatar_url}
        alt={`User Avatar${issue.user.login}`}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </div>
  );
};
