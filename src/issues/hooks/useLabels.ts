import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interface/label";

export const useLabels = () => {
  const labelsQuery: UseQueryResult<GithubLabel[], Error> = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour
    // placeholderData: [
    //   {
    //     id: 196858374,
    //     node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
    //     url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
    //     name: "CLA Signed",
    //     color: "e7e7e7",
    //     default: false,
    //   },
    //   {
    //     id: 1109410193,
    //     node_id: "MDU6TGFiZWwxMTA5NDEwMTkz",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Hooks",
    //     name: "Component: Hooks",
    //     color: "c2f27b",
    //     default: false,
    //   },
    //   {
    //     id: 760751171,
    //     node_id: "MDU6TGFiZWw3NjA3NTExNzE=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging",
    //     name: "Difficulty: challenging",
    //     color: "f2687c",
    //     default: false,
    //   },
    // ] satisfies GithubLabel[],
  });

  return {
    labelsQuery,
  };
};
