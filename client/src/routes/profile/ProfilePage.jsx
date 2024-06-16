import React from 'react';
import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = apiRequest.post("auth/logout");
            navigate('/');
            localStorage.removeItem("user");
        } catch (error) {
            console.log(error);
        }
    }
  
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
                        <button onClick={handleLogout}>Logout</button>
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