import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jordan from './components/Jordan';
import SignIn from './components/SignIn';
import Yeezy from './components/Yeezy';
import Dunk from './components/Dunk';
import AirMax from './components/AirMax';
import Maximage from './airMaxViews/OffWhiteblk';
import {Container} from '@mui/material';
import {Employee} from "./pages/Sneakerhead";
import Update from './pages/Update';
import Kasina from './airMaxViews/Kasina';
import Rainbow from './airMaxViews/Rainbow';
import Neon from './airMaxViews/Neon';
import OffWhitewhte from './airMaxViews/OffWhitewhte';
import Concepts from './airMaxViews/Concepts';
import OnesRed from './jordanViews/OnesRed';
import Elevens from './jordanViews/Elevens';
import Sixes from './jordanViews/Sixes';
import OnesBlue from './jordanViews/OnesBlue';
import Twos from './jordanViews/Twos';
import Threes from './jordanViews/Threes';

const App = () => {
  return (

      <Container maxWidth="md">
        <Router>
          <Routes>
                <Route path="/" element={<Employee />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/SignIn" element={<SignIn />} />
                    {/* Goes to that sneaker inventory */}
                <Route path="/Jordan" element={<Jordan />} />
                <Route path="/Yeezy" element={<Yeezy />} />
                <Route path="/Dunk" element={<Dunk />} />
                <Route path="/AirMax" element={<AirMax />} /> 
                    {/* Goes to that sneaker image */}
                <Route path="/maximage" element={<Maximage />} />
                <Route path="/Kasina" element={<Kasina />} />    
                <Route path="/Rainbow" element={<Rainbow />} />   
                <Route path="/Neon" element={<Neon />} />  
                <Route path="/OffWhitewhte" element={<OffWhitewhte />} />  
                <Route path="/Concepts" element={<Concepts />} />   
                <Route path="/OnesRed" element={<OnesRed />} />   
                <Route path="/Elevens" element={<Elevens />} /> 
                <Route path="/OnesBlue" element={<OnesBlue />} /> 
                <Route path="/Sixes" element={<Sixes />} /> 
                <Route path="/Twos" element={<Twos />} /> 
                <Route path="/Threes" element={<Threes />} /> 
          </Routes>
        </Router>
    </Container>

     
  );
}

export default App;


