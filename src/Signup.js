import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { Controller } from 'react-hook-form';


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

export default function SignUp() {

//   const onSubmit = (val) => {

//     let postData = [...data, val];
//     localStorage.setItem("myData", JSON.stringify(postData));
//     console.log(postData)
// };

// const [data, setData] = React.useState([]);
// React.useEffect(() => {
//   let tem = localStorage.getItem("myData");
  
//   setData(JSON.parse(tem) || []);
//   // console.log("tem",tem)//RETURNS ARRAY
// }, []);
// React.useEffect(() => {

// }, [data]);






  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     firstname: data.get('firstName'),
  //     lastname: data.get('lastName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });

  //   const mydata2 = {
  //     firstname: data.get('firstName'),
  //     lastname: data.get('lastName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   };
  //   localStorage.setItem('mydata2', JSON.stringify(mydata2));
  // };

  const { register, formState,reset } = useForm()
                        //handleSubmit,control
const {isSubmitSuccessful}=formState
// const signupData = localStorage.getItem("myData")
// console.log("signupData",signupData)

// const verify = JSON.stringify(signupData)
// console.log("verify",verify)
  // console.log("signupData",signupData?.values)
  // const verify = signupData?.map((currentElement)=>{
  //   return currentElement?.values
  // })
  // console.log(verify)





  React.useEffect(()=>{
    if(isSubmitSuccessful){
        reset()
    }
},[isSubmitSuccessful,reset])





React.useEffect(() => {
  fetch("http://localhost:7000/users").then((res) => {
      return res.json();
  }).then((resp) => {
      console.log("testjson",resp);
  }).catch((err) => {
      console.log("testjson",err.message);
  })
}, [])

const[id,setId]=React.useState("");
const[firstName,setFirstName]=React.useState("");
const[lastName,setLastName]=React.useState("");
const[emailMobile,setEmailMobile]=React.useState("");
const[password,setPassword]=React.useState("");
const[checkbox,setCheckbox]=React.useState(true);




const handleSubmit=(e)=>{
    e.preventDefault();
    // return false;

    console.log("onsubmit", {id,firstName,lastName,emailMobile,password,checkbox})

    const userData={id,firstName,lastName,emailMobile,password,checkbox};


    fetch("http://localhost:7000/users",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userData)
      }).then((res)=>{
        alert("registered successfully")
      }).catch((err)=>{
        console.log(err.message)
      })
}





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
            Sign up
          </Typography>
          
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                /> */}
                <TextField
                  // error={errors.firstName}
                  {...register("firstName", { required: true })}
                  // aria-invalid={errors.firstName ? "true" : "false"}
                  // placeholder="First Name"
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  required  
                  value={firstName}
                  onChange={e=>setFirstName(e?.target?.value)}
                />
                {/* {errors.firstName?.type === 'required' && <p className='error-msg' role="alert">First name is required</p>} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                /> */}
                <TextField
                  // error={errors.lastName}
                  {...register("lastName", { required: true })}
                  // aria-invalid={errors.lastName ? "true" : "false"}
                  // placeholder="Last Name"
                  autoComplete="family-name"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  required  
                  value={lastName}
                  onChange={e=>setLastName(e?.target?.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address/Mobile No."
                  name="email"
                //   autoComplete="email"
                /> */}
                <TextField
                  // error={errors.lastName}
                  {...register("email", { required: true })}
                  // aria-invalid={errors.email ? "true" : "false"}
                  // placeholder="Last Name"
                  // autoComplete="family-name"
                  fullWidth
                  id="email"
                  label="Email Address/Mobile No."
                  autoFocus
                  required  
                  value={emailMobile}
                  onChange={e=>setEmailMobile(e?.target?.value)}
                  type='text'
                  pattern="^(?:\d{10}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$"
                  
                />
              </Grid>
            
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
                {/* <Controller > */}
                <FormControlLabel {...register("checkbox")}
                  control={<Checkbox value="yes" color="primary"  />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  checked={checkbox}
                  onChange={e=>setCheckbox(e?.target?.checked)}
                />
                {/* </Controller> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            //   onClick = {clearText()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to='/login'>
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          {/* </Box> */}
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </form>
   

    </body>
    </>
  );


}