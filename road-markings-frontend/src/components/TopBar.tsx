import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="logo-circle">RM</div>
      </div>

      <div className="topbar-center">
        <div className="search-bar">
          <span className="search-placeholder">Поиск по улицам и заданиям</span>
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="topbar-right">
        {/* простое текстовое меню под видом бургер-меню */}
        <nav className="topbar-menu">
          <NavLink to="/" className="topbar-link">
            Панель
          </NavLink>
          <NavLink to="/login" className="topbar-link">
            Войти
          </NavLink>
          <NavLink to="/register" className="topbar-link">
            Регистрация
          </NavLink>
          <NavLink to="/about" className="topbar-link">
            О сервисе
          </NavLink>
        </nav>

        <button className="burger-btn" aria-label="Меню">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default TopBar;