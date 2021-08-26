import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogsDetails from './BlogsDetails';
import NotFound from './NotFound';
import Home from './Home';
import Register from './Register';
import Login from './Login';





function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetails />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
