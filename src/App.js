import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Background from './components/Background';
import NotFound from './components/NotFound';
import Rgb from './components/Rgb';

function App() {
  return (
    <div className="App">
      <Routes>
        <Background />
        <Route path="/" element={<Navigate to="/rgb/61/45/61" />}></Route>

        <Route path="/rgb/:r/:g/:b">
          <Rgb />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
