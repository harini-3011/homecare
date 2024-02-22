import { useState } from 'react';
import "../assets/css/user/profile.css";
import Img from "../assets/images/profile.jpeg"
import Icon from "../assets/images/editicon.png";
import {Link} from "react-router-dom";

function Profile() {
    const [editMode, setEditMode] = useState(false); 
    const initialUserDetails = {
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        gender: "Male",
        dob: "1990-01-01",
        image: Img
    };

    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handleEditClick = () => {
        setEditMode(true); 
    };

    const handleSaveClick = () => {
        
        setEditMode(false); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [name]: value
        }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            image: URL.createObjectURL(file) 
        }));
    };

    return (
        <div className="profile-container">
            <div className="image">
                <img src={userDetails.image} alt="Profile Image" className='profile-image'/>
                {editMode && (
                    <div className="edit-overlay">
                        <label htmlFor="file-upload">
                            <img src={Icon} alt="Edit Icon" className="edit-icon" />
                        </label>
                        <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                )}
            </div>
            
            <div className="mainpart">
            
                <div className="details">
                    <div className='left'>
                    <div className="detail-field">
                        <label htmlFor="name">Name:</label>
                        <br></br>
                        {editMode ? (
                            
                            <input type="text" id="name" name="name" className="editinput"value={userDetails.name} onChange={handleChange} />
                        ) : (
                            <div>{userDetails.name}</div>
                        )}
                    </div>
                    <div className="detail-field">
                        <label htmlFor="email">Email:</label>
                        <br></br>
                        {editMode ? (
                            <input type="email" id="email" name="email" className="editinput" value={userDetails.email} onChange={handleChange} />
                        ) : (
                            <div>{userDetails.email}</div>
                        )}
                    </div>
                    <div className="detail-field">
                        <label htmlFor="age">Age:</label>
                        <br></br>
                        {editMode ? (
                            <input type="number" id="age" name="age" className="editinput"value={userDetails.age} onChange={handleChange} />
                        ) : (
                            <div>{userDetails.age}</div>
                        )}
                    </div>
                    </div>
                    <div className='verticalline'></div>
                    <div className='right'>
                    <div className="detail-field">
                        <label htmlFor="gender">Gender:</label>
                        <br></br>
                        <br></br>
                        {editMode ? (
                            <select id="gender" name="gender" className="dropdown"value={userDetails.gender} onChange={handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        ) : (
                            <div>{userDetails.gender}</div>
                        )}
                    </div>
                    <div className="detail-field">
                        <label htmlFor="dob">Date of Birth:</label>
                        <br></br>
                        {editMode ? (
                            <input type="date" id="dob" name="dob" className="editinput"value={userDetails.dob} onChange={handleChange} />
                        ) : (
                            <div>{userDetails.dob}</div>
                        )}
                    </div>
                    </div>
                    <div className='button-container'>
                    {editMode ? (
                        <button onClick={handleSaveClick} className='saveedit'>Save</button>
                    ) : (
                        <button onClick={handleEditClick} className='saveedit'>Edit</button>
                        
                    )}
                    <button className='saveedit'><Link className="edithome"to="/nav">Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
