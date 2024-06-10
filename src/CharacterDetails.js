
import React from 'react';
import { fetchCharacterDetails } from '../api';

const CharacterDetails = ({ id }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacterDetails(id).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Birth Year: {character.birth_year}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  );
};

export default CharacterDetails;