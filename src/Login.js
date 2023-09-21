import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


import { useLoginContext } from './contextAPI/LoginContext';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink color="inherit" to="/">
        ISHAAN ONLINE STORE
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login(){

const navigate = useNavigate();


  //   const onSubmit = (val) => {

  //     let postData = [...data, val];
  //     localStorage.setItem("myData2", JSON.stringify(postData));
  //     console.log(postData)
  // };

  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   let tem = localStorage.getItem("myData2");

  //   setData(JSON.parse(tem) || []);
  // }, []);
  // React.useEffect(() => {

  // }, [data]);

  const { register, formState, reset } = useForm()
  const { isSubmitSuccessful } = formState

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });

  //     const mydata={
  //         email: data.get('email'),
  //         password: data.get('password'),
  //       };

  // localStorage.setItem('mydata',JSON.stringify(mydata));

  //   };









  // const verify=localStorage.getItem("myData")
  // console.log("login component",verify?.firstName())




  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

// const onSubmit=(val)=>{
//   console.log(val,":::::::::")
// }

const[emailMobile,setEmailMobile]=React.useState("");
const[password,setPassword]=React.useState("");
// const[login,setLogin]=React.useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();

    

    fetch(`http://localhost:7000/users?emailMobile=${emailMobile}`).then((res) => {
      return res.json();
    }).then((resp) => {
      if (!resp?.length) {
        alert("Invalid User ID.")
      }
      if (resp[0]?.password === password) {
        
        alert("Logged-in successfully.");
        setLoggedIn()
        navigate('/');
        // Please set user logged in true
        console.log(isSubmitSuccessful,"rere")
      }
      else {
        alert('Please enter valid password.');
      }
    }).catch((err) => {
      console.log("testjson", err.message);
    })
  
}

// const login=(loggedin)=>{
//   loggedin:true
// }

const {setLoggedIn , loggedin} = useLoginContext()
React.useEffect(()=>{console.log("FSADf", loggedin)},[loggedin])

React.useEffect(()=>{console.log("gege", isSubmitSuccessful)},[isSubmitSuccessful])


 const a =()=>{}
  return (
    <>
<body style={{backgroundColor: "rgb(198, 253, 255)", }}>
    <form onSubmit={handleSubmit}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{backgroundColor:"rgb(198, 253, 255)", color:"black"}}>
              Sign in
            </Typography>
            {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address/Mobile No."
              name="email"
            //   autoComplete="email"
              autoFocus
            /> */}
                <TextField
                  // error={errors.lastName}
                  {...register("emailMobile", { required: true })}
                  // aria-invalid={errors.email ? "true" : "false"}
                  // placeholder="Last Name"
                  // autoComplete="family-name"
                  fullWidth
                  id="emailMobile"
                  label="Email Address/Mobile No."
                  autoFocus
                  required
                  value={emailMobile}
                  onChange={e=>setEmailMobile(e?.target?.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
                <TextField
                  // error={errors.lastName}
                  {...register("password", { required: true })}
                  // aria-invalid={errors.email ? "true" : "false"}
                  // placeholder="Last Name"
                  autoComplete="new-password"
                  fullWidth
                  id="password"
                  label="Password"
                  type='password'
                  autoFocus
                  required
                  value={password}
                  onChange={e=>setPassword(e?.target?.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel {...register("checkbox2")}
                  control={<Checkbox value="rememberYES" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // setLoggedIn={loggedin}
                // onClick={setLoggedIn}
                // onClick={isSubmitSuccessful ? setLoggedIn : a}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2"> */}
                  <NavLink to='/signup'>
                    Don't have an account? Sign Up
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </form>


    </body>
    </>
  );
}