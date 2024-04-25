import React from 'react'
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form'
import { Error } from '../Error'
import { Width } from '../Width'

export const Email: React.FC<{
  register: UseFormRegister<FieldValues & any>
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
}> = ({ name, width, label, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width}>
      <div className="bg-green-400 flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input
          className="bg-gray-100 border-[1px] border-gray-800"
          type="text"
          placeholder="Email"
          id={name}
          {...register(name, { required: requiredFromProps, pattern: /^\S+@\S+$/i })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  )
}
