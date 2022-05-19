import React from 'react'
import {NavLink , useLocation} from 'react-router-dom';
//active

type AppProps = {
    name: string
    icon: string
    url: string
    path: string
}

function MenuItem(props: AppProps) {


    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (

        

        <li className="nav-item">
            <NavLink to={props.url} className={`nav-link ${splitLocation.includes(props.path) ? 'active' : '' }`}>
                <i className={`nav-icon ${props.icon}`} />
                <p>
                    {props.name}
                </p>
            </NavLink>
        </li>


    )
}

export default MenuItem