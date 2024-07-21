import { useEffect, useState } from 'react';
import { CharacterListItem } from './CharacterListItem';

const baseUrl = 'https://swapi.dev/api/people';

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
      })
  }, []);

  return (
    <>
       <h1>Star Wars Chatacters</h1>
       <ul>
       {characters.map(c => <CharacterListItem key={c.url} {...c} /> )}
       </ul>
    </>
    );
};