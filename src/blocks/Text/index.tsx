import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<{
  register: any
  errors: any
}> = ({ name, label, width, register, required: requiredFromProps, errors }: any) => {
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
