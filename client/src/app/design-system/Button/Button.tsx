type ButtonType = 'button' | 'submit' | 'reset' | undefined
interface Props {
  children: React.ReactNode
  handleClick?: () => void
  styles: string
  type?: ButtonType
  title: string
  disabled?: boolean
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.handleClick}
      className={`${props.styles}`}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
