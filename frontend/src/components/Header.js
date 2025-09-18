import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggest, setShowSuggest] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const debounceRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggest(false);
    }
  };

  // debounce suggest
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setShowSuggest(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/search?q=${encodeURIComponent(searchQuery)}`
        );
        const data = await res.json();
        setSuggestions(Array.isArray(data) ? data : []);
        setShowSuggest(true);
      } catch {
        setSuggestions([]);
        setShowSuggest(false);
      }
    }, 250);
    return () => debounceRef.current && clearTimeout(debounceRef.current);
  }, [searchQuery]);

  const handleSelectSuggestion = (name) => {
    setSearchQuery(name);
    setShowSuggest(false);
    navigate(`/products?search=${encodeURIComponent(name)}`);
  };

  // cart count
  useEffect(() => {
    let intervalId;
    const fetchCartCount = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/cart');
        const data = await res.json();
        const count = Array.isArray(data)
          ? data.reduce((sum, item) => sum + (item.quantity || 0), 0)
          : 0;
        setCartCount(count);
      } catch {
        setCartCount(0);
      }
    };
    fetchCartCount();
    intervalId = setInterval(fetchCartCount, 5000);
    const onFocus = () => fetchCartCount();
    window.addEventListener('focus', onFocus);
    return () => {
      intervalId && clearInterval(intervalId);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            {/* logo */}
            <Link to="/" className="logo" aria-label="Kaokai Office Furniture">
  <img
    src="/logo-kaokai-wh.png"
    alt="Kaokai Office Furniture"
    className="logo-img"
  />
</Link>


            {/* search */}
            <div
              className="search-bar"
              onBlur={() => setTimeout(() => setShowSuggest(false), 150)}
            >
              <form onSubmit={handleSearch} autoComplete="off">
                <input
                  type="text"
                  placeholder="ค้นหา . . ."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => suggestions.length && setShowSuggest(true)}
                />
                <button type="submit" className="search-button" aria-label="ค้นหา">
  {/* ไอคอนเส้นบาง */}
  <svg className="icon-thin-search" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</button>

              </form>

              {showSuggest && suggestions.length > 0 && (
                <ul className="search-suggestions">
                  {suggestions.map((s) => (
                    <li
                      key={s.id}
                      onMouseDown={() => handleSelectSuggestion(s.name)}
                    >
                      <span className="suggest-name">{s.name}</span>
                      <span className="suggest-model">{s.model}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* contact pills */}
            <div className="contact-info">
              <a href="tel:0963891916" className="pill pill-green">
                <i className="fab fa-line pill-ic" aria-hidden="true" />
                <span>0963891916</span>
              </a>
              <a href="tel:0963891916" className="pill pill-red">
                <i className="fas fa-phone pill-ic" aria-hidden="true" />
                <span>0963891916</span>
              </a>
              <Link to="/contact" className="pill pill-gray">
                CONTACT
              </Link>
            </div>

            {/* actions */}
            <div className="header-actions">
              <Link to="/cart" className="cart-icon" aria-label="Cart">
                <i className="fas fa-shopping-cart" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              <Link to="/profile" className="profile-icon" aria-label="Profile">
                <i className="fas fa-user-circle" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NAV STRIP */}
      <nav className="navigation">
  <div className="container">
    <ul className="nav-menu">
      <li><Link to="/"><span className="nav-label">หน้าหลัก</span></Link></li>
      <li><Link to="/products"><span className="nav-label">สินค้า</span></Link></li>
      <li><Link to="/promotions"><span className="nav-label">โปรโมชั่น</span></Link></li>
      <li><Link to="/contact"><span className="nav-label">ติดต่อเรา</span></Link></li>
      <li><Link to="/about"><span className="nav-label">เกี่ยวกับเรา</span></Link></li>
    </ul>
  </div>
</nav>

    </header>
  );
};

export default Header;
