import { useState, useEffect } from "react";

export default function Generate() {
  let quotes = [
    "The only way to do great work is to love what you do.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "The only person you should try to be better than is the person you were yesterday.",
    "You miss 100% of the shots you don't take.",
    "Don't watch the clock; do what it does. Keep going."
  ];
  let random2 = Math.floor(Math.random() * quotes.length);
  let [click, setClick] = useState(quotes[random2]);
  let [count, setCount] = useState(0);
  let [store, setStore] = useState([]);
  let [isFavorite, setIsFavorite] = useState(false);

  function clicked(index) {
    setCount(index);
  }
  function generate() {
    let random = Math.floor(Math.random() * quotes.length);
    setClick(quotes[random]);
    setIsFavorite(store.includes(quotes[random]));
  }

  function toggleFavorite() {
    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  }

  function addToFavorites() {
    setStore([...store, click]);
    setIsFavorite(true);
  }

  function removeFromFavorites() {
    const updatedStore = store.filter(item => item !== click);
    setStore(updatedStore);
    setIsFavorite(false);
  }

  let kurit = {
    backgroundColor: 'white',
    color: 'rgb(227, 44, 48)',
    borderBottom: '3px solid rgb(227, 44, 48)',
  };

  return (
    <div className="main">
      <div className="homepage">
        <header className="header">
          <button onClick={() => clicked(0)} style={count === 0 ? kurit : null}>HOME</button>
          <button onClick={() => clicked(1)} style={count === 1 ? kurit : null}>FAVORITES</button>
          <button onClick={() => clicked(2)} style={count === 2 ? kurit : null}>ABOUT</button>
        </header>
        <div className="qoutesbox" style={{ display: count === 0 ? 'block' : 'none' }}>
          <div className="name">
            <p>{click}</p>
          </div>
          <div className="button-home">
            <button onClick={generate} className="generate">Generate</button>
            <button className="favorite" onClick={toggleFavorite}>
              {isFavorite ? "Delete Favorite" : "Add Favorite"}
            </button>
          </div>
        </div>
        <div style={{ display: count === 1 ? 'block' : 'none' }} className="favor">
          <h1 className="add-favorite" style={{display: store.length > 0 ? 'none' : null}}>Add you Favorite</h1>
          <ul>
            {store.map((storesmap, index) => (
              <li key={index}>{storesmap}</li>
            ))}
          </ul>
        </div>
        <div className={count === 2 ? "about-flex" : "about-none"}>
          <p>You can generate a random qoute and add it as your Favorite</p>
          <footer>
            <p>Created by @arcanist_mage</p>
          </footer>
         
        </div>
      </div>
    </div>
  );
}



      