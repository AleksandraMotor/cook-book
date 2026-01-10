import image from '../../assets/images/work-in-progress.jpg';


const WorkInProgress: React.FC = () => {
    return (
        <div className='work-in-progress'>
            <img className='work-in-progress__image' src={image} alt="Working with cat"/>
            <h1 className='work-in-progress__title'>Work in progress</h1>           
        </div>
    );
};

export default WorkInProgress;

// recipe formular to json file