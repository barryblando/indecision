import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__main">{ props.title }</h1>
      { props.subtitle && <h2 className="header__sub">{ props.subtitle }</h2> }
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;