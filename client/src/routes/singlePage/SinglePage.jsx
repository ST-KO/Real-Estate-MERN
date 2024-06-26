import React, { useContext, useState } from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import { redirect, useLoaderData } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest';

const SinglePage = () => {
  
  const {currentUser} = useContext(AuthContext);

  const posts = useLoaderData();

  const [postSaved, setPostSaved] = useState(posts.isSaved);

  const handleSavePost = async () => {
    // AFTER REACT 19, UPDATE THIS TO USEOPTIMISTIK HOOK
    setPostSaved(prevValue => !prevValue);

    // If user is not logged in when saving posts, redirect to login page
    if(!currentUser) {
      redirect('/login');
    }
    
    try {
      await apiRequest.post("/users/save", {postId: posts.id});
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={posts.images} />
          <div className="info">

            <div className="top">
              <div className="post">
                <h1>{posts.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{posts.address}</span>
                </div>
                <div className="price">${posts.price}</div>
              </div>

              <div className="user">
                <img src={posts.user.avatar} alt="" />
                <span>{posts.user.username}</span>
              </div>
            </div>

            <div 
              className="bottom" 
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(posts.postDetail.desc)}}>
            </div>

          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {
                  posts.postDetail.utilities === "owner" ?
                  <p>Owner is responsible</p> :
                  <p>Tenant is responsible</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {
                  posts.postDetail.pet === "allowed" ? 
                  <p>Pet Allowed</p> :
                  <p>Pet Not Allowed</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{posts.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className='title'>Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{posts.postDetail.size}</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{posts.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{posts.bathroom} bathroom</span>
            </div>
          </div>

          <p className='title'>Nearby Places</p>
          <div className='listHorizontal'>
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{posts.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{posts.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{posts.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>

          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[posts]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button 
              onClick={handleSavePost}
              style={{
                backgroundColor: postSaved ?  "#fece51" : "white"
              }}
            >
              <img src="/save.png" alt="" />
              {
                postSaved ?  "Place Saved" : "Save the Place"
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;