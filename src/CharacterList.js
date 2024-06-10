
import React, { useState, useEffect } from 'eact';
import { Link } from 'eact-router-dom';
import { fetchCharacters } from '../api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchCharacters(currentPage).then((response) => {
      setCharacters(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
    });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.url}>
              <td>{character.name}</td>
              <td>{character.birth_year}</td>
              <td>{character.eye_color}</td>
              <td>
                <Link to={`/characters/${character.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CharacterList;