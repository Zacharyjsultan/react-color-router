import { NavLink, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      
      <Router>
        <header>
          <Route exact path="/">
            <Redirect to="/rgb/61/45/61" />
          </Route>
          <ol>
            <NavLink className="frogs" to="/rgb/50/168/82">Frogs</NavLink>
            <NavLink className="fire" to="/rgb/189/4/13">Fire</NavLink>
            <NavLink className="barney" to="/rgb/183/4/189">Barney</NavLink>
          </ol>
        </header>
        <Background />
      </Router>
    </div>
  );
}

export default App;
