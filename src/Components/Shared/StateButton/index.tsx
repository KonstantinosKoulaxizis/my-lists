import { FunctionComponent } from 'react'
import StateButtonModel from '../../../Models/StateButtonModel'

import './StateButton.scss'

const StateButton: FunctionComponent<StateButtonModel> = ({ text, icon, activeState, action }) => {
  return (
    <button className={`state-button${activeState ? ' active-state' : ''}`} onClick={action}>
      <span className="state-button-icon">{icon}</span>
      <span className="state-button-text">{text}</span>
    </button>
  )
}

export default StateButton
