import React from 'react'
import "./widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Widget = ({type}) => {
    let amount=250;
    let diff= 20;

    let data;
   
    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney:true,
                link:"see all users",
                icon:(<PersonIcon className='icon' />),
            };
            break;
            case "order":
            data={
                title:"ORDER",
                isMoney:false,
                link:"view all order",
                icon:(<ShoppingCartIcon className='icon' />),
            };
            break;
            case "earning":
            data={
                title:"EARNING",
                isMoney:true,
                link:"view net earning",
                icon:(<MonetizationOnIcon className='icon' />),
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:false,
                link:"see details",
                icon:(<AccountBalanceWalletIcon className='icon' />),
            };
          default:
            break;
    }
  return (
    <div className='widget'>
        <div className='left'>
            {/* <span className='title'>{data.title}</span>
            <span className='counter'></span>
            <span className='link'></span> */}
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && '$'} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <ArrowUpwardIcon />
                {diff}
            </div>
            {/* <PersonIcon className='icon' /> */}
            {data.icon}
        </div>

    </div>
  )
}

export default Widget