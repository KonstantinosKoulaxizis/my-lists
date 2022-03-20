import { FunctionComponent, useState } from 'react'
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

import PasswordInputModel from '../../Models/PasswordInputModel'

import './PasswordInput.scss'

const PasswordInput: FunctionComponent<PasswordInputModel> = ({ inputValue, inputChange }) => {
  const [isPassword, setIsPassord] = useState(true)

  const handleChangeVisibility = () => {
    setIsPassord(!isPassword)
  }
  return (
    <div className="input-container">
      <FaLock />
      <div className="input-component">
        <input type={isPassword ? 'password' : 'text'} value={inputValue} onChange={inputChange} />
      </div>
      <button className='password-btn' onClick={handleChangeVisibility}>{isPassword ? <FaEye /> : <FaEyeSlash />}</button>
    </div>
  )
}

export default PasswordInput
