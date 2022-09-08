import React from 'react';
import Day from "../Day/Day";
import './Month.css'

const Month = ({month}) => {
    return (
            <div className='month'>
                {month.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <Day day={day} key={idx} rowIdx={i}/>
                        ))}
                    </React.Fragment>
                ))}
            </div>
    );
};

export default Month;