import React, { useContext } from "react";
import FavContext from "../../store/fav-context";

import styles from './FavoriteQuotes.module.css';

const FavoriteQuotes = () => {
    const favItems = useContext(FavContext);

    const favQuotes = favItems.map((quote) => {
        return (
          <div className={styles.favoriteItemBox} key={quote.id} id={quote.id}>
              <p>{quote.text}</p>
              <p>{quote.author}</p>
          </div>
        );
      });

return<>
<h2>Favorite</h2>
<div className={styles.wrapper}>{favQuotes}</div>
</>
}

export default FavoriteQuotes;