import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
     
      <div className="links">
        <Link to="/account" className="link">
          Счет
        </Link>
        <Link to="/profile" className="link">
          Профиль
        </Link>
        <Link to="/logout" className="link">
          Выход
        </Link>
        
      </div>
      
    </header>
  );
};


export default Header;