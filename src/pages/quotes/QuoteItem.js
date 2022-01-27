import React from "react";

import styles from "./QuoteItem.module.css";

const QuoteItem = (props) => {
const moveToFavoriteHandler = () => {
  props.onMoveToFavorite(props);
}

  return (
    <div className={styles.quoteBox}>
      <p>{props.text}</p>
      <p>{props.author}</p>
      <button className={styles.btnFav} onClick={moveToFavoriteHandler}>Move to Favorites</button>
    </div>
  );
};

export default QuoteItem;
