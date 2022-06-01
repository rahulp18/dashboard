import React from 'react'
import './Sidebar.scss'
import dashImg from '.././../assets/dash.png'
import {FaUserTie,FaWarehouse} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {GiTruck,GiEcology} from 'react-icons/gi'
import {AiOutlineBarChart,AiOutlineLogout} from 'react-icons/ai'
import {MdNotifications} from 'react-icons/md'
import {SiWorldhealthorganization} from 'react-icons/si'
import {GrSettingsOption} from 'react-icons/gr'
 
 
import {CgProfile} from 'react-icons/cg'

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="top">
            <h3 className='logo'  > RAHUL Pradhan</h3>
        </div>
        <div className="center">
            <div className="main">
               <img src={dashImg} alt='dashboard' className='dashImage' /> <h4>Dashboard</h4>
            </div>
            <div className="box-container">
              <p>Lists</p>
              <div className="box">
                <div className="flex item">
<FaUserTie /> User
                </div>
                <div className="flex item">
<FaWarehouse /> Poducts
                </div>
                <div className="flex item">
<FiPhoneCall /> orders
                </div>
                <div className="flex item">
<GiTruck /> Delivery
                </div>
              </div>
               

          </div>
          <div className="box-container">
              <p>Useful</p>
              <div className="box">
                <div className="flex item">
<AiOutlineBarChart /> Stats
                </div>
                <div className="flex item">
<MdNotifications /> Notification
                </div>
              </div>
               

          </div>
          <div className="box-container">
              <p>Services</p>
              <div className="box">
                <div className="flex item">
<SiWorldhealthorganization /> Syatem health
                </div>
                <div className="flex item">
<GiEcology /> Logs
                </div>
                <div className="flex item">
<GrSettingsOption /> Settings
                </div>
              </div>
               

          </div>
          <div className="box-container">
              <p>Users</p>
              <div className="box">
                <div className="flex item">
<AiOutlineLogout /> Logout
                </div>
                <div className="flex item">
<CgProfile /> Profile
                </div>
            
              </div>
               

          </div>
        </div>
        <div className="bottom"> 
        <div className="container ">
          <div className="color-picker"></div>
          <div className="color-picker"></div>
          <div className="color-picker"></div>

        </div>
        </div>
    </div>
  )
}

export default Sidebar