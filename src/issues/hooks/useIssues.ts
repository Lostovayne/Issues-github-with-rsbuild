import { getIssues } from "@/issues/actions/get-Issues";
import { useQuery } from "@tanstack/react-query";

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000 * 60,
  });

  return {
    issuesQuery,
  };
};
