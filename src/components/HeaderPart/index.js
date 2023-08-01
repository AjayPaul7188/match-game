import './index.css'

const HeaderPart = props => {
  const {score, remainingTime} = props

  return (
    <div className="header">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />

      <div className="sub">
        <p className="name">
          Score: <span className="value">{score}</span>
        </p>

        <img
          className="timer-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />

        <p className="value">{remainingTime} sec</p>
      </div>
    </div>
  )
}

export default HeaderPart
