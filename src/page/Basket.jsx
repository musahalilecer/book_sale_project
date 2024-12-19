import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../component/BookCard'; // Reuse BookCard component
import '../style/Basket.css';

const Basket = () => {
  const location = useLocation();
  const { basket: initialBasket } = location.state || { basket: [] }; // Retrieve basket data
  const [basket, setBasket] = useState(initialBasket); // Local state for basket management

  const handleDelete = (book) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== book.id)); // Remove book locally
  };

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1>Your Basket</h1>
      </div>
      <div className="basket-body">
        {basket.length === 0 ? (
          <p className="empty-message">Your basket is empty. Add some books to see them here!</p>
        ) : (
          <div className="basket-grid">
            {basket.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                onAddToBasket={null} // Disable add-to-basket in basket view
                onDelete={() => handleDelete(book)}
                onBuy={() => handleBuy(book)}
                 // Remove from basket only
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;