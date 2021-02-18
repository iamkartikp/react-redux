import React from 'react';

import addImage from '../media/addImage.png';
import profilePicture from '../media/profilePic.jpg';

const Profile = () => {
    let img = 'https://m.media-amazon.com/images/M/MV5BMzQxNjk5OTEtODU4ZC00OGE3LWIzM2YtYWIyNzhjNGFkZjA3XkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_.jpg';
    return (
        <div className="profile">
            <div className="sec-one">
                <div className="secone-text">
                    <p>Favorites</p>
                    <i class="fas fa-edit"></i>
                </div>
                <div className="secone-img">
                    <img src={ img ? img : addImage } alt="" />
                    <img src={ img ? img : addImage } alt="" />
                    <img src={ addImage } alt="" />
                </div>
            </div>
            <div className="sec-two">
                <img src={profilePicture} alt={profilePicture} />
                <p>kartik patil</p>
            </div>
        </div>
    )
}

export default Profile;
