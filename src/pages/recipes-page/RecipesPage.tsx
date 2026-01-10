import { Link } from "react-router-dom";
import { RecipesData } from "../../store/Data";

import "./RecipesPage.scss";

const RecipesPage = () => {
    const recipes = RecipesData. map(recipe => (
        <Link key={recipe.id} className='stories-card__cta' to={`/recipes/${recipe.name}`}>
            {recipe.name}
        </Link>
    ));
    return (
        <div className="recipes-page">
            <ul className="recipes-list">
                {recipes}
            </ul>
            
        </div>
    );
};

export default RecipesPage;