import { forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"
import styles from "./LabeledText.module.scss"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  value?: string
  type?: "text" | "password" | "email" | "number" | "radio" | "color" | "range"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  min?: number
  max?: number
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse: props.type === "number" ? Number : undefined,
    })

    const normalizeError = Array.isArray(error) ? error.join(".") : error || submitError

    return (
      <div {...outerProps}>
        <label className={styles.label}>
          {label}
          <input className={styles.input} {...input} disabled={submitting} {...props} ref={ref} />
        </label>

        {touched && normalizeError && (
          <div role="alert" style={{ color: "red" }}>
            {normalizeError}
          </div>
        )}
      </div>
    )
  }
)
