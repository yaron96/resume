import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { IUser } from "shared/lib/types/user";
import { IRepo } from "shared/lib/types/repo";
import { Button, Card, List } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "./styles.module.scss";

interface IProps {
  user: IUser;
  repos: IRepo[];
}

export const AboutUser: FC<IProps> = ({ user, repos }) => {
  const [, setParams] = useSearchParams();

  const handleGoBack = () => {
    setParams("");
  };

  return (
    <div className={styles["user"]}>
      <Button onClick={handleGoBack}>Clear</Button>
      <div>
        <Card cover={<img alt="example" src={user.avatar_url} />}>
          <Meta
            title={
              <a target="_blank" href={user.html_url}>
                {user.login}
              </a>
            }
            description={
              <div>
                <p>Created at: {dateTransfer(user.created_at)}</p>
                <p>Repositories: {user.public_repos}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
              </div>
            }
          />
          <Repos repos={repos} />
        </Card>
      </div>
    </div>
  );
};

interface IRepoComponent {
  repos: IRepo[];
}

const Repos: FC<IRepoComponent> = ({ repos }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={repos}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <div>
                <a target="_blank" href={item.html_url}>
                  {item.name}
                </a>
              </div>
            }
            description={
              <div>
                <div>Created: {dateTransfer(item.created_at)}</div>
                <div>Updated: {dateTransfer(item.updated_at)}</div>
                <div>{item.description}</div>
              </div>
            }
          />
          <div>{item.language}</div>
        </List.Item>
      )}
    ></List>
  );
};

const dateTransfer = (dateString: string) => {
  return dateString.slice(0, 10).split("-").join(".");
};
