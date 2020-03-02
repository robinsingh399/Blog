import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts'
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';


const Home = props => {


    const SideImage = props =>{
        return (
            <div style={{height:`${props.height}px`}}>
                        <img src={props.src}/>
                    </div>
        )
    }

    const imgAr = blogData.data.map(post=>post.blogImage)

    const ImageGallery=props=>(
        <div className="gallaryPost" style={props.gallaryStyle}>
                <section style={{width:props.largeWidth}}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostImages/' + props.imagesArray[2])} alt=""/>
                    </div>
                </section>

                <section style={{width:props.smallWidth}} className="sideImageWrapper">

                    {
                        props.imagesArray.map(image =>
                            
                            <SideImage
                             height={props.sideImageHeight} 
                             src={require('../../blogPostImages/' + image)} 
                             alt=""/>

                            
                            )
                    }

                                        
                </section>
                </div>
    );


    const gallaryHeight = 400;
    const gallaryStyle={
            height:gallaryHeight+'px',
            overflow:'hidden'
        }
    
    const sideImageHeight=gallaryHeight/3;


    return (

        

        <div>
            
            <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}
                    imagesArray = {imgAr}
                />
                
               
            </Card>

            
            <Layout>
            <RecentPosts style={{width:'70%'}}/>
            </Layout>
            

            
            
            

        </div>
    );
}

export default Home;