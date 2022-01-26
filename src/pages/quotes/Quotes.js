import React, { useState, useEffect } from "react";

import QuoteItem from "./QuoteItem";
import styles from "./Quotes.module.css";

const Quotes = (props) => {
  const [quotes, setQuotes] = useState([]);

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

  // const filtered = quotes.filter(item => item.author === "Thomas Edison");

  const allQuotes = quotes.map((quote) => {
    const randomNumber = (Math.random()*1643).toString();
    return (    
    <QuoteItem
      text={quote.text}
      author={quote.author}
      key={randomNumber}
      id={randomNumber}
    />
  )});

  return (
    <>
      <h1>Quotes</h1>
      <div className={styles.wrapper}>
        {allQuotes}              
      </div>
    </>
  );
};

export default Quotes;
