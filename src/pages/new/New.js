import React from 'react'
import "./new.scss"
import SideBar from '../../component/sidebar/SideBar'
import NavBar from '../../component/navbar/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  return (
    <div className='new'>
      <SideBar />
      <div className='new-container'>
        <NavBar />
        <div className='tops'>
          <h1 className='title'>Add new user</h1>
        </div>
        <div className='bottom-1'>
        <div className='left'>
          <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" className='image' />
        </div>
          <div className='right'>
            <form >
            <div className='form-input '>
                <label htmlFor='file'>Image:<DriveFolderUploadIcon className='icon' /></label>
                <input type="file" id='file' className='inputForFile' />
              </div>
              <div className='form-input'>
                <label>Username</label>
                <input type="text" placeholder='john_doe' className='inputs' />
              </div>
              <div className='form-input'>
                <label>Name & Surname</label>
                <input type="text" placeholder='john  Doe' className='inputs' />
              </div>
              <div className='form-input'>
                <label>Email</label>
                <input type="email" placeholder='johndoe@gmail.com' className='inputs' />
              </div>
              <div className='form-input'>
                <label>Phone Number</label>
                <input type="number" placeholder='+1 2376 8753' className='inputs' />
              </div>
              <div className='form-input'>
                <label>Password</label>
                <input type="password" className='inputs' />
              </div>
              <div className='form-input'>
                <label>Address</label>
                <input type="text" placeholder='Elton Mayor Avenue' className='inputs' />
              </div>
              <div className='form-input'>
                <label>Country</label>
                <input type="text" placeholder='USA' className='inputs' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default New