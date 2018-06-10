import React from 'react';

const Navigation = function () {
  return (
    <div className='nav-container'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <a href='/' className='nav-list-item-link'>App</a>
        </li>
        <li className='nav-list-item'>
          <a href='/manage_account/register' className='nav-list-item-link'>Register</a>
        </li>
        <li className='nav-list-item'>
          <a href='/manage_account/users' className='nav-list-item-link'>Users</a>
        </li>        
      </ul>
    </div>
  );
};

export default Navigation;
