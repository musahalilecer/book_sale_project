import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from "../component/Footer";
import BookCard from "../component/BookCard";
import "../style/Home.css";
import { fetchBooks, deleteBook } from '../redux/actions/BookAction';
import SearchBar from '../component/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.books);

  const [searchQuery, setSearchQuery] = useState("");
  const [basket, setBasket] = useState([]); // Basket state to store selected books

  // Load books on component mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Delete a book
  const handleDeleteBook = (book) => {
    dispatch(deleteBook(book.id));
  };

  // Group books into rows of 3
  const groupBooks = (books) => {
    const grouped = [];
    for (let i = 0; i < books.length; i += 3) {
      grouped.push(books.slice(i, i + 3));
    }
    return grouped;
  };

  // Add book to basket
  const addToBasket = (book) => {
    setBasket((prevBasket) => [...prevBasket, book]);
    navigate('/basket', { state: { basket: [...basket, book] } }); // Navigate to Basket with data
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const groupedBooks = groupBooks(
    books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />
      <div className="home-header">
        <h1>Book List</h1>
      </div>
      <div className="home-body">
        {groupedBooks.map((row, rowIndex) => (
          <div className="card-books-row" key={rowIndex}>
            {row.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onAddToBasket={addToBasket} // Pass the add to basket function
                onDelete={handleDeleteBook}
                onBuy={null}
              />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
