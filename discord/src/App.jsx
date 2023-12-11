import { useState } from 'react'
import discordLogo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'
import discordBackground from './assets/discord-background.png'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='landing-page'>
      <nav className='navbar'>
        <img src={discordLogo} className='logo' alt='Discord Logo'/>
        <img src={menuIcon} className='menu-icon' alt='menu Icon'/>
      </nav>

      <div className='headline'>
        <h1>IMAGINE A PLACE...</h1>
        </div>
        <div>
        <p className='text'>
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it easy 
          to talk every day and hang out more often.
        </p>
        </div>
        <div className='button-container'>
    <button className='button1'>Download for Mac</button>
    <button className='button2'>Open Discord in your browser</button>
        </div>

        <div className='background'>
          <img src={discordBackground} className='background-img'/>

        </div>
    </div>
    </div>

  )
}

export default App
