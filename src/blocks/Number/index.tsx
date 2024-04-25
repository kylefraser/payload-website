import React from 'react'
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form'
import { Error } from '../Error'
import { Width } from '../Width'

export const Number: React.FC<{
  register: UseFormRegister<FieldValues & any>
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
}> = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width}>
      <div>
        <label htmlFor={name}>{label}</label>
        <input type="number" id={name} {...register(name, { required: requiredFromProps })} />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  )
}
