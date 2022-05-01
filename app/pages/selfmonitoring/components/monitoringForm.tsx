import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import z from "zod"
import { FORM_ERROR } from "app/core/components/Form"

export function MonitoringForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        type="number"
        name="condition_meter"
        label="今日の調子は"
        placeholder="condition"
      />
      <LabeledTextField type="number" name="stamina" label="からだの調子" placeholder="stamina" />
      <LabeledTextField type="number" name="feeling" label="こころの調子" placeholder="feeling" />
      <LabeledTextField
        type="number"
        name="capacity"
        label="脳のキャパシティ"
        placeholder="capacity"
      />
      <LabeledTextField
        type="number"
        name="stress_meter"
        label="イライラメーター"
        placeholder="stress_meter"
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
