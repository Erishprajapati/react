// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
//way 1 to write function 
// function App(){
//   return(
//     <div>
//       <Navbar />
//       <Footer />
//     </div>
//   )
// }
// export default App;
//Way 2: 
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Footer/>
//     </div>
//   )
// }
// export default App;

//creating normal class 
// class App{

// }

//in react.js
// import React from 'react';
// class App extends React.Component {
// render(){
//   return(
//     <>
//     <h1>Hello world</h1>
//     </>
//   )
// }
// }
// export default App;

// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Class-based component</h1>
//       </>
//     );
//   }
// }

// export default App;
import './App.css';
import Navbar from './components/Navbar';
// import Card from './components/card';
import Studentinfo from './components/studentinfo';
const App = () =>{
  return(
    <>
  <Navbar />
  <Studentinfo name="Erish" age={20}/>
  {/* <Card name="Cloud Kitchen"/>
  <Card name="Inventory management" />
  <Card name="Freelancing" />
  <Card name="Salary notification"/>
  <Card name="Attendance system"/>
  <Card  name="E-library "/> */}
    </>
  )
}
export default App;