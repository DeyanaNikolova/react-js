import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';

import { CharacterFilms } from './CharacterFilms';
import { CharacterStarships } from './CharacterStarships';
import { CharactarVehicles } from './CharacterVehicles';

const baseUrl = 'https://swapi.dev/api/people';
// Details Page
export const Character = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCharacter(data);
            })
    }, [characterId]);

    const onBackButtonClick = () => {
        //  navigate(-1); go back to previous page
        navigate('/characters')
    };

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
            <button onClick={onBackButtonClick}>Back</button>
            {/* <img src="https://i2-prod.dailystar.co.uk/incoming/article28122937.ece/ALTERNATES/s615/0_Luke-Skywalker-in-Star-Wars-film.jpg" alt={character.name} /> */}

            <Navigation>
                <li><Link to="films">Films</Link></li>
                <li><Link to="starships">Starships</Link></li>
                <li><Link to="vehicles">Vehicles</Link></li>
            </Navigation>
            
            <Routes>
                <Route path='/films' element={<CharacterFilms />}></Route>
                <Route path='/starships' element={<CharacterStarships />}></Route>
                <Route path='/vehicles' element={<CharactarVehicles />}></Route>
            </Routes>
        </>
    );
};
