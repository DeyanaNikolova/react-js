import { Link } from 'react-router-dom';

export const CharacterListItem = ({
    name,
    url
}) => {
    const id = url.split('/').filter(x => x).pop();  // take the last character of the url (id)
    return (
        <div>
         <Link to={`/characters/${id}`} >{name}</Link>   
            </div>
    );
};