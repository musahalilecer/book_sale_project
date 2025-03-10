import React, { useState } from "react";
import "../style/CreateBook.css";
import Button from "../component/Button";
import { addBook } from "../redux/actions/BookAction";
import { useSelector, useDispatch } from "react-redux";
import DropDown from "../component/Droddown";
// import Dropdown from "../component/Droddown";

import { Dropdown } from "primereact/dropdown";
import DropDownPrime from "../component/DropDownPrime";

const CreateBook = () => {
  const dispatch = useDispatch();
  const {authors} = useSelector((state) => state.authors);

  //  const { books } = useSelector((state) => state.books);
  
  
  //const { addBook } = useSelector()
  // const book = useSelector((state) => state.books);


  console.log(authors);

  const [book, setBook] = useState({
    image: "",
    title: "",
    author: "",
    page: "",
    language: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setBook({ ...book, [name]: value });
  };

  const handleAuthorChange = (selectedAuthor) => {
    console.log(selectedAuthor);
  //  setBook({ ...book, author: selectedAuthor });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Payload:", book); // Log the payload
    try {
      const response = await dispatch(addBook(book));
      console.log("Response:", response); // Log the response
      setBook({
        image: "",
        title: "",
        author: "",
        page: "",
        language: "",
        genre: "",
      });
    } catch (error) {
      console.error("Error adding book:", error); // Log the error
    }
  };

  console.log(book);
  console.log(authors);

  return (
    <div className="createbook-container">
      <div className="createbook-header">
        <h2>Create Book Page</h2>
      </div>
      <div className="createbook-body">
        <form className="createbook-form" onSubmit={handleSubmit}>
          <label htmlFor="book-image">Book Image</label>
          <input
            name="image"
            type="text"
            id="book-image"
            placeholder="Book Image"
            onChange={handleChange}
          />
          <label htmlFor="book-name">Book Name</label>
          <input
            name="title"
            type="text"
            id="book-name"
            placeholder="Book Name"
            typeof="form-input"
            onChange={handleChange}
          />
          <label htmlFor="book-author">Book Author</label>

          {/* <Dropdown></Dropdown>
           <input
            name="author"
            type="text"
            id="book-author"
            placeholder="Author Name"
            typeof="form-input"
            onChange={handleChange}
          />  */}

          <label htmlFor="book-author">Book Author</label>
          {/* <Dropdown
            options={authors}
            onSelect={handleAuthorChange}
            placeholder="Select Author"
          /> */}

          <DropDownPrime>
            
          </DropDownPrime>

          <label htmlFor="book-page">Book Page</label>
          <input
            name="page"
            type="text"
            id="book-page"
            placeholder="Book Page"
            typeof="form-input"
            onChange={handleChange}
          />
          <label htmlFor="book-language">Book Language</label>
          <input
            name="language"
            type="text"
            id="book-language"
            placeholder="Book Language"
            typeof="form-input"
            onChange={handleChange}
          />
          <label htmlFor="book-genre">Book Genre</label>
          <textarea
            name="genre"
            id="book-genre"
            placeholder="Book Genres"
            typeof="text"
            onChange={handleChange}
          ></textarea>
          <Button
            text={"Submit"}
            color={"blue"}
            width={"200px"}
            height={"35px"}
            fontSize={"15px"}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
