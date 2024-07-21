import { useParams, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api/';

export const CharacterFilms = () => {
    const { characterId } = useParams();
    const [ films, setFilms] = useState([]);

    // fetch something like /people${characterId}/films  from swapi....
    useEffect(() => {
        fetch(`${baseUrl}/films`)
        .then(res => res.json())
        .then(data => {
            setFilms(data.results);
        })
    }, [characterId]);
    return (
        <>
        <h1>Character Films</h1>
        {films.map(f => {
            const id = f.url.split('/').filter(x => x).pop();

       return <li key={id}><Link to={`/films/${id}`}>{f.title}</Link></li>}
        )}
        </>
    );

};