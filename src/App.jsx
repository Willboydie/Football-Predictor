import './App.css'
import footballLogo from '/footballLogo.svg'
import {useState} from 'react'

function App() {

  const [likes, setLikes] = useState(0);
  
  return (
    <>
      <div>
        <img src={footballLogo} className="logo" alt="footballLogo" />
      </div>
      <h1>Football Predictor</h1>
      <div>
        <h2>
          "Football is a {(likes > 11) ? 11 : likes}/10 sport!"
        </h2>
        <button onClick={() => setLikes((likes) => likes + 1)}>
          Click to tell us how much you like football!
        </button>
      </div>
    </>
  )
}

export default App
