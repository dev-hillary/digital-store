
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import miniCart from '../assets/mini-cart.svg';
import './Header.css';

function Header() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function handleSearch(event) {
    event.preventDefault();

    if (search.trim()) {
      window.location.href = `/produtos?busca=${encodeURIComponent(search)}`;
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-container">

          <button
            className="menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="header-logo">
            <Logo />
          </div>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" aria-label="Pesquisar">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
          </form>

          <div className="header-actions">
            <a href="/cadastro" className="register-link">
              Cadastre-se
            </a>

            <a href="/login" className="login-button">
              Entrar
            </a>

            <button
              className="mobile-search-button"
              type="button"
              aria-label="Abrir pesquisa"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            <a href="/carrinho" className="cart-link" aria-label="Carrinho">
              <img src={miniCart} alt="" />
            </a>
          </div>

        </div>

        {searchOpen && (
          <form className="mobile-search-form" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
            />

            <button type="submit" aria-label="Pesquisar">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
          </form>
        )}
      </div>

      <nav className={`navigation ${menuOpen ? 'menu-open' : ''}`}>
        <div className="mobile-menu-heading">
          <span>Páginas</span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        <div className="header-container navigation-container">

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/categories"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Categorias
          </NavLink>

          <NavLink
            to="/my-orders"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Meus Pedidos
          </NavLink>

        </div>

        <div className="mobile-menu-actions">
          <a href="/login" className="mobile-login-button">
            Entrar
          </a>

          <a href="/cadastro" className="mobile-register-link">
            Cadastre-se
          </a>
        </div>
      </nav>

      {menuOpen && (
        <button
          className="menu-overlay"
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

export default Header;
