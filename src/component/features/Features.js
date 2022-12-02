import React from 'react'
import "./features.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Features = () => {
  return (
    <div className='feature'>

<div className='top'>
    <h1 className='title'>Total Revenue</h1>
    <MoreVertIcon className='icon' />
</div>
<div className='bottom'>
    <div className='feature-chart'>
        <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
    </div>
    <p className='title'>Total sales made today</p>
    <p className='amount'>$420</p>
    <p className='desc'>Previous transaction processing. Last payment may not be included</p>
    <div className='summary'>
        <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
                <ArrowDownwardIcon  className="icon" />
                <div className='resultAmount'>$12.4</div>
            </div>
        </div>
        <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
                <ArrowDownwardIcon  className="icon" />
                <div className='resultAmount'>$78.1</div>
            </div>
        </div>
        <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
                <ArrowDownwardIcon  className="icon" />
                <div className='resultAmount'>$43.2</div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Features