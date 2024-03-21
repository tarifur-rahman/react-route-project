import PropTypes from 'prop-types';
import Feature from '../feature/Feature';
const PriceOption = ({option}) => {
    
    const {name , price , features} =option;
    return (
        <div className='bg-blue-500 rounded-lg text-white p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h1 className='text-3xl text-center my-6'>{name}</h1>
           <div className='pl-6 flex-grow'>
                {
                    features.map((feature , index ) => <Feature key={index} feature={feature}></Feature>)
                }
           </div>
           <button className='w-full bg-green-500 py-3 rounded-md hover:bg-green-800 mt-12 font-bold'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;