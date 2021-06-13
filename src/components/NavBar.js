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
             <div className="right">
                      <a href=""> <li>  Home</li></a>
                      <a href=""> <li>Product</li></a>
                      <a href=""> <li>About us</li></a>
                      <a href=""> <li>Blog</li></a>
                      <a href=""> <li>Contact</li></a>
             </div>
              </div>
              </>
    )
}


export default NavBar;