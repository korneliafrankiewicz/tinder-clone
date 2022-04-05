import React from 'react'
import './Header.scss'
import PersonIcon from '@mui/icons-material/Person'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { IconButton } from '@mui/material'
import tinder_logo from '../../Images/tinder_logo.png'

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <div className="header-logo">
          <img src={tinder_logo} alt="tinder logo" />
        </div>
      </IconButton>

      <IconButton>
        <ChatBubbleIcon className="header-icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
