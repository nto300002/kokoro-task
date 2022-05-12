import { forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  name: string
  label: string
  value?: string
  type?: "text"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextAreaField = forwardRef<HTMLTextAreaElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name)

    const normalizeError = Array.isArray(error) ? error.join(".") : error || submitError

    return (
      <div {...outerProps}>
        <label>
          {label}
          <textarea {...input} disabled={submitting} {...props} ref={ref} />
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
