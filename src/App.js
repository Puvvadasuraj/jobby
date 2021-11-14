import {Switch, Route} from 'react-router-dom'
import Login from './components/login/index'
import Home from './components/Home/index'
import Jobs from './components/jobs'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import JobDescription from './components/jobDescription/index'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobDescription} />
    <ProtectedRoute component={NotFound} />
  </Switch>
)

export default App
