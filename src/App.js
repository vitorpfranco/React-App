import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
function App() {
  return (
<Router>
  <ul>
    <li>Home</li>
    <li>Contato</li>
  </ul>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/sobre" element={<About/>}/>
    <Route path="/contato" element={<Contact/>}/>
    <Route path="/projetos" element={<Projects/>}/>
  </Routes>
</Router>
  );
}

export default App;
