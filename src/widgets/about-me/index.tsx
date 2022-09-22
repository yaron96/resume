import { useFetchMe } from "entities/me/useFetchMe";
import { Spin } from "antd";
import styles from "./styles.module.scss";

export const AboutMe = () => {
  const { me, isLoading } = useFetchMe();

  return (
    <div className={styles["about-me"]}>
      {isLoading ? (
        <Spin size="small" />
      ) : (
        <>
          Token owner-
          <a target="_blank" href={me?.html_url}>
            {me?.login}
          </a>
        </>
      )}
    </div>
  );
};
