import React, { useState, useEffect } from 'react';

const MyBooks = ({ searchTerm }) => {
  const [mybooks, setMybooks] = useState(() => {
    return JSON.parse(localStorage.getItem('mybooks-list')) || [];
  });
  const [readStates, setReadStates] = useState([]);

  useEffect(() => {
    setReadStates(new Array(mybooks.length).fill(false));
  }, [mybooks]);

  useEffect(() => {
    localStorage.setItem('mybooks-readStates', JSON.stringify(readStates));
  }, [readStates]);

  useEffect(() => {
    localStorage.setItem('mybooks-list', JSON.stringify(mybooks));
  }, [mybooks]);

  const toggleRead = (index) => {
    setReadStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const deleteBook = (index) => {
    setMybooks(prev => prev.filter((_, i) => i !== index));
    setReadStates(prev => prev.filter((_, i) => i !== index));
  };

  const allRead = mybooks.length > 0 && readStates.every(state => state === true);

  const filteredBooks = mybooks.filter(({ title, author }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {mybooks.length === 0 ? (
        <div className = "message1">No books added yet</div>
      ) : (
        <>
          {allRead && <div className = "message1">You've read all your books</div>}
          <div className="books">
            {filteredBooks.length === 0 ? (
              <p>No books found</p>
            ) : (
              filteredBooks.map(({ img, title, author }, index) => (
                <div key={title}>
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{author}</p>
                  <button onClick={() => toggleRead(index)}>
                    {readStates[index] ? "Read" : "Unread"}
                  </button>
                  <button onClick={() => deleteBook(index)} style={{ marginLeft: '8px' }}>
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooks;
