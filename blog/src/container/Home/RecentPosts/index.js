import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

const RecentPosts = (props) => {
    return (
        <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
            <div className="postImageWrapper">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=500:*"/>
            </div>

            <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Fitness mantra to live life</h2>
                    <span>posted on July 16,2016 by Sora Blogging Tips</span>
                    <p>Midst first it,you are multiply divided.There don't ,second his one given</p>
                    <button>ReadMore</button>
            </div>
        </Card>

        
        </div>
    );
}
export default RecentPosts;