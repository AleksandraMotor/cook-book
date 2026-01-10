import classNames from "classnames";

import './ImageUnit.scss';

interface ImageUnitProps {
    image: string;
    title: string;
    size?: string;
}

const ImageUnit: React.FC<ImageUnitProps> = ({image, title, size}) => {

    const imgSize = size ? `image-unit-wrapper__${size}` : undefined;

    return (
        <div className={classNames('image-unit-wrapper', imgSize)}>
            <img className="image-unit" alt={title} src={image}/>
        </div>
    );
};

export default ImageUnit;