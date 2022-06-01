import React from 'react'
import './widget.scss'
import {FaArrowUp,FaUserTie} from 'react-icons/fa'
import {RiTruckLine} from 'react-icons/ri'
import {GiLifeInTheBalance} from 'react-icons/gi'
import {HiCurrencyRupee} from 'react-icons/hi'
const Widget = ({type}) => {

let data;


switch (type) {
    case 'user':
        data={
            title:'Users',
            isMoney:false,
            link:'see all users',
            icon:<FaUserTie  className='icon'  style={{color:'red',background:'rgba(253, 15, 15, 0.275)'}} />
        }
        break;
        case 'orders':
        data={
            title:'orders',
            isMoney:false,
            link:'see all orders',
            icon:<RiTruckLine  className='icon'   style={{color:'goldenrod',background:'rgba(218, 165, 32, 0.303)'}} />
        }
        break;
        case 'earnings':
            data={
                title:'earnings',
                isMoney:true,
                link:'see all earnings',
                icon:<HiCurrencyRupee  className='icon'  style={{color:'green',background:'rgba(15, 255, 15, 0.275)'}} />
            }
            break;
            case 'balance':
                data={
                    title:'balance',
                    isMoney:true,
                    link:'see your balance',
                    icon:<GiLifeInTheBalance  className='icon'  style={{color:'blueviolet',background:'rgba(137, 43, 226, 0.248)'}} />
                }
                break;
        

    default:
        break;
}

  return (
    <div className='widget-box' >
        <div className="flex item">
            <p>{data.title}</p>

            <p className='possitive' ><FaArrowUp/>20%</p>
        </div>
        <div className="flex item">
            <h4>{data.isMoney && '₹' } 100 </h4>
        </div>
        <div className="flex item">
            <p className='link' >{data.link}</p>

            <p className='icon'>{data.icon}</p>
        </div>
        
    </div>
  )
}

export default Widget