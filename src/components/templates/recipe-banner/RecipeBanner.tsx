
import "./RecipeBanner.scss";

interface RecipeBannerProps {
    name: string;
    description: string;
    img?: string | undefined;
    category?: string[] | undefined;
}

const RecipeBanner: React.FC<RecipeBannerProps> = ({name, description, img, category}) => {
    return (
        <div className="recipe-banner">
            {img &&
            <div className="recipe-banner__image">
                <img src={img} alt={name}/>
            </div>
            }
            <p className="recipe-banner__info">
                <span>
                    {description}
                </span>
                <span>
                    time: ???
                </span>
                <span>
                    nutrients: ???
                </span>
                <span>
                    hunger level: ???
                </span>
                <span>
                    {category?.join(", ")}
                </span>
            </p>
        </div>
    );
};

export default RecipeBanner;