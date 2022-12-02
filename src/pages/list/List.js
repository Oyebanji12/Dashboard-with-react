import React from 'react'
import "./list.scss"
import SideBar from "../../component/sidebar/SideBar"
import NavBar from '../../component/navbar/NavBar'
import DataTable from '../../component/datatable/DataTable'


const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div  className='list-container'>
        <NavBar />
        <DataTable />
      </div>

    </div>
  )
}

export default List