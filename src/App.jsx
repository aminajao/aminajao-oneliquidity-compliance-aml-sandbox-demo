import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import { Amlsingletxn } from './pages/Amlsingletxn';
import { Amlsinglewallet } from './pages/Amlsinglewallet';
import { Amlbatchwallet } from './pages/Amlbatchwallet';
import { Analytic } from './pages/Analytic';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aml/txn/single" element={<Amlsingletxn />} />
        <Route path="/aml/wallet/single" element={<Amlsinglewallet />} />
        <Route path="/aml/wallet/batch" element={<Amlbatchwallet />} />
        <Route path="/aml/analysis">
          <Route path=":analysisId" element={<Analytic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
