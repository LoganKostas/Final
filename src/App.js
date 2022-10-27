import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Recommendations from './Recommendations'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/recommendations' element={<Recommendations/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            
          </Routes>
         
        </div>
      </BrowserRouter>
    )
  }
}
