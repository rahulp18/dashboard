import React from 'react'
import {  Main, Sidebar } from '../../components'
import './home.scss'
const Home = () => {
  return (
 <div className="home-container">
   <Sidebar/>
   <Main/>
 </div>
  )
}

export default Home