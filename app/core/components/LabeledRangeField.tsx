import { forwardRef, PropsWithoutRef, useEffect, useState } from "react"
import { Form, Field, useField } from "react-final-form"
import { number } from "zod"

export interface LabeledRangeFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  id: string
  name: string
  label: string
  value?: string
  type?: "range"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  min?: number
  max?: number
}

export const LabeledRangeField = forwardRef<HTMLInputElement, LabeledRangeFieldProps>(
  ({ name, label, outerProps, min, max, ...props }, ref) => {
    const rangeAsNumber = typeof Number(props.type)

    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse: rangeAsNumber ? Number : undefined,
    })

    const normalizeError = Array.isArray(error) ? error.join(".") : error || submitError

    return (
      <div {...outerProps}>
        <label>
          {label}
          <input {...input} disabled={submitting} {...props} ref={ref} />
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
