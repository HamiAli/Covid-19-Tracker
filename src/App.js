import React, { useState } from 'react';
import Navbar from './Compnents/Navbar' 
import AOS from 'aos';

import Body from './Compnents/Body';
import Footer from './Compnents/bottom';
function App() {
  const screenConfig = useState(0)
  return <>
  <div>
  <Navbar/>
  <Body currentScreen = {screenConfig[0]} />
  <Footer  screenConfig  = {screenConfig}/>
  
  </div>
  </>;
}

export default App;
