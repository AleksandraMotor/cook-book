import { useEffect, useState } from 'react';
import { categories, Data, DataProps } from '../../store/RecipesData';

import './FilterRecipes.scss';

export const Filters: React.FC<{
    selectedCategory: string;
    setFilters: (category: any) => void;
}> = ({ selectedCategory, setFilters }) => {

    const categoriesList = categories.map((option) =>
        <option value={option}>{option}</option>
    );

    return (
      <div>
        <select
            value={selectedCategory}
            onChange={(e) => setFilters(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoriesList}
        </select>
        {/* <input
          type="range"
          min="0"
          max="1000"
          onChange={(e) =>
            setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })
          }
        />
        <input
          type="checkbox"
          onChange={(e) =>
            setFilters({ ...filters, inStock: e.target.checked })
          }
        /> */}
      </div>
    );
};

export const RecipesList: React.FC<{ data: DataProps[] }> = ({ data }) => (
  <div>
    {data.map(recipe => (
      <div key={recipe.id}>
        <h3>{recipe.name}</h3>
        <p>Description: {recipe.shortDescription}</p>
        <p>Category: {recipe.category ? recipe.category.join(', ') : ""}</p>
      </div>
    ))}
  </div>
); 

const FilterRecipes = () => {

    const data = Data;
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [filteredData, setFilteredData] = useState<DataProps[]>(data);
    // <{
    //     category?: string;
    //     // priceRange?: [number, number];
    //     // minRating?: number;
    //     // inStock?: boolean;
    //   }>({});

    useEffect(() => {

        if (selectedCategory) {
            const filtered = data.filter((item) => item.category.includes(selectedCategory));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }

    }, [selectedCategory, data]); 

    return (
        <div className='filter-recipes'>
            <Filters setFilters={setSelectedCategory} selectedCategory={selectedCategory}/>
            <RecipesList data={filteredData}/>  
        </div>
    );
};

export default FilterRecipes;