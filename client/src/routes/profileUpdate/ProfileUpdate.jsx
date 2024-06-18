import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profileUpdate.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import CloudinaryUploadWidget from '../../components/uploadWidget/UploadWidget';

const ProfileUpdate = () => {
  
    const { currentUser, updateUser } = useContext(AuthContext);

    const [error, setError] = useState("");

    const [avatar, setAvatar] = useState(currentUser.avatar);

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        try {
           const response = await apiRequest.put(`/users/${currentUser.id}`, 
           {username, email, password, avatar}); 

            updateUser(response.data);
            navigate('/profile');
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    };
  
    return (
        <section className='profileUpdatePage'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input
                        id="username"
                        name="username"
                        type="text"
                        defaultValue={currentUser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={currentUser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <button>Update</button>
                    {
                        error && <span>{error}</span>
                    }
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar || '/profile-icon.webp'} alt="" className="avatar" />
                <CloudinaryUploadWidget 
                    uwConfig={
                        {
                            cloudName: "drudu1lol", 
                            uploadPreset: "estate",
                            multiple: false,
                            maxImageFileSize: 200000, // 2Mb
                            folder: "avatars"
                        }
                    }
                    setAvatar={setAvatar}
                />
            </div>
        </section>
    );
};

export default ProfileUpdate;