
// import {Container} from '@mui/material';
// import {Employee} from "./pages/Employee";
// import {NoContent} from "./pages/NoContent";
// import {Update} from "./pages/Update";
// import {Add} from "./pages/Add";
import Jordan from './components/Jordan';
import SignIn from './components/SignIn';
import Yeezy from './components/Yeezy';
import Dunk from './components/Dunk';
import AirMax from './components/AirMax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    
     <div>
      {/* <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<SignIn />}/>
           <Route exact path="/Jordan" element={<Jordan />}/>
           <Route exact path="/Yeezy" element={<Yeezy />}/>
           <Route exact path="/Dunk" element={<Dunk />}/>
           <Route exact path="/AirMax" element={<AirMax />}/> */}
           <SignIn />
          <Jordan />
          <Yeezy />
          <Dunk />
          <AirMax />
        {/* </Routes>
      </BrowserRouter> */}
     </div>
    // </Container>
  );
}

export default App;
