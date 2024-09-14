function ShoppingList() {
    // Déclaration de la liste des plantes
    const plantList = [
        { id: 1, name: 'Monstera', isBestSale: true },
        { id: 2, name: 'Ficus', isBestSale: false },
        { id: 3, name: 'Pothos', isBestSale: true }
    ];

    return (
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.name} {/* Affiche le nom de la plante */}
                    {plant.isBestSale ? <span> 🔥</span> : <span> 👎</span>}
                </li>
            ))}
        </ul>
    );
}

export default ShoppingList;
