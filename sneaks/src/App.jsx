import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jordan from './components/Jordan';
import SignIn from './components/SignIn';
import Yeezy from './components/Yeezy';
import Dunk from './components/Dunk';
import AirMax from './components/AirMax';
import {Container} from '@mui/material';
import {Employee} from "./pages/Employee";


const App = () => {
  return (

      <Container maxWidth="md">
      <Router>
        <Routes>
          <Route path="/" element={<Employee />} />
         
        
              <Route path="/SignIn" element={<SignIn />} />
                
             
              <Route path="/Jordan" element={<Jordan />} />
                
              
              <Route path="/Yeezy" element={<Yeezy />} />
                
             
              <Route path="/Dunk" element={<Dunk />} />
               
              
              <Route path="/AirMax" element={<AirMax />} />            
              
        </Routes>
      </Router>
     
    </Container>

      
     
  );
}

export default App;
