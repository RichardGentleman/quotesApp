import React, { useState } from "react";
import Form from "./Form";
import ItemsList from './ItemsList';

import "./AddQuote.css";

const AddQuote = (props) => {
  const [itemsList, setItemsList] = useState([ {quote: 'This is Default text.', author: 'Unknowen', id: "i1"}]);

const newItemHandler = newItem => {
  setItemsList(previousItems => {
    const updatedList = [...previousItems];
    // localStorage.setItem('updatedList', JSON.stringify(updatedList));
    updatedList.unshift({quote: newItem.quote, author: newItem.author, id: Math.floor(Math.random()*1000).toString() });
    return updatedList;
  })
}

const onDeleteHandler = (data) => {
  const filtered = itemsList.filter((item) => item.id !== data);
  setItemsList(filtered);
}

  return (
    <div className="add-quote-box">
      <h1>Add Your Quote</h1>
      <Form onSubmit={newItemHandler} />
      <ItemsList items={itemsList} onDelete={onDeleteHandler}/>
    </div>
  );
};

export default AddQuote;
