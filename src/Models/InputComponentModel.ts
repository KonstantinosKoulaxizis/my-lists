import { IconBaseProps } from 'react-icons'

interface InputComponentModel {
  inputType: string
  inputValue: string
  inputIcon: IconBaseProps
  inputChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export default InputComponentModel
