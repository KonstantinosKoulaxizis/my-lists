import { useNavigate, useParams } from 'react-router-dom'

import './TopBar.scss'

const TopBar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleGoToLists = () => {
    navigate('../list')
  }
  return (
    <div id="top-bar">
      <h1 id="logo">myLists</h1>
      {!!id && <button onClick={handleGoToLists}>Lists</button>}
    </div>
  )
}

export default TopBar
