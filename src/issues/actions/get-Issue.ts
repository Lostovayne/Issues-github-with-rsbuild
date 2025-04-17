import { githubApi } from "@/api/github";
import { sleep } from "@/helpers/sleep";
import { GithubIssue } from "../interface/issue";

export const getIssue = async (issueNumber:number): Promise<GithubIssue> => {
  await sleep(1.5);
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);
  return data;
};
