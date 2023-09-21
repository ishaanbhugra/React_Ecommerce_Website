// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Login from './Login';
import SignUp from './Signup';
import ProductEntry from './ProductEntry';
import Footer from './components/Footer';
import Payment from './Payment';
import PaymentSuccessful from './PaymentSuccessful';

function App() {

  const theme = {
    colors: {
      bg: "#000",
    },
  }


  return (
    <>
      <ThemeProvider theme={theme}>


        <BrowserRouter>
          <GlobalStyle />
          <Header />
          
          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/paymentsuccessful' element={<PaymentSuccessful />}></Route>


            <Route path='*' element={<ErrorPage />}></Route>



            <Route path='/productentry' element={<ProductEntry />}></Route>

          </Routes>
          <Footer />

        </BrowserRouter>
        
      </ThemeProvider>
      
      


    </>
  );
}

export default App;
