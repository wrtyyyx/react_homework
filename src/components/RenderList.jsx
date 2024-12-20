import React from 'react';

function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

const people = [{
    id: 0, // Используется в JSX в качестве ключа
    name: 'Креола Кэтрин Джонсон (Creola Katherine Johnson)',
    profession: 'математик',
    accomplishment: 'расчёты для космических полетов',
    imageId: 'MK3eW3A'
}, {
    id: 1, // Используется в JSX в качестве ключа
    name: 'Марио Молина (Mario José Molina-Pasquel Henríquez)',
    profession: 'химик',
    accomplishment: 'обнаружение дыр в озоновом слое',
    imageId: 'mynHUSa'
}, {
    id: 2, // Используется в JSX в качестве ключа
    name: 'Мухаммад Абдус Салам (Mohammad Abdus Salam)',
    profession: 'физик',
    accomplishment: 'открытие теории электромагнетизма',
    imageId: 'bE7W1ji'
}, {
    id: 3, // Используется в JSX в качестве ключа
    name: 'Перси Джулиан (Percy Lavon Julian)',
    profession: 'химик',
    accomplishment: 'изобретение препаратов с кортизоном, стероидов и противозачаточных таблеток',
    imageId: 'IOjWm71'
}, {
    id: 4, // Используется в JSX в качестве ключа
    name: 'Субраманьян Чандрасекар (Subrahmanyan Chandrasekhar)',
    profession: 'астрофизик',
    accomplishment: 'расчёт массы белого карлика',
    imageId: 'lrWQx8l'
}];



const RenderList = () => {
    const ItemList = people.map((item) => <li key={people.id}><img
        src={getImageUrl(item)}
        alt={item.name}
    />
        <p>
            <b>{item.name}</b>
            {' ' + item.profession}.
            Достижение: {item.accomplishment}
        </p></li>)
    return (
        <div>
            <ul>
                {ItemList}
            </ul>
        </div>
    );
};

export default RenderList;