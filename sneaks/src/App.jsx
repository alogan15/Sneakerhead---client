import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jordan from './components/Jordan';
import SignIn from './components/SignIn';
import Yeezy from './components/Yeezy';
import Dunk from './components/Dunk';
import AirMax from './components/AirMax';
import {Container} from '@mui/material';
import {Employee} from "./pages/Sneakerhead";
import Update from './pages/Update';




const App = () => {
  return (

      <Container maxWidth="md">
        <Router>
          <Routes>
                <Route path="/" element={<Employee />} />
                <Route path="/update/:id" element={<Update />} />
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



// import './App.css';
// import Menu from './components/Menu';
// import Categories from './components/Categories';
// import items from './components/Data';
// import React, { useState } from "react";

// //only get unique categories from the list
// const allCategories = ['all',...new Set(items.map((item)=> item.category))]


// function App() {
//   const[menuItems,setMenuItems] = useState(items);
//   const [categories,setCategories] = useState (allCategories);

//   const filterItems = (category) => {
//     if(category === 'all'){
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category)
//     setMenuItems(newItems)
//   }
//   return <main>
//     <section className="menu section">
//     <div className='title'>
//       <h2>Menu</h2>
//       <div className='underline'></div>
//     </div>
//     <Categories categories={categories} filterItems={filterItems}/>
//     <Menu items={menuItems}/>
//     </section>

//   </main>;
// }

// export default App;