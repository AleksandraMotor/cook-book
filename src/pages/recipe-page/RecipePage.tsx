import { useParams } from "react-router-dom";
import { RecipeProps, RecipesData } from "../../store/Data";
import TitleUnit from "../../components/title-unit/TitleUnit";
import SectionUnit from "../../components/section-unit/SectionUnit";

import "./RecipePage.scss";

const data: RecipeProps[] = RecipesData;

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
            <TitleUnit size={1} title={recipe.name}/>
            <SectionUnit rows={2}>
                <p>
                  {recipe.description}  
                </p>
                <p>
                    {recipe.category.join(', ')}
                </p>
            </SectionUnit>
            
            <SectionUnit>
                <p>
                    Prep time: 15min
                </p>
                <p>
                    Cooking time: 35min
                </p>
                <p>
                    Porcje: 1 | 2 | 3
                </p>
            </SectionUnit>
            
            <SectionUnit>
                <TitleUnit title="Ingredients"/>
                <ol>
                    {recipe.ingredients.map(item => (
                        <li>{item}</li>
                    ))}
                </ol>
            </SectionUnit>
            
            <TitleUnit size={2} title="Directions"/>
            <SectionUnit>
                <ol>
                    {recipe.directions.map(item => (
                        <li key={item.id}>{item.description}</li>
                    ))}
                </ol>
            </SectionUnit>
        </article>
    );
};

export default RecipePage;