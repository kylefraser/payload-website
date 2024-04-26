import { useState } from 'react'
import { Error } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<{
  register: any
  setValue: any
  getValues: any
  errors: any
}> = ({
  name,
  label,
  width,
  register,
  setValue,
  getValues,
  required: requiredFromProps,
  errors,
}: any) => {
  const [checked, setChecked] = useState(false)

  const isCheckboxChecked = getValues(name)

  return (
    <Width width={width}>
      <div>
        <div>
          <input
            type="checkbox"
            {...register(name, { required: requiredFromProps })}
            checked={isCheckboxChecked}
          />
          <button
            type="button"
            onClick={() => {
              setValue(name, !checked)
              setChecked(!checked)
            }}
          >
            <span>z</span>
          </button>
          <span>{label}</span>
        </div>
        {requiredFromProps && errors[name] && checked === false && <Error />}
      </div>
    </Width>
  )
}
