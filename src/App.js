import { Navigate, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import NotFound from './components/NotFound';
import Rgb from './components/Rgb';

function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path="/" element={<Navigate to="/rgb/61/45/61" />} />
        <Route path="/rgb/:r/:g/:b" element={<Rgb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
