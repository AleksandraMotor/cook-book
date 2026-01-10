import classNames from 'classnames';

import './LinkBox.scss';

interface LinkBoxProps {
    name: string;
    icon: JSX.Element;
    color?: string;
}

interface BoxDataProps {
    data: LinkBoxProps[];
}

const LinkBox: React.FC<BoxDataProps> = ({data}) => {

    const categoriesList = data.map(item => (
        <li className='link-list__item' key={item.name} style={{'backgroundColor' : item.color}}>
            <span className='link-list__item__title'>
              {item.name}  
            </span>
            {item.icon}
        </li>
    ));

    return (
        <div className="link-box">
            <ul className={classNames('link-box__list', 'link-list')}>
                {categoriesList}
            </ul>
        </div>
    );
};

export default LinkBox;