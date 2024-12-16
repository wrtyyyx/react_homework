const products = [
    {title: 'Капуста', id: 1, isFruit: false},
    {title: 'Чеснок', id: 2, isFruit: false},
    {title: 'Яблоко', id: 3, isFruit: true},
];

export function LIST() {
    const displayProd = products.map((prod) => <li style={{color: prod.isFruit ? 'green' : 'red'}}> {prod.title}</li>
    )
    return (
        <>
            <ul>{displayProd}</ul>
        </>
    )
}