import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'
import { authHeader } from '../helpers';
import "babel-polyfill";
import config from 'config';
import jwt from 'jwt-decode'
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

function mapState(state) {
    const { user } = state.authentication;
    return { user };
  }
  
  
export default connect(mapState)(Profile);
function Profile(props) {
  const [state,setState] = React.useState({user:{}})   
  const [line,setline] = React.useState(jwt(props.user.id_token))
  const classes = useStyles();

  React.useEffect(() => {
    callApi()
      .then(response =>setState(response))
      .catch(err => console.log(err));
  },[callApi]);
  

  React.useEffect(() => {
      console.log(state)
  },[state]);


  const callApi = async () => {
    const response = await fetch(`${config.apiUrl}/users`, {
      method: 'GET',
      headers: authHeader()
    });
    const body = await response.json();
    setState(body)
    return body
  };


  

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" >
      <Grid 
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      
      >
        <Grid item xs={6}>
          <Avatar src={line.picture} className={classes.bigAvatar} />

        </Grid>
   
       
       
        </Grid>

        <Grid container spacing={2}
        alignItems="center"
        justify="center">

      

      </Grid>
      <Grid container spacing={2}
        alignItems="center"
        justify="center">
              <Grid container spacing={2}
        alignItems="center"
        justify="center">

        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>Line Account :</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>{line.name}</Paper>
        </Grid>



        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>Username :</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>{state.user.username}</Paper>
        </Grid>

      </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>firstName :</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{state.user.firstName}</Paper>
        </Grid>

      </Grid>


      <Grid container spacing={2}
        alignItems="center"
        justify="center">

        <Grid item xs={6}>
          <Paper className={classes.paper}>lastName:</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{state.user.lastName}</Paper>
        </Grid>

      </Grid>

    
      <Grid container spacing={2}
        alignItems="center"
        justify="center">

        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>Email :</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>{state.user.email}</Paper>
        </Grid>

      </Grid>






        </Container>
    </div>
  );
}
