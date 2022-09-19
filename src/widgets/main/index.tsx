import { useState } from "react";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Input } from "antd";
import styles from "./styles.module.scss";

export const Main: FC = ({}) => {
  const [, setParams] = useSearchParams();

  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    setParams(value);
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
        <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
        <Button onClick={handleSubmit}>Generate</Button>
      </div>
      <h2>Notes, Information and Future features</h2>
      <footer>
        <p>Created by @yaron96</p>
      </footer>
    </div>
  );
};
