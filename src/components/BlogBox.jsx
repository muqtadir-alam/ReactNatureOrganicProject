import React from 'react';
import '../csscomponents/blog.css';
const BlogBox = () => {
	return (
		<>
			<div className='blogbox'>
				<img
					src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
					alt=''
				/>
				<h3>Blog Post One</h3>
				<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod.
				</p>
                <a href="">Read More</a>
			</div>
		</>
	);
};
export default BlogBox;
