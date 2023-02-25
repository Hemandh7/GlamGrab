import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Router/Allroutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes></Allroutes>
    </div>
  );
}

export default App;
