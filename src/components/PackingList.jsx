import React from 'react';

function Item({name, isPacked}) {
    return <li className="item">{isPacked ? name + '✅' : <del>{name}</del>}</li>;
}

const PackingList = () => {
    return (
        <>
            <section>
                <h1>Список вещей Салли Райд</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Космический скафандр"
                    />
                    <Item
                        isPacked={true}
                        name="Шлем с золотым листом"
                    />
                    <Item
                        isPacked={false}
                        name="Фотография Тэма"
                    />
                </ul>
            </section>
        </>
    );
};

export default PackingList;