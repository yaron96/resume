import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { IUser } from "shared/lib/types/user";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "./styles.module.scss";

interface IProps {
  user: IUser;
}

export const AboutUser: FC<IProps> = ({ user }) => {
  const [, setParams] = useSearchParams();

  const dateTransfer = useMemo(() => {
    return user.created_at.slice(0, 10).split("-").join(".");
  }, [user]);

  const handleGoBack = () => {
    setParams("");
  };

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
