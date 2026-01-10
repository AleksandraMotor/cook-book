import classNames from "classnames";

import './TitleUnit.scss';

interface TitleUnitProps {
    size?: number;
    title: string;
}

const TitleUnit: React.FC<TitleUnitProps> = ({size, title}) => {

    if (size === 1) {
        return (
            <h1 className={classNames('title-unit', 'title-unit__primary')}>{title}</h1>
        );
    } else if (size === 2) {
        return (
            <h2 className={classNames('title-unit', 'title-unit__secondary')}>{title}</h2>
        );
    } else {
        return (
            <h3 className='title-unit'>{title}</h3>
        );
    };
};

export default TitleUnit;