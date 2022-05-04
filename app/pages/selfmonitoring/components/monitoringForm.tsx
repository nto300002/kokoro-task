import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import z from "zod"

import { LabeledRangeField } from "app/core/components/LabeledRangeField"

export function MonitoringForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <div>
        <LabeledRangeField
          id="value"
          type="range"
          name="condition_meter"
          label="今日の調子は"
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
      <LabeledTextField
        type="text"
        name="stress_contents"
        label="どんなイライラする事があった？"
        placeholder="stress_contents"
      />
    </Form>
  )
}
