import React from 'react';
import '../csscomponents/container2.css'
import Container2Box from './Container2Box'

const Container2 = () => {
	return (
		<>
			<div className='container2'>
				<div className='contant'>
                    <h2>Welcome to Nature</h2>
                    
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia magni eveniet id, voluptas illo commodi nostrum cumque
						quaerat quia aliquam cum quis illum possimus! Ut similique ullam et
						sit.
					</p>
				</div>
                <div className='ractanglebox'>
                  
                    <Container2Box />
                    <Container2Box />
                    <Container2Box />
                    <Container2Box/>
                </div>
			</div>
		</>
	);
};
export default Container2;
