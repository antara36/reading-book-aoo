import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800", className)}
    {...props}
  />
))
Button.displayName = "Button"

export { Button }



// import React, { useState, useEffect } from 'react';
// import Book6 from "../assets/book6.png";
// import Book7 from "../assets/book7.png";
// import Book8 from "../assets/book8.png";
// import Book9 from "../assets/book9.png";
// import Book10 from "../assets/book10.png";
// import Book11 from "../assets/book11.png";

// const MyBooks = ({ searchTerm }) => {
//   const [mybooks, setMybooks] = useState([]);
//   const [readStates, setReadStates] = useState([]);

//   useEffect(() => {
//     const savedBooks = JSON.parse(localStorage.getItem('mybooks-list')) || [];
//     setMybooks(savedBooks);

//     const savedReadStates = JSON.parse(localStorage.getItem('mybooks-readStates'));
//     if (savedReadStates && savedReadStates.length === savedBooks.length) {
//       setReadStates(savedReadStates);
//     } else {
//       setReadStates(new Array(savedBooks.length).fill(false));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('mybooks-readStates', JSON.stringify(readStates));
//   }, [readStates]);

//   useEffect(() => {
//     localStorage.setItem('mybooks-list', JSON.stringify(mybooks));
//   }, [mybooks]);

//   const toggleRead = (index) => {
//     setReadStates(prev => {
//       const newStates = [...prev];
//       newStates[index] = !newStates[index];
//       return newStates;
//     });
//   };

//   const deleteBook = (index) => {
//     setMybooks(prev => prev.filter((_, i) => i !== index));
//     setReadStates(prev => prev.filter((_, i) => i !== index));
//   };

//   const allRead = mybooks.length > 0 && readStates.every(state => state === true);

//   const filteredBooks = mybooks.filter(({ title, author }) =>
//     title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {mybooks.length === 0 ? (
//         <div className="message1">No books added yet</div>
//       ) : (
//         <>
//           {allRead && <div className="message1">You've read all your books</div>}
//           <div className="books">
//             {filteredBooks.length === 0 ? (
//               <p>No books found</p>
//             ) : (
//               filteredBooks.map(({ img, title, author }, index) => (
//                 <div key={title}>
//                   <img src={img} alt={title} />
//                   <h3>{title}</h3>
//                   <p>{author}</p>
//                   <button onClick={() => toggleRead(index)}>
//                     {readStates[index] ? "Read" : "Unread"}
//                   </button>
//                   <button onClick={() => deleteBook(index)} style={{ marginLeft: '8px' }}>
//                     Delete
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MyBooks;







//BOOKS.JSX: 
// import React from 'react';
// import {useState, useEffect} from 'react';
// import Book1 from '../assets/book1.png';
// import Book2 from '../assets/book2.png';
// import Book3 from '../assets/book3.png';
// import Book4 from '../assets/book4.png';
// import Book5 from '../assets/book5.png';
// import Book11 from "../assets/book11.png"
// import Book12 from "../assets/book12.png"
// import { Card, CardHeader, CardContent, CardTitle } from './path/to/Card'; 

//         const booksList = {
//           all: [
//   { img: Book1, 
//     title: "Death Row", 
//     author: "Freida Mcfadden" 
//   },          
//   ],
//           recentReleased: [
//   { img: Book1, 
//     title: "Death Row", 
//     author: "Freida Mcfadden" 
//   },
//   { img: Book2, 
//     title: "The Bachelorette Party", 
//     author: "Camilla Sten" 
//   },
//   { img: Book3, 
//     title: "Welcome to Murder Week", 
//     author: "Karen Dukess" 
//   },
//   { img: Book4, 
//     title: "Battle of the Bookstores", 
//     author: "Ali Brady" 
//   },
//   { img: Book5, 
//     title: "This Princess Kills Monsters", 
//     author: "Ry Herman" 
//   },
//   { img: Book11, 
//     title: "The Ghost Writer", 
//     author: "Julie Clark", 
//   },
//   { img: Book12, 
//     title: "We Dont Talk About Carol", 
//     author: "Kristen L. Berry", 
//   },
//   ],
//           thriller: [
//             { img: Book1, 
//     title: "Death Row", 
//     author: "Freida Mcfadden" 
//   },
//   { img: Book2, 
//     title: "The Bachelorette Party", 
//     author: "Camilla Sten" 
//   },
//   ],
//           fiction: [
//   { img: Book4, 
//     title: "Battle of the Bookstores", 
//     author: "Ali Brady" 
//   },
//   { img: Book5, 
//     title: "This Princess Kills Monsters", 
//     author: "Ry Herman" 
//   },          
//   ],
//           fantasy: [
//   { img: Book11, 
//     title: "The Ghost Writer", 
//     author: "Julie Clark", 
//   },
//   { img: Book12, 
//     title: "We Dont Talk About Carol", 
//     author: "Kristen L. Berry", 
//   },          
//   ],
// };

// const Books = ({ selectedGenre, searchTerm, mybooks, setMybooks }) => {
//   const booksToDisplay = selectedGenre === 'all' ? booksList.all : booksList[selectedGenre] || []

//   const filteredBooks = booksToDisplay.filter(book =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.author.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const [readStates, setReadStates] = useState(() => {
//     const saved = localStorage.getItem('mybooks-readStates')
//     if (saved) return JSON.parse(saved)
//     return {}
//   })

//   const toggleRead = (title) => {
//     setReadStates(prev => {
//       const updated = { ...prev, [title]: !prev[title] }
//       localStorage.setItem('mybooks-readStates', JSON.stringify(updated))
//       return updated
//     })
//   }

//   const handleAddBook = (book) => {
//     if (!mybooks.find(b => b.title === book.title)) {
//       setMybooks([...mybooks, book])
//     }
//   }

//   return (
//     <div className="books">
//       {filteredBooks.length === 0 ? (
//         <p>No books found</p>
//       ) : (
//         filteredBooks.map(({ img, title, author }) => (
//           <div key={title}>
//             <img src={img} alt={title} />
//             <h3>{title}</h3>
//             <p>{author}</p>
//             <button onClick={() => handleAddBook({ img, title, author })}>Add</button>
//             <button onClick={() => toggleRead(title)}>
//               {readStates[title] ? "Read" : "Unread"}
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   )
// }

// export default Books