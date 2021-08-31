import Home from './components/Home'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import SongDetails  from './components/SongDetails';
import './App.css';

const App = () =>   (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/:song" component={SongDetails}/>
  </Switch> 
  </BrowserRouter>
  
   
  )


export default App;
