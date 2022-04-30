import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import { FORM_ERROR } from "app/core/components/Form"

export function TweetForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="text" label="Text" placeholder="Text" />
      <LabeledTextField name="comments.text" label="Comment" placeholder="Text" />
      <ul>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="嬉しい" />
          <label htmlFor="嬉しい">嬉しい</label>
        </li>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="楽しい" />
          <label htmlFor="楽しい">楽しい</label>
        </li>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="すごい達成感だ" />
          <label htmlFor="すごい達成感だ">すごい達成感だ</label>
        </li>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="疲れた" />
          <label htmlFor="疲れた">疲れた</label>
        </li>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="悲しい" />
          <label htmlFor="悲しい">悲しい</label>
        </li>
        <li>
          <LabeledTextField name="emotion" label="" type="radio" value="敗北した気分だ" />
          <label htmlFor="敗北した気分だ">敗北した気分だ</label>
        </li>
      </ul>
    </Form>
  )
}
