import React from 'react'
import { Home,List,Login, New, Single } from './page'
import  { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
     <Router>
       <Routes>
         <Route  path='/' element={<Home/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/users' element={<List/>} />
         <Route path='/users/:id' element={<Single/>} />
         <Route path='/users/new' element={<New/>} />
       </Routes>
     </Router>
  )
}

export default App