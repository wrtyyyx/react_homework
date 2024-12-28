import React from 'react';
import './Button.css'
const Buttons = ({result, reset,disabledBtn}) => {
    if (!reset || !result || typeof disabledBtn !== "boolean"){
        throw new Error('Check props')
    }
    return (
        <div className='buttons'>
            <button onClick={() => reset()}><span className="text">Reset</span>
            </button>
            <button disabled={disabledBtn} onClick={() => result()}><span className="text">Set result</span>
            </button>
        </div>
    );
};

export default Buttons;