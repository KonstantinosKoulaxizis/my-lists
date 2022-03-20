import { FunctionComponent } from 'react'

import InputComponentModel from '../../Models/InputComponentModel'

import './InputComponent.scss'

const InputComponent: FunctionComponent<InputComponentModel> = ({
  inputType,
  inputValue,
  inputIcon,
  inputChange
}) => {
  return (
    <div className="input-container">
      {inputIcon}
      <div className="input-component">
        <input type={inputType} value={inputValue} onChange={inputChange} />
      </div>
    </div>
  )
}

export default InputComponent
