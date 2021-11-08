import React from 'react';
import Navbar from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/ProfileImage/ProfileImg';
import About from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
 
    <div class='container'>  <div class="row">
              <div class="col s6"><Profile/></div>
              <div class="col s6"><About/></div>
              </div></div>
              <div class='container'>  <div class="row">
              <div class="col s12"><Portfolio/></div>
              
              </div></div>
     <Footer/>
     </div>
     );
}

export default App;