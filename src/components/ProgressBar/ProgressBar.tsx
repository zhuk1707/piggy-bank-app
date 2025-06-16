import type {FC} from "react";
import type {CardProgressProps} from "../Card/CardProgress/CardProgress.tsx";
import getPercentage from "../../utils/getPercentage.ts";
import styles from "./ProgressBar.module.css";

const ProgressBar: FC<CardProgressProps> = ({deposit = 0, goal}) => {
  return (
    <div className={styles.progressBar}>
      <div
        style={{
          width: `calc(${deposit > goal ? 100 : getPercentage(goal, deposit)}% - 4px)`
        }}
        className={styles.progressFill}
      ></div>
    </div>
  );
};

export default ProgressBar;
