import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Menu = ({pages}) => {
  const {pathname} = useLocation();
  console.log('history', pathname)
  return (
    <div>
      <ul>
        {pages.map(el => (
          <li key={el}>
            {pathname !== `/${el}`
              ? <Link to={`/${el}`}>{el}</Link>
              : <span>{el}</span>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;
