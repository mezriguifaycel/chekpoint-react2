
import Coord from './Components/Coord'
import Addresse from './Components/Addresse'
import ProfilePhoto from './Components/ProfilePhoto'

   {/* <h1 style={{color:"blue",textAlign:'center'}}>Mes Coordonneés</h1> */}
function App() {
  return (
   
  <div className="Container">
   
   <h1>Profile Personel</h1>
   <ProfilePhoto />
    <Coord/>
    <Addresse/> 
    </div>

  );
}

export default App;
