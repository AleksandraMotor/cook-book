import { RecipesData } from '../../store/RecipesData';

import './HomePage.scss';

const HomePage = () => {

    const recipesList = RecipesData.map(recipe => (
        <li key={recipe.title}>{JSON.stringify(recipe.ingredients)}</li>
    ));

    return (
        <div>
            <ul>
                {recipesList}
            </ul>
        </div>
    );
};

export default HomePage;