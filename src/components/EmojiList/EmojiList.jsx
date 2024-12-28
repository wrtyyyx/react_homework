import React, {useState} from 'react';
import './EmojiList.css'
const EmojiList = ({emojis, onClick}) => {
    if (!emojis || !onClick){
        throw new Error('Check props')
    }
    return (
        <div className={'emojis_list'}>
            {emojis.map((item, index) => (
                <div className='emoji_item' key={index} onClick={() => onClick(index)}>
                    <div className='emoji_img'>
                        <img width={'30px'} src={item.emoji} alt={item.emoji}/>
                    </div>
                    <span>{item.count}</span>
                </div>
            ))}
        </div>
    );
};

export default EmojiList;