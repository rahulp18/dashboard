import React from 'react'
import {BiSearchAlt,BiMessage} from 'react-icons/bi'
import {AiOutlineGlobal} from 'react-icons/ai'
import {TbMoon} from 'react-icons/tb'
import {BsListStars} from 'react-icons/bs'
import {MdLightMode,MdOutlineNotifications} from 'react-icons/md'

import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="search">
        <div className="search-box">
        <input type='text' placeholder='Search...' />
<BiSearchAlt/>
        </div>


      </div>
      <div className="menu">
   
<p><AiOutlineGlobal/>English</p>  
<span><TbMoon/></span>
<span><MdLightMode/></span>
<span className='parrent' ><MdOutlineNotifications/><div className="badge">2</div></span>
<span className='parrent'><BiMessage/><div className="badge">3</div></span>
<span><BsListStars/></span>
<div className="profile-image">
  <img src='https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-21.jpeg?resize=770%2C963&ssl=1' alt='profile image' />
</div>

      </div>
    </div>
  )
}

export default Navbar