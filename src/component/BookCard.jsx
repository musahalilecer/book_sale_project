import React from "react";
import PropTypes from "prop-types";
import "../style/BookCard.css";

const BookCard = ({
    book,
    onAddToBasket,
    onDelete,
    onBuy
}) => {
    return (
        <div className="book-card">
            <div className="book-card-body">
                <div className="book-info">
                    <img 
                        src={book.image || "placeholder.jpg"} 
                        alt={`${book.title || "Unknown"} Cover`} 
                        className="book-image" 
                    />
                    <h2>Book Title: {book.title || "Unknown"}</h2>
                    <h3>Book Author: {book.firstName + " " + book.lastName || "Unknown"}</h3>
                    <h4>Book Pages: {book.page || "N/A"}</h4>
                    <h4>Book Language: {book.language || "N/A"}</h4>
                    <h4>Book Genre: {book.genre || "N/A"}</h4>
                </div>
                <div className="button-side">
                    {onAddToBasket && (
                        <button 
                            className="btn btn-primary" 
                            onClick={() => onAddToBasket(book)}
                        >
                            Add to Basket
                        </button>
                    )}
                    {onDelete && (
                        <button 
                            className="btn btn-danger" 
                            onClick={() => onDelete(book)}
                        >
                            Delete
                        </button>
                    )}
                    { onBuy && (
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleBuy(book)}
                        >
                            Buy
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
/*
BookCard.propTypes = {
    book: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        pages: PropTypes.number,
        language: PropTypes.string,
        genre: PropTypes.string
    }).isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

// Default Props
BookCard.defaultProps = {
    onEdit: null,
    onDelete: null
};
*/

export default BookCard