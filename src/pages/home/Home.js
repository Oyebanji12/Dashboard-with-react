import React from 'react'
import SideBar from '../../component/sidebar/SideBar'
import NavBar from '../../component/navbar/NavBar'
import Widget from '../../component/widget/Widget'
import Features from '../../component/features/Features'
import Chart from '../../component/chart/Chart'
import Tables from '../../component/table/Tables'

import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <SideBar />

        <div className='home-container'>
            <NavBar />
            <div className='widgets'>
                <Widget type="user" />
                <Widget type="earning" />
                <Widget type="balance" />
                <Widget type="order" />
            </div>
            <div className='charts'>
              <Features />
              <Chart />
            </div>
            <div className='list-container'>
              <div className='listTitle'>Latest Transaction</div>
              <Tables />

            </div>
        </div>
    </div>
  )
}

export default Home