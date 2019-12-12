import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { userActions } from '../actions';
import { connect } from 'react-redux';
import useForm from 'react-hook-form'


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}


export default connect(mapState, actionCreators)(SignUp);

 function SignUp(props) {
  const classes = useStyles();
  const { register, handleSubmit} = useForm()
  const onSubmit = data => { 
      props.register(data)

   }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
          <Grid container spacing={2}>

            <Grid item xs={12} >
            <TextField
                name="username"
                variant="outlined"
                fullWidth
                id="uname"
                label="username"
                inputRef={register}
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                inputRef={register}
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                inputRef={register}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                inputRef={register}
                required
              />
            </Grid>
            
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
         
        </form>
      </div>
     
    </Container>
  );
}