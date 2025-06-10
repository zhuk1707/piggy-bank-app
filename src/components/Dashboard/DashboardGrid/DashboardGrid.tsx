import styles from './DashboardGrid.module.css'
import sumProperty from "../../../utils/sumProperty.ts";
import getPercentage from "../../../utils/getPercentage.ts";
import formatNumber from "../../../utils/formatNumber.ts";
import ProgressBar from "../../ProgressBar/ProgressBar.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

export default function DashboardGrid() {
  const goalsList = useSelector((state:RootState) => state.goalsList)

  const overallGoalsValue = sumProperty(goalsList, "goal")
  const overallDeposit = sumProperty(goalsList, "deposit")
  const percentage = overallGoalsValue && overallDeposit
    ? formatNumber(getPercentage(overallGoalsValue, overallDeposit))
    : 0

  return (
    <div className={styles.gridContainer}>
      <div className={styles.item1}>
        <h1>{goalsList.goalsId.length}</h1>
        <h2>Goals</h2>
      </div>

      <div className={styles.item2}>
        <h1>
          ${overallGoalsValue}
        </h1>
        <h2>Overall Goal</h2>
      </div>

      <div className={styles.item3}>
        <h1>
          ${overallDeposit}
        </h1>
        <h2>Overall Deposit</h2>
      </div>

      <div className={styles.item4}>
        <h1>
          {percentage}%
        </h1>

        <ProgressBar goal={overallGoalsValue} deposit={overallDeposit}/>

        <h2>Goals Gained</h2>
      </div>
      <div className={styles.item5}>
        <h1>&5</h1></div>
      <div className={styles.item6}>
        <h1>&6</h1></div>
    </div>

  )
}
