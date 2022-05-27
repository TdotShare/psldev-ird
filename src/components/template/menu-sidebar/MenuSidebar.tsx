import React from 'react'
import { adminMenuList, userMenuList } from '../../../utils/menulist'
import MenuItem from '../../menu-item/MenuItem'


type AppProps = {
    role: string,
};



function MenuSidebar({ role }: AppProps) {



    return (
        <>
            <nav className="mt-2">

                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    {
                        userMenuList.map((el, index) => (
                            <MenuItem key={index} name={el.name} icon={el.icon} url={el.url} path={el.path} />
                        ))
                    }


                    {
                        role === "admin" ?

                            <>
                                <li className="nav-header">EXAMPLES</li>

                                {
                                    adminMenuList.map((el, index) => (
                                        <MenuItem key={index} name={el.name} icon={el.icon} url={el.url} path={el.path} />
                                    ))
                                }
                            </>

                            :

                            <></>
                    }




                </ul>
            </nav>

        </>
    )
}

export default MenuSidebar