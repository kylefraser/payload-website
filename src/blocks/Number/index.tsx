import { Error } from '../Error'
import { Width } from '../Width'

export const Number: React.FC<{
  register: any
  errors: any
}> = ({ name, label, width, register, required: requiredFromProps, errors }: any) => {
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
