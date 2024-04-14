import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

import './index.css';
import { Container, Header} from './sections/index.js'
import { Home, OmOs, Kontakt, Login, Orders } from './pages/index.js'

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
                <Route path='/login' element={<Login/>}/>
                <Route element={<AuthOutlet fallbackPath='/login' />}>
                  <Route path='/orders' element={<Orders/>}/>
                </Route>
    
                </Routes> 
              </Container>
        </Router>
     
    </>
  );
}

export default App;
