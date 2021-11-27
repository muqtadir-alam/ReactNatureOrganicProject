import React from 'react';
import '../csscomponents/nav.css'

const NavBar = () => {
      return (
         <>
         <div className="navecontainer">
                  <div className="left">
                      <img   src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" />
             <h1>organic</h1>
             </div>
             <div className="right" id="Home">
                      <a href="#Home" > <li>  Home</li></a>
                      <a href="#Product"> <li>Product</li></a>
                      <a href="#About"> <li>About us</li></a>
                      <a href="#Blog"> <li>Blog</li></a>
                      <a href="#Contact"> <li>Contact</li></a>
             </div>
              </div>
              </>
    )
}


export default NavBar;