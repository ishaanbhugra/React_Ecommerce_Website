import React from 'react'

const About = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>ABOUT US</h1>
    
    <div class="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
    <h1 style={{textAlign: "center", marginBottom: "20px"}}>Welcome to Ishaan Online Store – Your Ultimate Shopping Destination!</h1>
        <p style={{lineHeight: '1.6'}}>At Ishaan Online Store, we redefine the way you shop by offering a curated selection of products that cater to your diverse needs and preferences. As a premier online shopping destination, we pride ourselves on delivering a seamless and enjoyable shopping experience that combines convenience, quality, and affordability.</p>
        
        <h2>Our Story:</h2>
        <p style={{lineHeight: '1.6'}}>Founded with a passion for delivering top-notch products to customers worldwide, Ishaan Online Store began its journey with a vision to become a one-stop-shop for all your shopping desires. Our founder, Ishaan, envisioned a platform where shoppers could explore an extensive range of products, from fashion and electronics to home essentials and more.</p>
        
        <h2>What We Offer:</h2>
        <ul>
            <li><strong>Diverse Product Range:</strong> Discover an unparalleled variety of products across categories such as fashion, electronics, home and kitchen, beauty, sports, and more.</li>
            <li><strong>Quality Assurance:</strong> We are committed to providing you with products of the highest quality. Each item in our collection is carefully sourced and rigorously tested to meet our stringent quality standards.</li>
            <li><strong>User-Friendly Experience:</strong> Our website is designed with your convenience in mind. Navigate easily through our intuitive interface, making your shopping journey enjoyable and efficient.</li>
            {/* <!-- Add more list items for the remaining points --> */}
        </ul>

        <p style={{lineHeight: '1.6'}}>Join us on this exciting shopping journey at Ishaan Online Store and experience the thrill of finding the perfect products that elevate your lifestyle. Whether you're shopping for yourself or looking for thoughtful gifts, we're here to cater to your needs. Thank you for choosing us as your preferred online shopping destination!</p>
        <p style={{lineHeight: '1.6'}}>Happy Shopping,<br/>The Ishaan Online Store Team</p>
        </div>
     
    </>
  )
}

export default About