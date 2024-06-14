import React from 'react';
import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';

const ProfilePage = () => {
  return (
    <section className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="/favicon.png" alt="" /></span>
                    <span>Username: <b>John Doe</b></span>
                    <span>Email: <b>sdfds@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Add New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>

        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </section>
  );
};

export default ProfilePage;