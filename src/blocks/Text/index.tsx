import React from 'react'
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form'
import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<{
  register: UseFormRegister<FieldValues & any>
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
}> = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width}>
      <div className="bg-gray-400 flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input
          className="bg-gray-100 border-[1px] border-gray-800"
          type="text"
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  )
}
