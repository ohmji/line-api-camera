import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import { userService } from '../services';
import { connect } from 'react-redux';
import jwt from 'jwt-decode'
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
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },

}));
function mapState(state) {
  const { user } = state.authentication;
  return { user };
}


export default connect(mapState)(HomePage);

function HomePage(props) {
  const classes = useStyles();
  const [state] = useState(jwt(props.user.id_token))
  const Update = () => {
  
    userService.getAll()

}

React.useEffect(() => {
  console.log(state)
});



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar src={state.picture} className={classes.bigAvatar} />
        <Typography component="h1" variant="h5">
          คุณ {state.name}
        </Typography>
    
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            component={Link} to="/signup"
          >
            ยังไม่ได้ลงทะเบียน
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={Update}
            component={Link} to="/"
          >
            ลงทะเบียนแล้ว
          </Button>
      </div>
      
    </Container>
  );
}