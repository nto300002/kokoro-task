import { Form, FormProps } from "app/core/components/Form"
import styles from "app/core/components/LabeledText.module.scss"
import z from "zod"
import { LabeledRangeField } from "app/core/components/LabeledRangeField"
import { LabeledTextAreaField } from "app/core/components/LabeledTextAreaField"

export function MonitoringForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div>
        <LabeledRangeField
          id="value"
          type="range"
          name="condition_meter"
          label="今日はツイてる？"
          placeholder="condition"
          step={10}
        />
        <span id="current-value"></span>
      </div>

      <LabeledRangeField
        type="range"
        name="stamina"
        label="からだの調子"
        placeholder="stamina"
        step={10}
        id="value2"
      />
      <LabeledRangeField
        type="range"
        name="feeling"
        label="こころの調子"
        placeholder="feeling"
        step={10}
        id="value3"
      />
      <LabeledRangeField
        type="range"
        name="capacity"
        label="脳のキャパシティ"
        placeholder="capacity"
        step={10}
        id="value4"
      />
      <LabeledRangeField
        type="range"
        name="stress_meter"
        label="イライラメーター"
        placeholder="stress_meter"
        step={10}
        id="value5"
      />
      <div className={styles.textareaLabel}>
        <LabeledTextAreaField
          type="text"
          name="stress_contents"
          label="●どんなイライラする事があった？"
          placeholder="あとからでも記入できます"
        />
      </div>
    </Form>
  )
}
