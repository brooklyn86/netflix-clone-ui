import React from 'react';
import './index.css';
// import { Container } from './styles';

function TopMenu({black}) {
  return (
    <header className={black ? 'header--black' : ''}>
        <div className="header--logo">
            <a href="#" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" />
            </a>
        </div>
        <div className="header--user">
            <a href="#" >
                <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png" />
            </a>
        </div>
    </header>
  );
}

export default TopMenu;