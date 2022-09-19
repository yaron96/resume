import { ReactNode } from "react";
import styles from "./styles.module.scss"

interface Props {
  children?: ReactNode;
}

export const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={styles["main_template"]}>{children}</div>
    </div>
  );
};