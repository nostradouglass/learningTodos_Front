import React, { Children, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type navProps = {
    children: React.ReactNode
}

const NavHeader = (props: navProps) => {


    return (
        <div>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="/" className="navHeader">
              Dev Learning Todos
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/mongo">Todo List (Mongo)</Link>
              </li>
              {/* <li>
                <Link to="/postgres">Todo List (Sql)</Link>
              </li> */}
            </ul>
          </div>
        </nav> 
        {props.children}
        </div>
    )

}

export default NavHeader