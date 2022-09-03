import React from 'react';
import useBreakfast from '../../../../hooks/useBreakfast';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts] = useBreakfast();
    console.log(breakfasts);
    return (
        <div>
            <p className='fw-semibold'>Breakfasts: <span>{breakfasts.length}</span></p>
            <div>
                {
                    breakfasts.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}
                    ></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfasts;