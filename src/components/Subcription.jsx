import '../csscomponents/Subscriptions.css'



const Subscription = () => {
	return (
		<>
			<div className='Subscription'>
				<div className='contant'>
					<h2>Subscribe to Our Newsletter</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
                <div className='inputandbtn'>
                    <input type="email" placeholder="Enter your email address" />
                    <button className="btn">Subscribe</button>
                </div>
			</div>
		</>
	);
};
export default Subscription;
