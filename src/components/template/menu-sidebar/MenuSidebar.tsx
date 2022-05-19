import React from 'react'
import { adminMenuList, userMenuList } from '../../../utils/menulist'
import MenuItem from '../../menu-item/MenuItem'
function MenuSidebar() {
    return (
        <>

            <nav className="mt-2">

                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    {
                        userMenuList.map((el, index) => (
                            <MenuItem key={index} name={el.name} icon={el.icon} url={el.url} path={el.path} />
                        ))
                    }


                    <li className="nav-header">EXAMPLES</li>

                    {
                        adminMenuList.map((el, index) => (
                            <MenuItem key={index} name={el.name} icon={el.icon} url={el.url} path={el.path} />
                        ))
                    }

                </ul>
            </nav>

        </>
    )
}

export default MenuSidebar