import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';

const defaultItems = [
  {
    id: 1,
    checked: true,
    item: 'Almonds',
    price: 3.45,
  },
  {
    id: 2,
    checked: false,
    item: 'Ice Cream',
    price: 6,
  },
  {
    id: 3,
    checked: true,
    item: 'Chips',
    price: 2.55,
  },
  {
    id: 4,
    checked: false,
    item: 'Coffee',
    price: 12.3,
  },
];

const Contact = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  );

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    // increment the item id;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Say Hello</h3>
        <label id="itemLabel" htmlFor="addItem">
          Add Item
        </label>
        <input
          autoFocus
          type="text"
          id="itemInput"
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <input type="text" />
        <input type="text" />
        <textarea placeholder="compose your message here" />
        <button type="submit" aria-label="Add Item">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
