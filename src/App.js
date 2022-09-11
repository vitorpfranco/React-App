import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';
import NavBar from './Components/layout/NavBar';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';

function App() {
  return (
<Router>
<NavBar></NavBar>
  <Container customClass='min-height'>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/sobre" element={<About/>}/>
    <Route path="/contato" element={<Contact/>}/>
    <Route path="/projetos" element={<Projects/>}/>
  </Routes>
  </Container>
<Footer/>
</Router>
  );
}

export default App;
