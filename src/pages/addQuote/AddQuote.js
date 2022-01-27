import React, { useState } from "react";
import Form from "./Form";
import ItemsList from './ItemsList';
import { v4 as uuidv4 } from 'uuid';


const AddQuote = () => {
  const [itemsList, setItemsList] = useState([ {quote: 'This is Default text.', author: 'Unknown', id: "i1"}]);

const newItemHandler = newItem => {
  setItemsList(previousItems => {
    const updatedList = [...previousItems];
    updatedList.unshift({quote: newItem.quote, author: newItem.author, id: uuidv4() });
    return updatedList;
  })
}

const onDeleteHandler = (data) => {
  const filtered = itemsList.filter((item) => item.id !== data);
  setItemsList(filtered);
}

  return (
    <div>
      <h1>Add Your Quote</h1>
      <Form onSubmit={newItemHandler} />
      <ItemsList items={itemsList} onDelete={onDeleteHandler}/>
    </div>
  );
};

export default AddQuote;
