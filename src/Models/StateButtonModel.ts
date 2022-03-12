import { IconBaseProps } from 'react-icons'

interface StateButtonModel {
  text: string
  icon: IconBaseProps
  activeState: boolean
  action: () => void
}

export default StateButtonModel
