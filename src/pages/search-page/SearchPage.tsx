import FilterRecipes from '../../components/filter-recipes/FilterRecipes';
import SearchRecipes from '../../components/search-recipes/SearchRecipes';

import './SearchPage.scss';

const SearchPage = () => {

    return (
        <section className='search-page'>
            <SearchRecipes/>
            <FilterRecipes/>
        </section>
    );
};

export default SearchPage;