import React from 'react'
import "./Components/headerfooter.css";
import Header from "./Components/header";
import Footer from './Components/Footer';
import Collection from './Components/Collection';
const App = () => {
  return (
    <div>
    <Header/>
    <Collection/>
    <Footer/>
    </div>
  )
}

export default App