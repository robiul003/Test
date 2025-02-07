import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"; // Import the animation

export default function Home() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [showPreview, setShowPreview] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Sample data
    const persons = [
        { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", program: "Currently doing preparation for CU admission test." },
        { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
        { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    ];

    // Search function
    const handleSearch = () => {
        const foundPerson = persons.find(
            (person) => person.name.toLowerCase() === search.toLowerCase() || person.id === search
        );
        if (foundPerson) {
            setResult(foundPerson);
            setError("");
        } else {
            setError("No Naggins Found");
            setResult(null);
        }
    };

    const handlePreview = (previewName) => {
        const filteredPreview = persons.filter((person) => person.name.toLowerCase().startsWith(previewName.toLowerCase()) || person.id.startsWith(previewName));
        setShowPreview(filteredPreview);
    };

    const handleSelectPreview = (person) => {
        setSearch(person.name);
        setResult(person);
        setShowPreview([]);
    };

    return (
        <div className="container">
            <ParticlesBackground />

            <h1>Welcome to Naggins</h1>
            <h2>Find Your Naggins</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Name or ID"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        handlePreview(e.target.value);
                    }}
                    className="search-bar"
                />
                <button onClick={handleSearch} className="search-button">
                    SEARCH
                </button>
            </div>

            {showPreview.length > 0 && (
                <div className="dropdown">
                    {showPreview.map((person) => (
                        <div key={person.id} className="dropdown-item" onClick={() => handleSelectPreview(person)}>
                            {person.name} <br />
                            Id: {person.id}
                        </div>
                    ))}
                </div>
            )}

            {result && (
                <table className="result-table">
                    <tbody>
                        <tr><td>Name</td><td>{result.name}</td></tr>
                        <tr><td>Id</td><td>{result.id}</td></tr>
                        <tr><td>Mail</td><td>{result.mail}</td></tr>
                        <tr><td>Program</td><td>{result.program}</td></tr>
                        <tr><td>Semester</td><td>{result.semester}</td></tr>
                        <tr><td>Section</td><td>{result.section}</td></tr>
                    </tbody>
                </table>
            )}

            {error && <p className="error">{error}</p>}

            <footer className="footer">© 2025 Md Robiul Hossain. All rights reserved.</footer>
        </div>
    );
}
