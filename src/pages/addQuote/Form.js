import React, { useState } from "react";

import styles from './Form.module.css';

const Form = (props) => {
    const [newQuote, setNewQuote] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [isValid, setIsValid] = useState(true);

    const quoteHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setNewQuote(event.target.value); 
    }

    const authorHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setNewAuthor(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (newQuote.trim().length === 0) {
            setIsValid(false);            
            return;
        }
        const newQuoteData = {
            quote: newQuote,
            author: newAuthor
        }
        props.onSubmit(newQuoteData)
        setNewQuote("");
        setNewAuthor("");
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {!isValid && <p className={styles.errorMessage}>Enter valid item data!</p>}
                <label>New Quote</label>
                <input type="text" onChange={quoteHandler} value={newQuote} className={!isValid ? styles.invalid : ""} />
                <label>Author</label>
                <input type="text" onChange={authorHandler} value={newAuthor} className={!isValid ? styles.invalid : ""} />
                <button className={styles.btn} type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;