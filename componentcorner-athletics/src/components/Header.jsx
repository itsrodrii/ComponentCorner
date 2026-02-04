import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">{storeName}</h1>
      <nav className="nav-menu">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Shop</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
      {cartCount > 0 && (
        <div style={{ marginLeft: '20px' }}>
          🛒 Items in Cart: <strong>{cartCount}</strong>
        </div>
      )}
    </header>
  );
}

export default Header;
