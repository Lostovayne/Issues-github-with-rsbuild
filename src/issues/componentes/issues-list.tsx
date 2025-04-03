import { UseQueryResult } from "@tanstack/react-query";
import { GithubIssue } from "../interface/issue";
import { IssueSkeleton } from "./issue-skeleton";
import { IssueItem } from "./issues-item";

interface IssueListProps {
  issuesQuery: UseQueryResult<GithubIssue[], Error>;
}

export const IssueList = ({ issuesQuery }: IssueListProps) => {
  const issues: GithubIssue[] = issuesQuery.data || [];
  if (issuesQuery.isError) {
    return <div>Error: {issuesQuery.error.message}</div>;
  }

  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      {issuesQuery.isLoading || issues.length === 0 ? (
        <div className="mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <IssueSkeleton key={index} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          {issues.map((issue, index) => (
            <IssueItem key={issue.id} index={index} />
          ))}
        </div>
      )}
    </>
  );
};
