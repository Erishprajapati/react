import React from 'react';
import Navbar from './component/Navbar';
import Card from './component/Card';
import './App.css';
const App = () =>{
  return(
    <>
    <Navbar />
    <Card name ="Peace lily"/>
    <Card name ="ZZ plant"/>
    <Card name ="Pothos"/>
    <Card name ="Spider plant"/>
    <Card name ="Rubber plant"/>
    <Card name ="Snake plant"/>
    <Card name ="Monstera deliciosa"/>
    </>
  )
}
export default App;
