import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import About from './About'

const AppContainer = () => {
  return (
    <>
      <Header />
        <div className='app-container'>
          <Content/>
          <Router>
            <Routes>
              <Route path="/" exact component={<Home/>} />
              <Route path="/about" component={<About/>} />
              <Route path="/contact" component={<ContactUs/>} />
              {/* Add more routes for other pages */}
            </Routes>
            {/* <Content /> */}
          </Router>
        </div>
      <Footer />
    </>

  )
}

export default AppContainer
