import Navbar from './Components/Navbar';
import Card from './Components/card';
import img1 from './Assets/images/5e80e6e8ba31bac89eff08d1452f9e72.jpg';
import img2 from './Assets/images/b6cd50dba39b5f053ba86bb32bd16609.jpeg';
import img3 from './Assets/images/ed8113cc799969015dbfef4d376fe97f.jpg';
const App = () => {
  return(
    <>
    <Navbar />
    <div className="container mt-3">
      <div className="row">
    <Card pic={img1}/>
    <Card pic={img2}/>
    <Card pic={img3} />
    </div>
    </div>

    </>
  )
}
export default App;