import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {SaibaMais} from './components/SaibaMais';
import {Depoimentos} from './components/Depoimentos';
import {Contact} from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SaibaMais/>
      <Depoimentos/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
