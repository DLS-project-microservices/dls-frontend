import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Container, Header} from './sections/index.js'
import { Home, OmOs, Kontakt } from './pages/index.js'


function App() {
  return (
    <>
        <Router>
            <Header />
            <Container>
              <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/kontakt' element={<Kontakt/>}/>
              <Route path='/om-os' element={<OmOs/>}/>
  
              </Routes> 
            </Container>
        </Router>
     
    </>
  );
}

export default App;
