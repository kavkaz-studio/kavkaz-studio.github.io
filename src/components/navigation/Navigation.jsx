import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ClickAwayListener } from '@mui/material'

import FormInput from '../form-input/form-input.component'

import { links } from './links'

import './navigation.scss'

const Navigation = ({ home }) => {

    const [toggleNav, setToggleNav] = useState(null)
    const [openedLogin, setOpenedLogin] = useState(null)
    const [inputValues, setInputValues] = useState({
        login: "",
        password: ""
    })

    const location = useLocation().pathname

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputValues({ ...inputValues, [name]: value })
    }

    return (
        <>
            <div className="navigation-wrap">
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <div className="logo-wrapper">
                            <img className="logo" src={home.icon} alt="logo" onClick={() => setOpenedLogin(true)} />
                            <h1>Kavkaz Studio</h1>
                        </div>
                        <div className="nav-horizontal">
                            {links.map(({ name, to, text }, i) => {
                                if (name === "home") {
                                    return <Link key={i} to={to}>
                                        <img className="home-icon" src={`https://img.icons8.com/material-outlined/30/${location.replace("/kavkaz-studio/", "") === "" ? "e6e3d0" : "cfbeac"}/home--v2.svg`} alt="homeIcon" />
                                    </Link>
                                }
                                return <Link key={i} to={to} style={location.replace("/kavkaz-studio/", "") === name ? { color: "#e6e3d0" } : null}>{text}</Link>
                            })}
                        </div>
                        <div className="nav-open-button" onClick={() => setToggleNav(true)}>
                            <img src="https://img.icons8.com/ios-glyphs/30/e6e3d0/menu--v1.svg" />
                        </div>
                    </div>
                </div>
                <div style={{ display: toggleNav ? "flex" : "none" }} className="nav-vertical" onClick={() => setToggleNav(false)}>
                    {links.map(({ name, to, text }, i) => {
                        if (name === "home") {
                            return <Link key={i} to={to}>
                                <img className="home-icon" src={`https://img.icons8.com/material-outlined/30/${location.replace("/", "") === "" ? "e6e3d0" : "cfbeac"}/home--v2.svg`} alt="homeIcon" />
                            </Link>
                        }
                        return <Link key={i} to={to} style={location.replace("/", "") === name ? { color: "#e6e3d0" } : null}>{text}</Link>
                    })}
                </div>
                <Outlet />
            </div>
            {openedLogin && <div className="sign-in">
                <ClickAwayListener onClickAway={() => setOpenedLogin(false)}>
                    <div className="sign-in-wrapper">
                        <h2>Вход Админа</h2>
                        <FormInput name="login" label="Логин" value={inputValues.login} onChange={handleChange} />
                        <FormInput name="password" type="password" label="Пароль" value={inputValues.password} onChange={handleChange} />
                        <Link className="admin-link" to={inputValues.login === home.admin.login && inputValues.password === home.admin.password ? "/admin" : ""}>Вход</Link>
                    </div>
                </ClickAwayListener>
            </div>
            }

        </>
    )
}

export default Navigation