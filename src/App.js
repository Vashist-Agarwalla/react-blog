import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import Post from './containers/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
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
