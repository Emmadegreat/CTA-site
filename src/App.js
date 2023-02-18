import './components/styles/app.css';
import './components/pages/header.js'

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './components/pages/about';
import Account from './components/pages/account';
//import { AnimationOnScroll } from 'react-animation-on-scroll';
import Contact from './components/pages/contact';
import Detail from './components/pages/detail';
import Error404 from './components/pages/404';
import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Logout from './components/pages/logout';
import Register from './components/pages/register';
import { useSelector } from 'react-redux';

//import image from './components/images/CWW-Tech-Africa.png'

function App() {

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerHeight <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);


  const islogged = useSelector((state) => state.login.isLoggededin);
  return (
    <Router>


        <Header />

        {/*<AnimationOnScroll animateIn='animate__fadeInLeftBig'>*/}

      {/*</AnimationOnScroll>482comments*/}


      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={ <Error404 />} />
          <Route path='/contact' element={<Contact />} />
          {!islogged && <Route path='/login' element={<Login />} />}
          <Route path='/register' element={ < Register /> } />
          {!islogged && <Route path='/account' element={<Account />} />}
          {islogged && <Route path='/logout' element={<Logout />} />}
        </Routes>
      </div>

      <Footer year = {new Date().getFullYear()} />

    </Router>
  );
}

export default App;
