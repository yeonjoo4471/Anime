import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="ANIME GOODS 홈">
          <span className="brand-mark">
            A!
          </span>
          <strong>
            ANIME<br />GOODS
          </strong>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span>
        </button>

        <nav className={menuOpen ? 'is-open' : ''} aria-label="주요 메뉴">
          <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
          <NavLink to="/goods" onClick={closeMenu}>GOODS</NavLink>
          <Link to="/?section=about" onClick={closeMenu}>ABOUT</Link>
        </nav>

        <p className="header-label">
          ANIME GOODS<br />SELECT SHOP
        </p>
      </div>
    </header>
  )
}

export default Header
