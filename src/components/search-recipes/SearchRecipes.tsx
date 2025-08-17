import React from 'react';
import { useEffect, useState } from 'react';
import { Data, DataProps } from '../../store/RecipesData';
import { Link } from 'react-router-dom';

import './SearchRecipes.scss';

export const SearchBar: React.FC<{ searchQuery: string; setSearchQuery: (value: string) => void }> = React.memo(
  ({ searchQuery, setSearchQuery }) => {
      return (
      <input
        className='search-bar'
        id='search-input'
        type="text"
        placeholder="Search recipes..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  }
);

export const RecipesList: React.FC<{ data: DataProps[] }> = ({ data }) => (
  <ul className='recipes-list'>
    {data.map(recipe => (
      <li key={recipe.id}>
        <h3>{recipe.name}</h3>
        <p>Description: {recipe.description}</p>
        <p>Category: {recipe.category}</p>
        <Link to={`/recipes/${recipe.name}`} aria-label='Przejdź do strony przepisu'>Czytaj dalej...</Link>
      </li>
    ))}
  </ul>
); 

const SearchRecipes = () => {

    const data = Data;
    const [searchQuery, setSearchQuery] = useState<string>('');    
    const [filteredData, setFilteredData] = useState<DataProps[]>([]);
    // const [showList, setShowList] = useState(false);

    useEffect(() => {
        const filtered = data.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
        setFilteredData(filtered);
    }, [searchQuery, data]);

    return (
      <search className='search-recipes'>
        <form className='search-recipes__form' id='search'>
            <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
        </form>
        {/* <button
          className='search-recipes__button'
          // onClick={() => setShowList(!showList)}
          >
          <img
            src={search_icon} 
            alt='Search Button'
            width='50'
            height='50'
          />    */}
        {/* </button> */}
          {searchQuery.trim() !== '' && filteredData.length > 0 && (
            <RecipesList data={filteredData}/>
          )}
      </search>
    );
};

export default SearchRecipes;