import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import { FORM_ERROR } from "app/core/components/Form"

export function TweetForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="text" label="Text" placeholder="Text" />
      <LabeledTextField name="emotion" label="Emotion" placeholder="感情" />
    </Form>
  )
}
