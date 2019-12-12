import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { authConstants} from '../constants';
import queryString from 'query-string'
import { userActions } from '../actions';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
  }
  
  const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
  };
  
  export default connect(mapState, actionCreators)(SignIn);

  function SignIn(props) {
  const classes = useStyles();
  const [state] = React.useState({
    grant_type:'authorization_code',
    code:queryString.parse(props.location.search).code,
    redirect_uri:authConstants.LINE_CALL_BACK,
    client_id:authConstants.LINE_CHANNEL_ID,
    client_secret:authConstants.LINE_CHANNEL_SECRET,
  })

const getToken = () => {
    props.login(state)
}



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ยืนยันเข้าสู่ระบบด้วย 
        </Typography>
    
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={getToken}
            className={classes.submit}
          >
            ยืนยันเข้าสู่ระบบด้วย line
          </Button>
         
      </div>
      
    </Container>
  );
}