import { useEffect, useState } from "react";
import { githubApi } from "shared/api/github";
import { IUser } from "shared/lib/types/user";

export const useFetchMe = () => {
  const [me, setMe] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMe = async () => {
    try {
      setIsLoading(true);
      const { data } = await githubApi.getMe();
      setMe(data);
    } catch (error) {
      //setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return {
    me,
    isLoading,
  };
};
