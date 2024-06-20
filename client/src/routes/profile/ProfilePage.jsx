import React, { useContext } from 'react';
import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
    
    const { currentUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            
            await apiRequest.post("auth/logout");
            navigate('/');

            // localStorage.removeItem("user");
            updateUser(null);

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
                        <Link to='/profile/update'>
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src={currentUser.avatar || "/profile-icon.webp"} alt="" /></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <Link to='/add' >
                            <button>Add New Post</button>
                        </Link>
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