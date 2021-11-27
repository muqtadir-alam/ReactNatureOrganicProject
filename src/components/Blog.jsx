import React from 'react';
import BlogBox  from "./BlogBox"
// import  '../csscomponents/blog.css';

const Blog = () => {
	return (
		<>
			<div className='container2' id="Blog">
				<div className='contant'>
					<h2>Read Our Blog</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className='ractanglebox'>
					<BlogBox/>
					<BlogBox/>
					<BlogBox />
					
				</div>
			</div>
		</>
	);
};
export default Blog;
