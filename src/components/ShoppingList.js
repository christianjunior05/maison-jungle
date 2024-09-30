

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

function open(){
    console.log("open")
}

function ShoppingList(open) {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={index}>
                    {typeof plant === 'string' ? plant : plant.name}
                </li>
            ))}
            <button onClick={open}>hello</button>
        </ul>
        
    );
}

export default ShoppingList;
export default open;
