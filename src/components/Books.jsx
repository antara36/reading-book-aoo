import React from 'react';
import {useState, useEffect} from 'react';
import Book1 from '../assets/book1.png';
import Book2 from '../assets/book2.png';
import Book3 from '../assets/book3.png';
import Book4 from '../assets/book4.png';
import Book5 from '../assets/book5.png';
import Book6 from '../assets/book6.png';
import Book7 from '../assets/book7.png';
import Book8 from '../assets/book8.png';
import Book9 from '../assets/book9.png';
import Book10 from '../assets/book10.png';
import Book11 from "../assets/book11.png";
import Book12 from "../assets/book12.png";
import Book13 from "../assets/book13.png";
import Book14 from "../assets/book14.png";
import Book15 from "../assets/book15.png";
import Book16 from "../assets/book16.png";
import Book17 from "../assets/book17.png";
import Book18 from "../assets/book18.png";
import Book19 from "../assets/book19.png";
import Book20 from "../assets/book20.png";
import Book21 from "../assets/book21.png";
import Book22 from "../assets/book22.png";
import Book23 from "../assets/book23.png";
import Book24 from "../assets/book24.png";
import Book25 from "../assets/book25.png";
 
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card'; 

        const booksList = {
          all: [
  { img: Book1, 
    title: "Death Row", 
    author: "Freida Mcfadden" 
  },  
  { img: Book4, 
    title: "Battle of the Bookstores", 
    author: "Ali Brady" 
  },      
  { img: Book11, 
    title: "The Ghost Writer", 
    author: "Julie Clark" 
  }, 
  { img: Book22, 
    title: "Somebody's Someone", 
    author: "Linda Oatman High" 
  }, 
  { img: Book8, 
    title: "Penpal", 
    author: "Dathan Auerbach" ,
  }, 
  { img: Book6, 
    title: "The Reapperance of Rachel Price", 
    author: "Holly Jackson" 
  }, 
  { img: Book16, 
    title: "The Final Episode", 
    author: "Lori Roy" 
  }, 
  { img: Book25, 
    title: "Battle of the Bookstores", 
    author: "Ali Brady" 
  }, 
  { img: Book13, 
    title: "Into the Faerie Hill", 
    author: "H. S. Norup" 
  }, 
  { img: Book7, 
    title: "Twelve", 
    author: "Jennifer Lynn Barnes" 
  }, 
  { img: Book10, 
    title: "Then She Was Gone", 
    author: "Lisa Jewell" 
  }, 
  { img: Book5, 
    title: "This Princess Kills Monsters", 
    author: "Ry Herman" 
  }, 
  ],
          recentReleased: [
  { img: Book1, 
    title: "Death Row", 
    author: "Freida Mcfadden" 
  },
  { img: Book2, 
    title: "The Bachelorette Party", 
    author: "Camilla Sten" 
  },
  { img: Book3, 
    title: "Welcome to Murder Week", 
    author: "Karen Dukess" 
  },
  { img: Book4, 
    title: "Battle of the Bookstores", 
    author: "Ali Brady" 
  },
  { img: Book5, 
    title: "This Princess Kills Monsters", 
    author: "Ry Herman" 
  },
  { img: Book11, 
    title: "The Ghost Writer", 
    author: "Julie Clark", 
  },
  { img: Book12, 
    title: "We Dont Talk About Carol", 
    author: "Kristen L. Berry", 
  },
  ],
          thriller: [
  { img: Book16, 
    title: "The Final Episode", 
    author: "Lori Roy" 
  },
  { img: Book1, 
    title: "Death Row", 
    author: "Freida Mcfadden" 
  },
  { img: Book14, 
    title: "Never Flinch", 
    author: "Stephen King" 
  },
  { img: Book2, 
    title: "The Bachelorette Party", 
    author: "Camilla Sten" 
  },
  { img: Book13, 
    title: "The Thrashers", 
    author: "Camilla Sten" 
  },
  { img: Book11, 
    title: "The Ghost Writer", 
    author: "Julie Clark", 
  },
  { img: Book3, 
    title: "Welcome to Murder Week", 
    author: "Karen Dukess" 
  },
  { img: Book15, 
    title: "The Retirement Plan", 
    author: "Sue Hincenbergs" 
  },
  ],
          fiction: [
  { img: Book4, 
    title: "Battle of the Bookstores", 
    author: "Ali Brady" 
  },
  { img: Book5, 
    title: "This Princess Kills Monsters", 
    author: "Ry Herman" 
  },    
  { img: Book3, 
    title: "Welcome to Murder Week", 
    author: "Karen Dukess" 
  },   
  { img: Book17, 
    title: "Making The Light Bloom", 
    author: "Clara Driscoll & Tiffany Lamps" 
  },    
   { img: Book18, 
    title: "The Midnight Library", 
    author: "Matt Haig" 
  }, 
  { img: Book12, 
    title: "We Dont Talk About Carol", 
    author: "Kristen L. Berry", 
  },
   { img: Book14, 
    title: "Never Flinch", 
    author: "Stephen King" 
  },
  { img: Book19, 
    title: "The Knight and the Moth", 
    author: "rachel Gillig" 
  },
  ],
          fantasy: [
  { img: Book19, 
    title: "The Knight and the Moth", 
    author: "rachel Gillig" 
  },
  { img: Book20, 
    title: "The Curse Carved In Bone", 
    author: "Danielle L. Jensen", 
  },  
  { img: Book21, 
    title: "We Dont Talk About Carol", 
    author: "Kristen L. Berry", 
  },  
  { img: Book22, 
    title: "Awake In The Floating City", 
    author: "Susanna Kwan", 
  },  
  { img: Book23, 
    title: "Somebody's Someone", 
    author: "Linda Oatman High", 
  },  
  { img: Book24, 
    title: "His Face Is The Sun", 
    author: "Michelle Jabes Corpora", 
  },  
  { img: Book25, 
    title: "A Fate Forged In Fire", 
    author: "Hazel McBride", 
  },          
  ],
};

const Books = ({ selectedGenre, searchTerm, mybooks, setMybooks }) => {
  const booksToDisplay = selectedGenre === 'all' ? booksList.all : booksList[selectedGenre] || []

  const filteredBooks = booksToDisplay.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const [readStates, setReadStates] = useState(() => {
    const saved = localStorage.getItem('mybooks-readStates')
    if (saved) return JSON.parse(saved)
    return {}
  })

  const toggleRead = (title) => {
    setReadStates(prev => {
      const updated = { ...prev, [title]: !prev[title] }
      localStorage.setItem('mybooks-readStates', JSON.stringify(updated))
      return updated
    })
  }

  const handleAddBook = (book) => {
    if (!mybooks.find(b => b.title === book.title)) {
      setMybooks([...mybooks, book])
    }
  }

  return (
    <div className="books">
      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        filteredBooks.map(({ img, title, author }) => (
          <Card key={title} >
             <CardHeader>
    <img src={img} alt={title} />
  </CardHeader>
  <CardContent>
    <CardTitle>{title}</CardTitle>
    <p>{author}</p>
    <button
      onClick={() => handleAddBook({ img, title, author })}
      
    >
      Add
    </button>
    <button
      onClick={() => toggleRead(title)}
    
    >
      {readStates[title] ? "Read" : "Unread"}
      </button>
      </CardContent>
       </Card>
      ))
    )}
  </div>
 );
}

export default Books