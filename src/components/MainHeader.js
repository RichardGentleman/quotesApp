import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <h1 className={classes.headerTitle}>Inspirational Quotes</h1>
        <ul>
          <li>
            <NavLink to="/quotes" className={classes.link} activeClassName={classes.active}>Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/quotes/favorites" className={classes.link} activeClassName={classes.active}>Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/addquote" className={classes.link} activeClassName={classes.active}>Add Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
