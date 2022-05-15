import React, { useState } from "react"
import format from "date-fns/format"
import getDate from "date-fns/getDate"
import getDay from "date-fns/getDay"
import eachDayOfInterval from "date-fns/eachDayOfInterval"
import endOfWeek from "date-fns/endOfWeek"
import eachWeekOfInterval from "date-fns/eachWeekOfInterval"
import addMonths from "date-fns/addMonths" // 追加
import subMonths from "date-fns/subMonths" // 追加
import startOfMonth from "date-fns/startOfMonth"
import endOfMonth from "date-fns/endOfMonth"
import styles from "./calendar.module.scss"

const getCalendarArray = (date) => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })
  return sundays.map((sunday) => eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) }))
}

const Calendar = () => {
  const [targetDate, setTargetDate] = useState(new Date())
  const calendar = getCalendarArray(targetDate)
  return (
    <div className={styles.calendarContainer}>
      <div>
        <button
          className={styles.button}
          onClick={() => setTargetDate((current) => subMonths(current, 2))}
        >
          ＜
        </button>
        <button
          className={styles.button}
          onClick={() => setTargetDate((current) => subMonths(current, 1))}
        >
          前の月
        </button>
        <button className={styles.button} onClick={() => setTargetDate(new Date())}>
          今月
        </button>
        <button
          className={styles.button}
          onClick={() => setTargetDate((current) => addMonths(current, 1))}
        >
          次の月
        </button>
        <button
          className={styles.button}
          onClick={() => setTargetDate((current) => addMonths(current, 2))}
        >
          ＞
        </button>
      </div>
      {format(targetDate, "y年M月")}
      <thead>
        <tr>
          <th className={styles.th}>日</th>
          <th className={styles.th}>月</th>
          <th className={styles.th}>火</th>
          <th className={styles.th}>水</th>
          <th className={styles.th}>木</th>
          <th className={styles.th}>金</th>
          <th className={styles.th}>土</th>
        </tr>
      </thead>
      <table className={styles.calendar}>
        <tbody>
          {calendar.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map((date) => (
                <td className={styles.tb} key={getDay(date)}>
                  {getDate(date)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
