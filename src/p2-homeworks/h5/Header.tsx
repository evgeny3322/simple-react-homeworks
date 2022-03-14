import React, {useState} from 'react'
import s from './HW5.module.css'
import './Sidebar.css'
import {NavLink, useLocation, useNavigate, useParams} from 'react-router-dom'
import {PATH} from "./Routes";
import {slide as Menu} from 'react-burger-menu'

function Header() {
    const params = useLocation()
    const [open, setOpen] = useState(false)
    const onChangeFunc = (state: boolean) =>setOpen(state)
    return (
        <>
            <div>
                <Menu>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={params.pathname === '/pre-junior' ? 'active' : 'link'}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={params.pathname === '/junior' ? 'active' : 'link'}> junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={params.pathname === '/junior-plus' ? 'active' : 'link'}>junior+</NavLink>
                </Menu>
            </div>

            {/*<Menu>*/}
            {/*    <div className={params.pathname === '/junior' ? 'active' : ''}>1</div>*/}
            {/*    <div className={params.pathname === '/pre-junior' ? 'active' : ''}>2</div>*/}
            {/*    <div>3</div>*/}
            {/*</Menu>*/}
        </>

    )
}

export default Header
