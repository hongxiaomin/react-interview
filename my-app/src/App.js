import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Greeting from './pages/Greeting';
import User from './pages/User';
import WindowDimensions from './pages/WindowDimensions';
import './App.css';

function App() {
  return (
    <div className="App">
        <ul>
            <li>
                <Link to="/">User</Link>
                <Link to="/greeting">Greeting</Link>
                <Link to="/window">Window</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path = "/" component={User}/>
            <Route exact path = "/greeting" component={Greeting}/>
            <Route exact path = "/window" component={WindowDimensions}/>
        </Switch>
        {/*<Greeting  message="semlinker"/>*/}
        {/*<User name="李四" age={25}/>*/}
        {/*<WindowDimensions />*/}
    </div>
  );
}

export default App;
