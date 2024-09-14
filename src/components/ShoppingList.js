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
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    },    {
        name: 'pothos argenté',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    },    {
        name: 'yucca',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    },    {
        name: 'palmier',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    },
]

function ShoppingList() {
    return (
        <ul>
        {plantList.map((plant) => (
            <li key={ plant.id }>
                {plant.name}
                {plant.isBestSale && <span>🔥</span> }
            </li>
))}
        </ul>
    )
}

export default ShoppingList;