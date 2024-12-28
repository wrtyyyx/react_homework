import React from 'react';
import './RenderResult.css'
const RenderResult = ({winner}) => {
    return (
        <div>
            <div className='result'>
                Result: {winner ? (
                <>
                    <img src={winner.emoji} alt="" style={{width: '30px', height: '30px'}}/>
                    {`with ${winner.count} points`}
                </>
            ) : 'No winner yet'}
            </div>
        </div>
    );
};

export default RenderResult;