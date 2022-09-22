import { useEffect, useState } from "react"
import { githubApi } from "shared/api/github";
import { IRepo } from "shared/lib/types/repo";

export const useSearchRepos = (params: URLSearchParams) => {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const query = params.keys().next().value;
    if (query) {
      fetchRepos(query);
    }
  }, [params]);

  const fetchRepos = async (username: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const { data } = await githubApi.getUserRepositories(username);
      setRepos(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    repos,
    isLoading,
    isError,
  }
}