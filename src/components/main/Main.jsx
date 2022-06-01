import React from 'react'
import './Main.scss'
import {Navbar,Chart,Featured,Widget} from '../../components'
 
const Main = () => {
  return (
   
    <div className="main-container">

<Navbar/>
<div className="widget">
  <Widget type='user' />
  <Widget type='orders' />
  <Widget type='earnings' />
  <Widget type='balance' />
  
</div>
<div className="charts">
 
  <Chart/>
  <Featured/>
</div>
    </div>
  )
}

export default Main