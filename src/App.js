import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import 'rxjs'; 
import './App.css';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
 
import configureStore from './store/configureStore';
import Dashboard from './containers/Dashboard';
import Alert from './Alerts/Alert';
 
import materialIcons from 'material-design-icons/iconfont/material-icons.css'
import { history } from './store/history';
import CssBaseline from '@material-ui/core/CssBaseline';
 
const Login = lazy( () =>  import( './containers/authorization/Login') );
 
const store = configureStore();

const routeGuard = Component => ({match }) => {
  
  if(!store.getState().loginReducer.authenticated){
    return <Redirect to ="/login"></Redirect>
  }
  
  return <Component match={match}></Component>

}
 
class App extends Component {
  render() {
    return (
      
      <Router history={history}>
        <CssBaseline />
        <Provider store={store}>
        <Alert/> 
        
        <Suspense fallback={<div>lazy loading.....</div>}>
          <div className="App">
            
             <Switch>
           
             <Redirect exact from='/' to='/dashboard/0' />
              <Route exact path="/login" render={ (props) =>
                
                  <Login {...props}/>}>
                  </Route>
              {/* <Route exact path="/register" render={ (props) =>
              <Register {...props}/>}></Route> */}
              <Route path='/dashboard/:test' render={ routeGuard(Dashboard)} ></Route>
             
            </Switch>
          </div>
          </Suspense>
        </Provider>
      </Router>
    );
  }
}

export default App;
