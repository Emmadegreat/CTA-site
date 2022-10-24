import './components/styles/app.css';
import './components/pages/header.js'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import Header from './components/pages/header';
import React from 'react';
import image from './components/images/CWW-Tech-Africa.png'

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='app'></div>

        <img src={image} alt="" style={{ 'width': '100px', 'height': '100px' }} />


      <div className="App">
        {/*<AnimationOnScroll animateIn='animate__fadeInLeftBig'>*/}
          <p>Cww Tech Africa web site clonned with react</p>
         {/*</AnimationOnScroll>*/}
      </div><br /><br /><br />


    </React.Fragment>
  );
}

export default App;
