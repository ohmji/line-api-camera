import React from 'react';
import { BrowserRouter, Router, Route, Switch, Redirect  } from 'react-router-dom';
import { history } from './helpers';
import Login from './pages/Login'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { userActions } from './actions';
import Confirm from './pages/Confirm'
import HomePage from './pages/Homepage'
import SignUp from './pages/SignUp'
import { PrivateRoute } from './components';
import profile from './pages/Profile'

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#2979ff' },
    type: 'light',
  }
});


function mapState(state) {
  const { loggingIn,loggedIn } = state.authentication;
  return { loggingIn,loggedIn  };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};
export default connect(mapState, actionCreators)(App);



function App() {
 

  return (
    <div className="App">
  <MuiThemeProvider theme={theme}>
    
  <BrowserRouter>

  <Router Router history={history}>

            <Switch>
            <PrivateRoute exact path="/" component={profile} />
            <PrivateRoute exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/check" component={HomePage} />
            <Route path="/confirm/:id" component={Confirm} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/" />
            </Switch>
     
            </Router>
  </BrowserRouter>
  </MuiThemeProvider>
    </div>
   
  );
}

