import { useState, useEffect, FC, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { githubApi } from "shared/api/github";
import { Button, Card, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "./styles.module.scss";

interface IProps {
  username: string;
}

export const User: FC<IProps> = ({ username }) => {
  const [, setParams] = useSearchParams();

  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await githubApi.getUser(username);
      setUser(res.data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const dateTransfer = useMemo(() => {
    return user?.created_at?.slice(0, 10).split("-").join(".");
  }, [user]);

  const handleGoBack = () => {
    setParams("");
  };

  if (isLoading) {
    return (
      <div className={styles["user"]}>
        <Spin />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles["user"]}>
        Error
        <Button onClick={handleGoBack}>Go back</Button>
      </div>
    );
  }

  return (
    <div className={styles["user"]}>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={user.avatar_url} />}
      >
        <Meta
          title={
            <a target="_blank" href={user.html_url}>
              {user.login}
            </a>
          }
          description={
            <div>
              <p>Created at: {dateTransfer}</p>
              <p>Repositories: {user.public_repos}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
            </div>
          }
        />
      </Card>
      <Button onClick={handleGoBack}>Clear</Button>
    </div>
  );
};
