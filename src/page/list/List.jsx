import React from 'react'
import { DataTable, Navbar, Sidebar } from '../../components'
import './List.scss'
import '../../components/main/Main.scss'
 
const List = () => {
  return (
    <div className='list-container' >
   <Sidebar/>
   <div className="main-container">

<Navbar/>

{/* Data Table */}
<DataTable/>
    </div>
    </div>
  )
}

export default List