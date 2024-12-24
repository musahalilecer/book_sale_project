import React from "react";
import "../style/CreateBook.css"
import Button from "../component/Button";

const CreateBook = () => {

    const handleSubmit = () => {

    }
    
  return (
    <div className="createbook-container">
      <div className="createbook-header">
        <h2>Create Book Page</h2>
      </div>
      <div className="createbook-body">
        <form className="createbook-form">
            <label htmlFor="text">Book Image</label>
            <input
             type="text"
             id="book-image"
             placeholder="Book Image"
             
             />
          <label htmlFor="text">Book Name</label>
          <input
            type="text"
            id="book-name"
            placeholder="Book Name"
            typeof="form-input"
          />
          <label htmlFor="text">Book Author</label>
          <input
            type="text"
            id="book-author"
            placeholder="Author Name"
            typeof="form-input"
          />
          <label htmlFor="number">Book Page</label>
          <input
            type="text"
            id="book-page"
            placeholder="Book Page"
            typeof="form-input"
          />
          <label htmlFor="text">Book Language</label>
          <input
           type="text"
           id="book-language"
           placeholder="Book Language"
           typeof="form-input"
           />
          <label htmlFor="text">Book Genre</label>
          <textarea
           name="" 
           id="book-genre"
           placeholder="Book Genres"
           typeof="text"
           ></textarea> 
           <Button 
           text={"Submit"}
            color={"blue"}
            width={"200px"}
            height={"35px"}
            fontSize={"15px"}
            onClick={handleSubmit()}
           />
        </form>
      </div>
    </div>
  );
  
};

export default CreateBook;
