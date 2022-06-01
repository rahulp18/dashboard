import React from 'react'
import './chart.scss'
import {GrMoreVertical} from 'react-icons/gr'
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
import Annimate from './Annimate'


const Chart = () => {
  return (
    <div className='chart-container' >
      <div className="flex">
        <h5>Total revenue</h5>
<GrMoreVertical/>
      </div>
      <div className="chart">
      <div  style={{width:'140px',height:'auto'}} >
     <Annimate percentage={52} />
      </div>
      <h3>Total sale made today</h3>
      <h1>₹999</h1>
      <p  >
        previous transaction processing. last payment may not be include
      </p>
      </div>
      <div className="details">
        <div className="target">
       <h4>Target</h4>
       <p className='possitive'   ><MdKeyboardArrowUp/> ₹120</p>
        </div>
        <div className="target">
       <h4>Last week</h4>
       <p className='possitive'  > <MdKeyboardArrowUp/>4120</p>
        </div>
        <div className="target">
       <h4>Last month</h4>
       <p className='negative' ><MdKeyboardArrowDown/>₹620</p>
        </div>
    
      </div>
    </div>
  )
}

export default Chart