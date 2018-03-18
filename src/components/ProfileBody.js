import React from 'react';
import './ProfileBody.css';

const ProfileBody = (props) => {
    return (
        <div className="bodycontents">
           {props.children} 
        </div>
    );
};

export default ProfileBody;