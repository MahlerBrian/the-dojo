import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styles
import './App.css'

//pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Create from './pages/create/Create'
import Project from './pages/project/Project'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/project'>
              <Project />
            </Route>
          </Switch>
        </div>        
      </BrowserRouter>
    </div>
  );
}

export default App


