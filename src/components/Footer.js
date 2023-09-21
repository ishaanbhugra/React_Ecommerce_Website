import React from 'react'
import {
    MDBFooter,
    MDBContainer, 
    // MDBCol,
    // MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return ( 
    <>
    {/* <div>Footer</div> */}
<footer>
    <MDBFooter className='bg-light text-center text-white mt-2' >
{/* style={{position: "relative",
    left: "0",
    bottom: "0",
    width: "100%",}} */}
    {/* style={{position: "absolute", bottom: "0", left: "0", right: "0"}} */}

    
      <MDBContainer className='p-1 pb-0'>
        <section className='mb-1'>
          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn> */}

          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn> */}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://www.google.co.in/'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fabIcon='instagram' />
          </MDBBtn> */}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/ishaan-bhugra-a1b563213'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/ishaanbhugra'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-1 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 2023 : 
        <NavLink to="/" color='blue' >
        ISHAAN ONLINE STORE
        </NavLink>
      </div>
    </MDBFooter>
    </footer>






    {/* <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
    </ul>
  </footer> */}
    </>
  )
}

export default Footer