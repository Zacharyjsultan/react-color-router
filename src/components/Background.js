import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import './Background.css';

export default function Background() {
  return (
    <>
      <header>
        <ol className="rgb">
          <NavLink className="frogs" to="/rgb/50/168/82">
            Frogs
          </NavLink>
          <NavLink className="fire" to="/rgb/189/4/13">
            Fire
          </NavLink>
          <NavLink className="barney" to="/rgb/183/4/189">
            Barney
          </NavLink>
        </ol>
        <Outlet />
      </header>
    </>
  );
}
