import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "antd/lib/input/Search";
import { Divider } from "antd";
import styles from "./styles.module.scss";

interface IProps {
  isLoading: boolean;
  isError: boolean;
}

export const Main: FC<IProps> = ({ isLoading, isError }) => {
  const [, setParams] = useSearchParams();

  const handleSubmit = (username: string) => {
    setParams(username);
  };

  return (
    <div className={styles["main"]}>
      <header>
        <h1>MY GITHUB RÉSUMÉ</h1>
      </header>
      <p>
        As a software startup owner I really enjoy when people send us their
        résumés and they include their github account so we can see tangible
        work they have done.
      </p>
      <div className={styles["main__form"]}>
        <Search
          onSearch={handleSubmit}
          enterButton={"Search"}
          loading={isLoading}
          status={isError ? "error" : ""}
        />
      </div>
      <Divider/>
      <h2>Notes, Information and Future features</h2>
      <footer>
        <p>Created by <a target="_blank" href={"https://github.com/yaron96"}>
              @yaron96
            </a></p>
      </footer>
    </div>
  );
};
