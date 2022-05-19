import React from 'react'


import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Main from '../components/template/Main';

import AuthLogin from '../screen/0-Auth/Login';

import { RootState } from '../store/ConfigureStore';
import { useSelector } from 'react-redux';
import UserAuthen from '../components/UserAuthen';
import { routerPath } from '../utils/routerpath';
import Docme from '../screen/1-Docme/Docme';
import Logout from '../screen/0-Auth/Logout';








function Routers() {

    const data = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter basename="/psldev" >
            <Routes>
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/login/callback" element={<AuthLogin />} />
                <Route path="/" element={<PrivateRoute authentication={data.auth} />}>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<Navigate to={routerPath.DocMe} />} />
                        <Route path={routerPath.DocMe} element={<Docme />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}


function RequireAuth({ children }: { children: JSX.Element }) {

    const data = useSelector((state: RootState) => state.user)

    if (data.data.role !== 'admin') {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Routers