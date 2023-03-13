import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListSensorComponent from './components/ListSensorComponent';

function App() {
  return (
    <div>
      <Router>
        {/* Header */}
        <div className= "container" >
          <Switch>
            <Route exact path = "/" component = {ListSensorComponent}></Route>
            <Route path = "/sensors" component = {ListSensorComponent}></Route>
          </Switch>
          <ListSensorComponent/>
        </div>
        
        {/* Footer */}
      </Router>
      
    </div>
  );
}

export default App;
