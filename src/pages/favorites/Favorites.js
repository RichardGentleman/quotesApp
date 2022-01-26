import React, { useContext } from "react";
import FavContext from "../../store/fav-context";

import styles from './Favorites.module.css';

const Favorites = (props) => {
  let favArray = [];
  const newFav = useContext(FavContext);
  let updatedFavArray = [...newFav, ...favArray];
  favArray = updatedFavArray;
//   console.log("from favorites", favArray);

  const favItem = favArray.map(item => (
    <li className={styles.listItem} key={item.id} id={item.id} >
        <p>{item.text}</p>
        <p>{item.author}</p>
    </li>
));

  return (
    <>
      <h1>Favorites</h1>
      {favItem}
    </>
  );
};

export default Favorites;
