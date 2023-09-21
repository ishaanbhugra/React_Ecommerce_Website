import { TextField } from '@mui/material'
import React from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form'

const Contact = () => {


const {control} =useForm()


  return (
    <>
    <h1 style={{textAlign:"center"}}>CONTACT US</h1>
    <iframe title='a' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.563848658778!2d77.21098910021762!3d28.629491105187427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1692536075652!5m2!1sen!2sin" style={{width:"100%", height:"450", border:'0', allowFullScreen:"", loading:"lazy", referrerPolicy:"no-referrer-when-downgrade"}}></iframe>
    <br/><br/>

<div style={{textAlign:"center", border:"2px solid black", padding:"30px", width:"80%", margin:"auto"}}>
  <FormProvider>
  <Form method='post' action='https://formspree.io/f/mgejkokp'>
    <TextField placeholder='Username' name='username' required autoComplete='off'/>
    <br/><br/>
    <TextField placeholder='Email Id' name='email' type='email' required autoComplete='off'/>
    <br/><br/>
    <TextField placeholder='Enter your message here' name='message' required />
    <br/><br/>
    <button type='submit' style={{display: "inlineBlock",
  borderRadius: "4px",
  backgroundColor: "navy",
  /* #f4511e; */
  border: "none",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: "15px",
  padding: "20px",
  width: "200px",
  transition: "all 0.5s",
  cursor: "pointer",
  margin: "5px",}}>SUBMIT</button>
  </Form>
  </FormProvider>
</div>






    </>
  )
}

export default Contact