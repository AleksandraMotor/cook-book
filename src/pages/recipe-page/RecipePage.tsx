
import { useParams } from "react-router-dom";
import { Data, DataProps } from "../../store/RecipesData";

import "./RecipePage.scss";

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
        >
            <h2>{recipe.name}</h2>
            {/* <p>category: {recipe.category} </p> */}
        </article>
    );
};

export default RecipePage;