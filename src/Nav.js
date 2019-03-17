import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({usersCnt, thingsCnt}) => {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink className="nav-link" to="/users">users {usersCnt}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/things">things {thingsCnt}</NavLink>
            </li>
        </ul>
    )
}

export default Nav
