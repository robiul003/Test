import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"; // Particle animation

const persons = [
    { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", program: "Preparation for CU admission test", semester: "N/A", section: "N/A" },
    { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
];

export default function Home() {
    const [search, setSearch] = useState("");
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [error, setError] = useState(false);
    const [filteredPersons, setFilteredPersons] = useState([]);

    const handleSearch = () => {
        const foundPerson = persons.find(
            (person) => person.name.toLowerCase() === search.toLowerCase() || person.id === search
        );
        if (foundPerson) {
            setSelectedPerson(foundPerson);
            setError(false);
        } else {
            setSelectedPerson(null);
            setError(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearch(query);

        if (query.length > 0) {
            const matches = persons.filter(
                (person) =>
                    person.name.toLowerCase().startsWith(query.toLowerCase()) || person.id.startsWith(query)
            );
            setFilteredPersons(matches);
        } else {
            setFilteredPersons([]);
        }
    };

    return (
        <div className="container">
            <ParticlesBackground />
            <h1 className="title">NAGGINS</h1>
            <h2 className="subtitle">It is what it is</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Name/ID"
                    value={search}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="search-bar"
                />
                <button onClick={handleSearch} className="search-button">SEARCH</button>
                {filteredPersons.length > 0 && (
                    <div className="dropdown">
                        {filteredPersons.map((person, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                    setSearch(person.name);
                                    setSelectedPerson(person);
                                    setFilteredPersons([]);
                                }}
                            >
                                {person.name} (ID: {person.id})
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {error && <p className="error">No Naggins Found</p>}

            {selectedPerson && (
                <table className="result-table">
                    <tbody>
                        {Object.entries(selectedPerson).map(([key, value], index) => (
                            <tr key={index}>
                                <td className="table-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                                <td className="table-value">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <footer className="footer">© 2025 Md Robiul Hossain. All rights reserved.</footer>
        </div>
    );
}
