import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <span className="footer-brand__mark">
          A!
        </span>
        <div>
          <strong>ANI GOODS</strong>
          <p>ANIME GOODS SELECT SHOP</p>
        </div>
      </div>

      <p className="footer-message">좋아하는 작품의 순간을 나만의 컬렉션으로 간직해 보세요.</p>

      <nav className="footer-nav" aria-label="하단 메뉴">
        <Link to="/">HOME</Link>
        <Link to="/goods">GOODS</Link>
        <Link to="/?section=about">ABOUT</Link>
      </nav>
    </div>
    <div className="footer-bottom">
      <p>© 2026 ANI GOODS. PORTFOLIO PROJECT.</p>
      <p>COLLECT YOUR FAVORITE MOMENT.</p>
    </div>
  </footer>
)

export default Footer
