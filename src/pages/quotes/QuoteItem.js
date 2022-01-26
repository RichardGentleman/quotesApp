import React from "react";

import styles from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  let locStorData = [];
  const moveToFavoriteHandler = () => {
    const filteredData = locStorData.filter((item) => item.id !== props.id);
    filteredData.push(props);
    return localStorage.setItem("sourceData", JSON.stringify(filteredData));
  };

  return (
    <div className={styles.quoteBox}>
      <p>{props.text}</p>
      <p>{props.author}</p>
      <p>{props.id}</p>
      <button onClick={moveToFavoriteHandler}>Move to Favorites</button>
    </div>
  );
};

export default QuoteItem;
