import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<{
  register: any
  rows?: number
  errors: any
}> = ({ name, label, width, rows = 3, register, required: requiredFromProps, errors }: any) => {
  return (
    <Width width={width}>
      <div className="bg-blue-400 flex flex-col">
        <label htmlFor={name}>{label}</label>
        <textarea
          className="bg-gray-100 border-[1px] border-gray-800"
          rows={rows}
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  )
}
