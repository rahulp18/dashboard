import React from 'react'
import './featured.scss'
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
const Featured = () => {

  const data=[
    {name:'January',total:1500},
    {name:'Febuary',total:1320},
    {name:'March',total:2500},
    {name:'April',total:5000},
    {name:'May',total:100},
    {name:'June',total:2000},
    {name:'July',total:1500},
  ]
  return (
    <div className='featured' >
      <div className="title">Last  6 months (Revenue)</div>
<ResponsiveContainer width="100%" aspect={2/1}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
 
  <CartesianGrid strokeDasharray="3 3" className='chartgrid' />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Featured