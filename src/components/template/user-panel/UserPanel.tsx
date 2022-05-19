import React from 'react'
import { NavLink } from 'react-router-dom';


type AppPros = {
    name : string;
}

function UserPanel(props : AppPros) {
    
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={`${process.env.PUBLIC_URL}/assets/image/mock/profile.png`} className="img-circle elevation-2" alt="UserImage" />
            </div>
            <div className="info">
                <NavLink to="/" className="d-block">{props.name}</NavLink>
            </div>
        </div>
    )
}

export default UserPanel