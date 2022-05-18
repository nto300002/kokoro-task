import { useState, useEffect, useContext } from "react"
import getTask from "app/pages/task/queries/getTask"
import { useParam, useQuery } from "blitz"
import styles from "app/core/components/atoms/modalWindow/modalWindow.module.scss"
import { modalContext } from "./context/modal"
import taskStyles from "app/core/components/atoms/task/task.module.scss"

export default function CountDownTimer(props) {
  const taskId = useParam("taskId", "number")
  const [task] = useQuery(getTask, { id: taskId })
  const { startMinutes = 0, startSeconds = 0 } = props
  const [mins, setMinutes] = useState(startMinutes)
  const [secs, setSeconds] = useState(startSeconds)
  const ctx = useContext(modalContext)
  const handleModalClose = () => {
    ctx.setIsModalOpen(!ctx.modalOpen)
  }
  const handleModalOpen = () => {
    if (ctx.modalOpen) {
      ctx.setIsModalOpen(!ctx.modalOpen)
    } else {
      ctx.setIsModalOpen(ctx.modalOpen)
    }
  }
  function handleInputChange(e) {
    setMinutes(e.target.value)
  }
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1)
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval)
        } else {
          setMinutes(mins - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(sampleInterval)
    }
  })

  return (
    <>
      {!ctx.modalOpen ? (
        <div
          className={styles.overlay}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className={styles.content}>
            <h1>{task.title}のタイマーです</h1>
            <p>
              使い方：↑↓の矢印をクリックするとタイマーの時間(分)を操作できます
              <br />
              途中で時間を変更することもできます
            </p>
            <p>
              あと
              <input
                name="time"
                type="number"
                value={mins}
                onChange={handleInputChange}
                style={{ width: "35px" }}
              />
              分！！
            </p>
            {!(mins && secs) ? (
              ""
            ) : (
              <p>
                {" "}
                {mins}:{secs < 10 ? `0${secs}` : secs}
              </p>
            )}
            <button onClick={handleModalClose}>閉じる</button>
          </div>
        </div>
      ) : (
        <div className={taskStyles.content}>
          <button className={taskStyles.taskTimerButton} onClick={() => handleModalOpen()}>
            タイマー起動
          </button>
        </div>
      )}
    </>
  )
}
