import './components/styles/app.css';
import './components/pages/header.js'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './components/pages/about';
import Account from './components/pages/account';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Contact from './components/pages/contact';
import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Home from './components/pages/home';
import Logout from './components/pages/logout';
import React from 'react';
import image from './components/images/CWW-Tech-Africa.png'

function App() {
  return (
    <Router>


        <Header />

        {/*<AnimationOnScroll animateIn='animate__fadeInLeftBig'>*/}

      {/*</AnimationOnScroll>*/}
      <div className="spacer"></div>

      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/account' element={<Account />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>


           <p>Cww Tech Africa web site clonned with react</p>
        <Footer/>



    </Router>
  );
}

export default App;
