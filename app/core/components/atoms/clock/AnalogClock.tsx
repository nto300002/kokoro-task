import React, { useEffect, useRef } from "react"
import styles from "./AnalogClock.module.scss"

export const GlassmorphismAnalogClock = () => {
  const hRef = useRef<HTMLDivElement>(null)
  const minRef = useRef<HTMLDivElement>(null)
  const secRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intervalID = setInterval(() => {
      const deg = 6
      let day = new Date()
      let hh = day.getHours() * 30
      let mm = day.getMinutes() * deg
      let ss = day.getSeconds() * deg

      hRef.current!.style.transform = `rotateZ(${hh + mm / 12}deg)`
      minRef.current!.style.transform = `rotateZ(${mm}deg)`
      secRef.current!.style.transform = `rotateZ(${ss}deg)`
    })

    return () => clearInterval(intervalID)
  }, [])

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.clock}>
              {/* hour hand */}
              <div className={styles.handCountainer}>
                <div ref={hRef} className={styles.hour}></div>
              </div>
              {/* minutes hand */}
              <div className={styles.handCountainer}>
                <div ref={minRef} className={styles.minutes}></div>
              </div>
              {/* seconds hand */}
              <div className={styles.handCountainer}>
                <div ref={secRef} className={styles.seconds}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
