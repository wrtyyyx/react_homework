import React from 'react';

export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}
const Avatar = ({ person, size }) => {
    return (
        <div>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </div>
    );
};

export default Avatar;