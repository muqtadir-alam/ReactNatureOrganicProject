import React from 'react';
import "../csscomponents/footer.css"

const Footer = () => {
	return (
		<>
            <div className='footer' id="Contact">
                <div className="first-container">
                    <div className="logo">
                <img   src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" />
            
                        <h1>organic</h1>
                        </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor </p>
                    <hr  className="line"/>
                    <p>© Copyright 2020 Nature</p>
                </div>
                <div className="second-container">
                    <h3>Information</h3>
                    <hr className="line" />
                    <ul>
                        <a href=""><li>About Us</li></a>
                        <a href=""><li>Products</li></a>
                        <a href=""><li>Products</li></a>
                        <a href=""><li>Contact Us</li></a>
                        
                        
                      
                    </ul>
                </div>
                <div className="third-container">
                    <h3>Follow Us</h3>
                    <hr className="line" />
                    <div className="socialicon">
                        <a href=""><img src="https://www.nicepng.com/png/detail/940-9402277_facebook-icon-link-facebook-white-icon.png" alt="" /></a>
                        <a href=""><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" /></a>
                        <a href=""><img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="" /></a>
                        <a href=""><img src="https://i.pinimg.com/originals/d2/e5/3e/d2e53ea31ec15e6a8129008563713de5.png" alt="" /></a>
                    </div>
                </div>
			</div>
		</>
	);
};
export default Footer;