import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Flights from './views/Flights'
import Hotels from './views/Hotels'
import RentCars from './views/RentCars'

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/flights" element={<Flights></Flights>}></Route>
          <Route path="/hotels" element={<Hotels></Hotels>}></Route>
          <Route path="/rent-cars" element={<RentCars></RentCars>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;