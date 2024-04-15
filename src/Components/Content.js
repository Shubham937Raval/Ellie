import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import SettingsPage from './SettingsPage'

const Content = () => {
  return (
    <div className="content">
      <Router>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/contact" element={<ContactUs/>} />
              <Route exact path='/setting' element={<SettingsPage/>}/>
              {/* Add more routes for other pages */}
            </Routes>
            {/* <Content /> */}
          </Router>
    </div>

  )
}

export default Content
