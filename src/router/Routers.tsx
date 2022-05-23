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
import { routerPath } from '../utils/routerpath';

import Logout from '../screen/0-Auth/Logout';
import Docme from '../screen/1-Docme/Docme';
import Certifydoc from '../screen/2-Certifydoc/Certifydoc';
import Sign from '../screen/3-Sign/Sign';
import Account from '../screen/admin/0-Account/Account';
import Certifier from '../screen/admin/1-Certifier/Certifier';
import Doc from '../screen/admin/2-Doc/Doc';
import UserAuthen from '../components/UserAuthen';
import DocmeCreate from '../screen/1-Docme/DocmeCreate';
import CertifierCreate from '../screen/admin/1-Certifier/CertifierCreate';









function Routers() {

    const data = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter  >
            <Routes>
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/login/callback" element={<AuthLogin />} />
                <Route path="/" element={<PrivateRoute authentication={data.auth} />}>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<Navigate to={routerPath.DocMe} />} />
                        <Route path={routerPath.DocMe} element={<UserAuthen children={<Docme />} />} />
                        <Route path={`${routerPath.DocMe}/create`} element={<UserAuthen children={<DocmeCreate />} />} />
                        <Route path={routerPath.CertifyDoc} element={<UserAuthen children={<Certifydoc />} />} />
                        <Route path={routerPath.Signature} element={<UserAuthen children={<Sign />} />} />
                        <Route path={routerPath.Account} element={<UserAuthen children={<Account />} />} />
                        <Route path={routerPath.Certifier} element={<UserAuthen children={<Certifier />} />} />
                        <Route path={`${routerPath.Certifier}/create`} element={<UserAuthen children={<CertifierCreate />} />} />
                        <Route path={routerPath.Document} element={<UserAuthen children={<Doc />} />} />
                        <Route path="/error" element={<UserAuthen children={<>error</>} />} />
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