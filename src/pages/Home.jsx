import React, { useState, useEffect } from 'react';
import Books from '@/components/Books';
import MyBooks from './MyBooks';
import { Card, CardHeader} from '@/components/ui/card';

const Home = ({ searchTerm, selectedGenre }) => {
  const [mybooks, setMybooks] = useState(() => {
    const saved = localStorage.getItem('mybooks-list');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mybooks-list', JSON.stringify(mybooks));
  }, [mybooks]);

  const genreTitles = {
    all: 'All Books',
    recentReleased: 'Recent Releases',
    thriller: 'Thriller Books',
    fiction: 'Fiction Books',
    fantasy: 'Fantasy Books',
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold px-4">
        {genreTitles[selectedGenre] || 'Books'}
      </h2>

      <div>
        <Books
          searchTerm={searchTerm}
          selectedGenre={selectedGenre}
          mybooks={mybooks}
          setMybooks={setMybooks}
        />
      </div>
      <Card>
        <CardHeader className="px-4">
          <h2 className="text-2xl font-semibold">My Added Books</h2>
        </CardHeader>
        <MyBooks searchTerm={searchTerm} />
      </Card>
    </div>
  );
};

export default Home;
