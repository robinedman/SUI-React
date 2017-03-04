import React from 'react'
import Icon from '../components/Icons/Icon'
import './navbar.css'

const RepoNavbar = () => {
  return (
    <nav className="navbar navbar-repo">
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand sui-logo">SUI-React</a>
          <div className="btn-group bc-btn-navbar-group">
            <button type="button" className="btn">
              Components
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
    </nav>  
  )  
}

export default RepoNavbar