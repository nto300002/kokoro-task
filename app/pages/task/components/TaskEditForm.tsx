import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function TaskEditForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="タイトル" />
      <LabeledTextField
        name="concentration_time"
        type="number"
        label="Concentration_time"
        placeholder="何分頑張る？"
      />
    </Form>
  )
}
