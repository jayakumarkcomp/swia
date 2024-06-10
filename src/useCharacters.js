
import { useState, useEffect } from 'eact';
import { fetchCharacters } from './api';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchCharacters(currentPage).then((response) => {
      setCharacters(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
    });
  }, [currentPage]);

  return { characters, currentPage, totalPages, setCurrentPage };
};

export default useCharacters;
``