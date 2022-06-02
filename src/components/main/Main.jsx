import React from 'react'
import './Main.scss'
import {Navbar,Chart,Featured,Widget} from '../../components'
import Table from '../Table/Table'
 
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
<div className="tableC">
 <h4 className="title">Latest Transaction</h4>
 <Table/>
</div>
    </div>
  )
}

export default Main