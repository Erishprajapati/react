import Footer from './components/Footer';
import './components/form.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <h1> Form Validation</h1>
    <div className="registration">
      <form>
        <label>Name:</label><br />
        <input type="text" name="name"></input><br />
        <label>Email:</label><br />
        <input type="email" name="email"></input><br />
        <label>Number:</label><br />
        <input type="number" name="number"></input><br />
        <label>College:</label><br />
        <input type="text" name="name"></input><br />
      
      </form>

    </div>
   <button>
    Click me
   </button>
<form />

<Footer />
    </>
  )
}

export default App;