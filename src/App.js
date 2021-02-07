import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './common/NavBar.jsx';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
