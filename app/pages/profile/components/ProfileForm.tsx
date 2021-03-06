import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextAreaField } from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"

export function ProfileForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="name" />
      <LabeledTextAreaField name="profile" label="Profile" placeholder="profile" />
      <LabeledTextField name="email" label="Email" placeholder="email" />
    </Form>
  )
}

export default ProfileForm
