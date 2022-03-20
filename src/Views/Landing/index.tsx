import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa'

import InputComponent from '../../Components/InputComponent'
import PasswordInput from '../../Components/PasswordInput'

import './Landing.scss'

function Landing() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleChangeIsLogin = () => {
    setIsLogin(!isLogin)
  }

  const handleBoToList = () => {
    navigate('../list')
  }

  return (
    <div id="landing">
      <div id="state-change-btn">
        <button className="landing-button" onClick={handleChangeIsLogin}>
          {`Go to ${isLogin ? 'creat account' : 'login'}`}
        </button>
      </div>
      <div id="login-div">
        <h1>{isLogin ? 'Login' : 'Creat account'}</h1>
        <InputComponent
          inputType="email"
          inputValue={email}
          inputChange={handleEmail}
          inputIcon={<FaEnvelope />}
        />
        <PasswordInput inputValue={password} inputChange={handlePassword} />
        <button className="landing-button" onClick={handleBoToList}>
          {isLogin ? 'Login' : 'Creat account'}
        </button>
      </div>
    </div>
  )
}

export default Landing
