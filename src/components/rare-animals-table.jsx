const RareAnimalsTable = () => {
    const animals = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ];

    return (
        <div className="animals-table-container">
            <h1>Rare Animals</h1>
            <table className="animals-table">
                <thead>
                <tr>
                    <th>Animal</th>
                    <th>Quantity</th>
                    <th>Google</th>
                </tr>
                </thead>
                <tbody>
                {animals.map((animal, index) => (
                    <tr key={index}>
                        <td>{animal.type}</td>
                        <td>{animal.count}</td>
                        <td>
                            <a className="animals-table-search-link"
                                href={`https://www.google.com/search?q=${encodeURIComponent(
                                    animal.type
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Search
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default RareAnimalsTable;
