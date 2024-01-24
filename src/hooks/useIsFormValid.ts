import { Form, FormInstance } from 'antd'
import { useCallback, useEffect, useState } from 'react'

type FormValuesType = {
  [key: string]: unknown
}

/**
 * Used to determine whether the ant design form is valid since the library does not provide its own prop for the form component
 */
const useIsFormValid = <T extends FormValuesType>(form: FormInstance<T>) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [isFormTouched, setIsFormTouched] = useState(false)
  const values = Form.useWatch([], form)

  const updateFormValid = useCallback(() => {
    form
      .validateFields({ validateOnly: true })
      .then(formValues => {
        setIsFormValid(!Object.values(formValues).length)
        setIsFormTouched(form.isFieldsTouched())
      })
      .catch(() => {
        setIsFormValid(true)
        setIsFormTouched(form.isFieldsTouched())
      })
  }, [form])

  useEffect(() => {
    updateFormValid()
  }, [form, values, updateFormValid])

  return { isFormValid, isFormTouched, updateFormValid }
}

export { useIsFormValid }
