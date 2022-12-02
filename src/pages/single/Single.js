import React from 'react'
import "./single.scss"
import SideBar from '../../component/sidebar/SideBar'
import NavBar from '../../component/navbar/NavBar'
import Chart from '../../component/chart/Chart'
import Tables from '../../component/table/Tables'

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className='single-container'>
        <NavBar />
        <div className='top'>
          
          <div className='left'>
            <h1 className="title">Information</h1>
            <div className='item'>
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 23444 563</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Elton Str, Mapia</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='right'> */}
            <Chart />
          {/* </div> */}
        </div>
        <div className='bottom-side'>
          <div className='title'>Last Transaction</div>
          <Tables />
        </div>
      </div>

    </div>
  )
}

export default Single