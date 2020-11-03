import './App.css'; 
import 'antd/dist/antd.css';
import './styles/tailwind.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Dataelements from './components/pages/Dataelements';
import Identifiers from './components/pages/Identifiers';
import Attributes from './components/pages/Attributes';

function App() {
  return (
    <>
      <Router> 
        <Navbar/>
        <Switch> 
          <Route path='/' exact component={Home}/>
          <Route path='/dataelements' component = {Dataelements}/>
          <Route path='/identifiers' component = {Identifiers}/>
          <Route path='/attributes' component = {Attributes}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
