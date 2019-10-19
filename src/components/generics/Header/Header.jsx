import React from 'react'
import './Header.scss'
import { Link, useHistory } from 'react-router-dom'
import { localStorageUtils } from 'utils'

export const Header = () => {
  const history = useHistory()

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorageUtils.setUserId('')
    history.push('/login')
  }

  return (
    <nav className="header">
      <div className="menu-logo">Be A HERO!</div>
      <div className="menu-list">
        <Link to="/organizations" className="menu-link">Organizações</Link>
        <Link to="/campaign-search" className="menu-link">Buscar campanhas</Link>
        <Link onClick={handleLogOut} to="/login" className="menu-link">Sair</Link>
      </div>
    </nav>
  )
}

