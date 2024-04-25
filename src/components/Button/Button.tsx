import { tv } from 'tailwind-variants'

const button = tv({
  base: 'font-medium bg-transparent text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-white text-black hover:bg-[#dddddd]',
      secondary: 'bg-black text-white hover:bg-[#222222]',
    },
    size: {
      sm: 'px-4 py-1 text-[15px] h-[32px]',
      md: 'px-6 py-2 text-[15px] h-[40px]',
      lg: 'px-8 py-3 text-[17px] h-[48px]',
    },
    outline: {
      true: 'border hover:bg-white hover:text-black',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

type Button = {
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  outline?: boolean
  className?: any
  children: any
}

const Button: React.FC<Button> = ({ color, size, outline, className, children, ...props }) => {
  return (
    <button className={`${button({ color, size, outline })} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
