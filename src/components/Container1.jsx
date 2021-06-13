import React from 'react';
import '../csscomponents/container.css';

const Container1 = () => {
	return (
		<>
			<div className='container1'>
				<div className='leftcontainer'>
                    <h3 ><b  style={{
                         fontSize:"2rem"
                     }}>  helthy life with</b>
                        
                     <br />
                        <b style={{
                         fontSize:"3rem"
                     }}>Nature Ogranic</b>  <p   style={{
                         fontSize:"1.2rem", fontFamily: 'LibreBaskerville'
                     }}>
						Vegetables are the edible parts <br /> of a plant that is used in cooking
						or can be eaten now.
					</p>
                    <button className="container1button">Explor Now</button></h3>
					
				
				</div>
				<div className='rightcontainer'>
                    <div className="squre">
                     
                    </div>
				</div>
			</div>
		</>
	);
};

export default Container1;
