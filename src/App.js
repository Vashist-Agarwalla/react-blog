import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import Post from './containers/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './containers/Loading';

function App() {
  return (
    <Router>
      <div className="App">
      <Route path='/' exact component={Loading} />
        <NavBar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/post' component={Post} />
        </Switch>
        {/* <Home /> */}
        {/* <Post /> */}
      </div>
    </Router>
  );
}

export default App;
