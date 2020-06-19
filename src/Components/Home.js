import React from 'react';
import ProfilePic from '../Assets/jack-meyer-pic.jpg'

const Home = () => {
    return (
        <div id="Home" className="home">        
            <img className="profile-pic" src={ProfilePic} alt="Jack-Meyer"/>
            <h2 className="profile-pic-heading">Jack Meyer</h2>
            <ul className="profile-blurb">
                <li className="profile-blurbs">Web Developer</li>
                <li className="profile-blurbs">Experience in Digital Marketing & IT</li>
                <li className="profile-blurbs">Proud father of two awesome kids</li>
            </ul>
        </div>
    );
};

export default Home;