import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login.jsx';
import UcusSecimi from './UcusSecimi.jsx';
import KoltukSec from './KoltukSec.jsx';
import Odeme from './Odeme.jsx';
import RezervasyonOnay from './RezervasyonOnay.jsx';

function App() {
  const flightDetails = {
    departure: 'IST',
    arrival: 'YEI',
    date: '2024-01-10',
    departureTime: '15:00',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ucussecimi" element={<UcusSecimi />} />
        <Route path="/koltuksec" element={<KoltukSec />} />
        <Route
          path="/odeme"
          element={<Odeme flightDetails={flightDetails} selectedSeats={['E19']} />}
        />
        <Route path="/rezervasyon_onay" element={<RezervasyonOnay />} /> { }
      </Routes>
    </Router>
  );
}

export default App;
