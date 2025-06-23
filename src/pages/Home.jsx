import React, { useState, useEffect } from 'react'
import Books from '../components/Books'
import MyBooks from './MyBooks'

const Home = ({ searchTerm, selectedGenre }) => {
  const [mybooks, setMybooks] = useState([])

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('mybooks-list')) || []
    setMybooks(savedBooks)
  }, [])

  
  useEffect(() => {
    localStorage.setItem('mybooks-list', JSON.stringify(mybooks))
  }, [mybooks])

  return (
    <div>
      <h2>{{
        all: 'All Books',
        recentReleased: 'Recent Releases',
        thriller: 'Thriller Books',
        fiction: 'Fiction Books',
        fantasy: 'Fantasy Books'
      }[selectedGenre] || 'Books'}</h2>

      <Books
        searchTerm={searchTerm}
        selectedGenre={selectedGenre}
        mybooks={mybooks}
        setMybooks={setMybooks}
      />

      <h2 style={{ marginTop: '2rem' }}>My Added Books</h2>
      <MyBooks
        searchTerm={searchTerm}
        mybooks={mybooks}
        setMybooks={setMybooks}
      />
    </div>
  )
}

export default Home
