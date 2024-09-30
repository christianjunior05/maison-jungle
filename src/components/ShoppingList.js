const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier',
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    },
];

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={index}>
                    {typeof plant === 'string' ? plant : plant.name}
                </li>
            ))}
        </ul>
    );
}

export default ShoppingList;
