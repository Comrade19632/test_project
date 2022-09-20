import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink  } from 'react-router-dom'
import style from './index.module.sass'

const Item = ({ name, icon, link, isSidebarOpened }) => {

  const checkIsActive = (isActive, path) => {
    if (path === '/' && window.location.pathname !== '/') return false
    return isActive
  }

  return (
    <li>
      <NavLink to={link} className={({ isActive }) => `${checkIsActive(isActive, link) ? style.active : ''} ${style.item}`}>
        {icon}
        <span className={classnames(style.name, {
          [style.openedSidebar]: isSidebarOpened,
        })}>
          {name}
        </span>
      </NavLink>
    </li >
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isSidebarOpened: PropTypes.bool.isRequired,
}

export default Item