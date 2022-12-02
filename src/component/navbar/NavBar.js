import React from 'react'
import "./navbar.scss"
import profileImage from '../../component/image/1648287741986.jpg'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterListIcon from '@mui/icons-material/FilterList';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>

        <div className='search'>
          <input type="text" placeholder='search...' />
          <SearchIcon className='icon' />
        </div>

        <div className='items'>

          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>

          <div className='item'>
            <DarkModeIcon className='icon' />
          </div>

          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>

          <div className='item'>
            <NotificationsActiveIcon className='icon' />
            <div className='counter'>1</div>
          </div>

          <div className='item'>
            <ChatBubbleIcon className='icon' />
            <div className='counter'>2</div>
          </div>

          <div className='item'>
            <FilterListIcon className='icon' />
          </div>

          <div className='item'>
            <FilterListIcon className='icon' />
          </div>

          <div className='item'>
            <img src={profileImage} alt=""  className='avatar'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar