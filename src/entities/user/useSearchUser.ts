import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { githubApi } from "shared/api/github";

interface IUser {
  avatar_url: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
}

export const useSearchUser = () => {
  const [params] = useSearchParams();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const query = params.keys().next().value;
    if (query) {
      fetchUser(query);
    }
  }, [params]);

  const fetchUser = async (username: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const { data } = await githubApi.getUser(username);
      setUser(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    isError,
  };
};
