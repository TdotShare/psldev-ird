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
import DocmeCreate from '../screen/1-Docme/DocmeCreate';
import DocmeUpdate from '../screen/1-Docme/DocmeUpdate';

import Certifydoc from '../screen/2-Certifydoc/Certifydoc';
import CertifydocUpdate from '../screen/2-Certifydoc/CertifydocUpdate';

import Sign from '../screen/3-Sign/Sign';

import Account from '../screen/admin/0-Account/Account';
import CertifierCreate from '../screen/admin/1-Certifier/CertifierCreate';
import Certifier from '../screen/admin/1-Certifier/Certifier';
import Doc from '../screen/admin/2-Doc/Doc';
import UserAuthen from '../components/UserAuthen';
import Error404 from '../screen/error/Error';



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
                        <Route path={routerPath.DocMe} element={<UserAuthen children={<Docme />} />} />
                        <Route path={`${routerPath.DocMe}/create`} element={<UserAuthen children={<DocmeCreate />} />} />
                        <Route path={`${routerPath.DocMe}/update/:id`} element={<UserAuthen children={<DocmeUpdate />} />} />
                        <Route path={routerPath.CertifyDoc} element={<UserAuthen children={<Certifydoc />} />} />
                        <Route path={`${routerPath.CertifyDoc}/update/:id`} element={<UserAuthen children={<CertifydocUpdate />} />} />
                        <Route path={routerPath.Signature} element={<UserAuthen children={<Sign />} />} />
                        <Route path={routerPath.Account} element={<UserAuthen children={<Account />} />} />
                        <Route path={routerPath.Certifier} element={<UserAuthen children={<Certifier />} />} />
                        <Route path={`${routerPath.Certifier}/create`} element={<UserAuthen children={<CertifierCreate />} />} />
                        <Route path={routerPath.Document} element={<UserAuthen children={<Doc />} />} />
                        <Route path="/error" element={<UserAuthen children={<Error404 />} />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="*" element={<UserAuthen children={<Error404 />} />} />
                    </Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Routers