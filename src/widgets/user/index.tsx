import { useState, useEffect, FC } from "react";
import { githubApi } from "shared/api/github";

interface IProps {
  username: string;
}

export const User: FC<IProps> = ({ username }) => {
  const [user, setUser] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    setIsLoading(true);
    try {
      const res = await githubApi.getUser(username)
      setUser(res.data)
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Something wrong</div>;
  }

  return (
    <div>
      USER <h1>{JSON.stringify(user)}</h1>
    </div>
  );
};
