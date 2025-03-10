import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../redux/actions/AuthorActions"; // Redux action'ı import et

const Dropdown = () => {
  const dispatch = useDispatch();
  const { authors, loading, error } = useSelector((state) => state.authors); // Redux store'dan yazarları al

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an Author");

  useEffect(() => {
    dispatch(fetchAuthors()); // Redux ile yazarları çek
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (author) => {
    setSelectedOption(author);
    setIsOpen(false);
  };
  console.log("{1,2,3}, ", authors);
  return (
    <div className="dropdown">
      <span onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption?.firstName}
      </span>
      {isOpen && (
        <div className="dropdown-menu">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {authors.map((author) => (
              <li key={author.id} onClick={() => handleOptionClick(author)}>
                {author.firstName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;