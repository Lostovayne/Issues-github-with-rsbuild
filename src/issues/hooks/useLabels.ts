import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interface/label";

export const useLabels = () => {
  const labelsQuery: UseQueryResult<GithubLabel[], Error> = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    labelsQuery,
  };
};
