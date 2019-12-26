import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo lighten-2">
          <a href="#" className="brand-logo">Casa Do Codigo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Autores</a></li>
            <li><a href="#">Livros</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
