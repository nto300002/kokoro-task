import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import styles from "./TweetForm.module.scss"

export function TweetForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="text" label="Text" placeholder="Text" />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="嬉しい" />
          <label className={styles.label} htmlFor="嬉しい">
            嬉しい
          </label>
        </li>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="楽しい" />
          <label className={styles.label} htmlFor="楽しい">
            楽しい
          </label>
        </li>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="すごい達成感だ" />
          <label className={styles.label} htmlFor="すごい達成感だ">
            すごい達成感だ
          </label>
        </li>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="疲れた" />
          <label className={styles.label} htmlFor="疲れた">
            疲れた
          </label>
        </li>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="悲しい" />
          <label className={styles.label} htmlFor="悲しい">
            悲しい
          </label>
        </li>
        <li className={styles.li}>
          <LabeledTextField name="emotion" label="" type="radio" value="敗北した気分だ" />
          <label className={styles.label} htmlFor="敗北した気分だ">
            敗北した気分だ
          </label>
        </li>
      </ul>
    </Form>
  )
}
