import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from 'react-auth-kit';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import createStore from 'react-auth-kit/createStore';
import './index.css';
import { Container, Header} from './sections/index.js'
import { Home, OmOs, Kontakt, Login, Orders } from './pages/index.js'

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
});

function App() {
  return (
    <>
        <Router>
            <Header />
            <AuthProvider store={store}>
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
            </AuthProvider>
        </Router>
     
    </>
  );
}

export default App;
