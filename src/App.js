
import './App.css';

import {NavLink,Route,Routes,Link} from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">

      <ul>

        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
        <Link to="/support">support</Link>
        </li>
        
        <li>
        <Link to="/about">about</Link>
        </li>

        <li>
        <Link to="/labs">labs</Link>
        </li>

        <li>
        <Link to="/*">Invalid-Page</Link> 
        </li>

      </ul>

      <Routes>


        <Route path = "/home" element = { <Homepage/> }> </Route>

        <Route path = "/support" element = { <div> Support-Page </div>}></Route>

        <Route path = "/about" element = { <div> About-Page </div>}></Route>

        <Route path = "/labs" element = { <div> Labs-Page </div>}></Route>

        <Route path = "/*" element = { <div> Invalid-Page </div>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
