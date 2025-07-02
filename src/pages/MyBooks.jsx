import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MyBooks = ({ searchTerm }) => {
  const [mybooks, setMybooks] = useState(() => {
    const saved = localStorage.getItem('mybooks-list');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readStates, setReadStates] = useState(() => {
    const saved = localStorage.getItem('mybooks-readStates');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (readStates.length !== mybooks.length) {
      setReadStates(new Array(mybooks.length).fill(false));
    }
  }, [mybooks, readStates.length]);

  useEffect(() => {
    localStorage.setItem('mybooks-readStates', JSON.stringify(readStates));
  }, [readStates]);

  useEffect(() => {
    localStorage.setItem('mybooks-list', JSON.stringify(mybooks));
  }, [mybooks]);

  const toggleRead = (index) => {
    setReadStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const deleteBook = (index) => {
    setMybooks((prev) => prev.filter((_, i) => i !== index));
    setReadStates((prev) => prev.filter((_, i) => i !== index));
  };

  const allRead = mybooks.length > 0 && readStates.every((state) => state === true);

  const filteredBooks = (mybooks || []).filter(({ title, author }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {mybooks.length === 0 ? (
        <div className="message1">No books added yet</div>
      ) : (
        <>
          {allRead && <div className="message1">You've read all your books</div>}

          <div className="books">
            {filteredBooks.length === 0 ? (
              <p>No books found</p>
            ) : (
              filteredBooks.map(({ img, title, author }, index) => (
                <Card key={`${title}-${index}`} className="inline-block max-w-[200px] text-center">
                  <CardContent className="flex flex-col items-center">
                    <img
                      src={img}
                      alt={title}
                      className="w-[180px] h-[270px] rounded-lg border-2 border-[#6f8994] mb-3"
                    />
                    <h3 className="font-semibold text-base mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {author}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-2">
                    <Button
                      variant={readStates[index] ? 'secondary' : 'outline'}
                      size="sm"
                      onClick={() => toggleRead(index)}
                    >
                      {readStates[index] ? 'Read' : 'Unread'}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteBook(index)}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooks;
