import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom';
import { TITLE } from '../../config/title';
import { RootState } from '../../store/ConfigureStore';
import { addWindowClass, removeWindowClass } from '../../utils/helpers';
import MainFooter from './main-footer/MainFooter';
import MenuHeader from './menu-header/MenuHeader';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import UserPanel from './user-panel/UserPanel';

function Main() {

    
    const user = useSelector((state: RootState) => state.user.data)


    React.useEffect(() => {
        removeWindowClass('register-page');
        removeWindowClass('login-page');
        removeWindowClass('hold-transition');

        addWindowClass('sidebar-mini');

        return () => {
            removeWindowClass('sidebar-mini');
        };
    }, []);

    //document.body.className = 'hold-transition sidebar-mini layout-fixed'


    return (
        <>
            <div className="wrapper">
                {/* Navbar */}
                <MenuHeader />
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <NavLink to="/" className="brand-link">
                        <img src={`${process.env.PUBLIC_URL}/assets/logo/irdrmuti_cri.png`} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">{TITLE.NameFull}</span>
                    </NavLink>
                    <div className="sidebar">
                        <UserPanel name={`${user.user_firstname_th} ${user.user_lastname_th}`} />

                        {/* Sidebar Menu */}
                        <MenuSidebar role={user.role} />
                        {/* /.sidebar-menu */}
                    </div>
                </aside>
                {/* Content Wrapper. Contains page content */}
                <Outlet />
                {/* /.content-wrapper */}
                <MainFooter />
            </div>


        </>
    )
}

export default Main