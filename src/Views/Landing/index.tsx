import { useNavigate } from 'react-router-dom'

import './Landing.scss'

function Landing() {
  const navigate = useNavigate()

  const handleBoToList = () => {
    navigate('../list')
  }

  return (
    <div className="App">
      <button onClick={handleBoToList}>Go to list</button>
    </div>
  )
}

export default Landing
