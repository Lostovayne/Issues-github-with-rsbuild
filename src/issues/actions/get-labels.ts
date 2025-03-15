import { githubApi } from "../../api/github";
import { sleep } from "../../helpers/sleep";
import { GithubLabel } from "../interface/label";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1.5);
  const { data } = await githubApi.get<GithubLabel[]>("/labels");
  console.log(data);
  return data;
};
