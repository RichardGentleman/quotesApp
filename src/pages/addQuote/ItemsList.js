import React from "react";

import styles from "./ItemsList.module.css";

const ItemsList = (props) => {

const deleteHandler = (event) => {
    props.onDelete(event.target.id)
}
    
 const list = props.items.map(item => (
    <li className={styles.listItem} key={item.id} id={item.id} >
        <p>{item.quote}</p>
        <p>{item.author}</p>
        <button className={styles.btn} id={item.id} onClick={deleteHandler}>Delete</button>
    </li>
))  

return (
    <ul className={styles.list}>
        {list}
    </ul>
)
}

export default ItemsList;