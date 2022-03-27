import { GlassmorphismAnalogClock } from "app/core/components/atoms/clock/AnalogClock"

import styles from "../core/components/auth/authLogin.module.scss"

export default function Home() {
  return (
    <div className={styles.body}>
      <GlassmorphismAnalogClock />

      <div className={styles.container}>
        <h2 className={styles.h2}>サインインしています</h2>
      </div>
    </div>
  )
}
