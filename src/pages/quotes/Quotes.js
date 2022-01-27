import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import FavContext from '../../store/fav-context';
import QuoteItem from "./QuoteItem";
import FavoriteQuotes from "./FavoriteQuotes";

import styles from "./Quotes.module.css";

const favoriteItemsArray = [{text: 'Default Favorite Quote.', author: 'Unknown', id: "x1"}];

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [fav, setFav] = useState(favoriteItemsArray);
  
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }, []);

  const moveToFavoritesHandler = (item) => {
    setFav(item);
  }

  const filterDuplicate = favoriteItemsArray.filter(item => item.id === fav.id);
  filterDuplicate.length < 1 && favoriteItemsArray.push(fav); 
  const filteredEmpty = favoriteItemsArray.filter(item => item.text);

  const allQuotes = quotes.map((quote, index) => {
    return (
      <QuoteItem
        text={quote.text}
        author={quote.author}
        key={index}
        id={index}
        onMoveToFavorite={moveToFavoritesHandler}
      />
    );
  });

  return (
    <>
      <h1>Quotes</h1>
      <FavContext.Provider value={filteredEmpty}>
      <Route path="/quotes/favorites">
        <FavoriteQuotes />
      </Route>
      </FavContext.Provider>
      <div className={styles.wrapper}>{allQuotes}</div>
    </>
  );
};

export default Quotes;
