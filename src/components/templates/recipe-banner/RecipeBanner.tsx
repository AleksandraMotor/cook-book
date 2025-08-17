
import "./RecipeBanner.scss";

interface RecipeBannerProps {
    name: string;
    description: string;
    img?: string;
}

const RecipeBanner: React.FC<RecipeBannerProps> = ({name, description, img}) => {
    return (
        <div className="recipe-banner">
            {img &&
            <div className="recipe-banner__image">
                <img src={img} alt={name}/>
            </div>
            }
            <p>
                {description}
            </p>
        </div>
    );
};

export default RecipeBanner;