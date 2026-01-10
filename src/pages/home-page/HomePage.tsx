import LinkBox from '../../components/category-widget/LinkBox';
import SectionUnit from '../../components/section-unit/SectionUnit';
import TitleUnit from '../../components/title-unit/TitleUnit';
import { CategoriesData } from '../../store/Data';

import './HomePage.scss';

const HomePage = () => {



    return (
        <div className='home-page'>
            <TitleUnit size={1} title={'CookBook home Page'}/>
            <SectionUnit>
                <TitleUnit size={2} title={'What would you like to eat today?'}/>
                    <LinkBox data={CategoriesData}/>
            </SectionUnit>
        </div>
    );
};

export default HomePage;