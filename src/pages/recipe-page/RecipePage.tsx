
import { useParams } from "react-router-dom";
import { Data, DataProps } from "../../store/RecipesData";

import "./RecipePage.scss";
import RecipeBanner from "../../components/templates/recipe-banner/RecipeBanner";

const data: DataProps[] = Data;

const RecipePage = () => {
    
    let { id } = useParams<{ id: string }>();
    const recipe = data.find(recipe => recipe.name === id);

    if (!recipe) {
        return (
            <article>
                no recipe found
            </article>
        );
    };

    return (
        <article
            className="recipe-page"
        >
            <h1 className="recipe-page__title">{recipe.name}</h1>
            <section>
                <RecipeBanner name={recipe.name} description={recipe.description} img={recipe.img} category={recipe.category}/>
            </section>
        </article>
    );
};

export default RecipePage;