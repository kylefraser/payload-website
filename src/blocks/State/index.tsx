import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { stateOptions } from './options'
import { Error } from '../Error'
import { Width } from '../Width'

export const State: React.FC<{
  control: any
  errors: any
}> = ({ name, label, width, control, required, errors }: any) => {
  return (
    <Width width={width}>
      <div>
        <label htmlFor={name}>{label}</label>
        <Controller
          control={control}
          rules={{ required }}
          name={name}
          defaultValue=""
          render={({ field: { onChange, value } }: any) => (
            <ReactSelect
              instanceId={name}
              options={stateOptions}
              value={stateOptions.find((t) => t.value === value)}
              onChange={(val) => onChange(val?.value)}
              classNamePrefix="rs"
              id={name}
            />
          )}
        />
        {required && errors[name] && <Error />}
      </div>
    </Width>
  )
}
