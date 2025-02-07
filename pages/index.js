import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"; // Import the animation

export default function Home() {
    const [search, setSearch] = useState("");
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Full data with Name, ID, Mail, Program, Semester, Section
    const persons = [
        { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", program: "Currently doing preparation for CU admission test", semester: "-", section: "-" },
        { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" },
        { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd (running)", section: "07" }
    ];

    // Search function with live preview
    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearch(searchQuery);
        setSelectedPerson(null);
    };

    // Filter results based on name or ID
    const filteredPersons = persons.filter(
        (person) =>
            person.name.toLowerCase().includes(search.toLowerCase()) ||
            person.id.includes(search)
    );

    return (
        <div style={{
            position: "relative",
            textAlign: "center",
            padding: "20px",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff"
        }}>
            <ParticlesBackground />  {/* Particle animation added here */}

            <h1 style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#fff",
                position: "relative",
                zIndex: 1
            }}>
                NAGGINS
            </h1>

            <h2 style={{
                color: "#fff",
                position: "relative",
                zIndex: 1
            }}>
                It is what it is
            </h2>

            <input
                type="text"
                placeholder="Name/ID"
                value={search}
                onChange={handleSearch}
                style={{
                    padding: "10px",
                    width: "80%",
                    maxWidth: "400px",
                    margin: "10px auto",
                    display: "block",
                    borderRadius: "5px",
                    position: "relative",
                    zIndex: 1
                }}
            />

            <div>
                {filteredPersons.length > 0 && (
                    <ul style={{ listStyle: "none", padding: 0, zIndex: 1 }}>
                        {filteredPersons.map((person, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedPerson(person)} // Display detailed info on click
                                style={{ cursor: "pointer", marginBottom: "10px" }}
                            >
                                <strong>{person.name}</strong><br />
                                <span>Id: {person.id}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {selectedPerson && (
                <table style={{ marginTop: "20px", margin: "auto", color: "#fff", width: "80%", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Mail</th>
                            <th>Program</th>
                            <th>Semester</th>
                            <th>Section</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedPerson.name}</td>
                            <td>{selectedPerson.id}</td>
                            <td>{selectedPerson.mail}</td>
                            <td>{selectedPerson.program}</td>
                            <td>{selectedPerson.semester}</td>
                            <td>{selectedPerson.section}</td>
                        </tr>
                    </tbody>
                </table>
            )}

            <footer style={{
                position: "absolute",
                bottom: "20px",
                width: "100%",
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold"
            }}>
                © 2025 Md Robiul Hossain. All rights reserved.
            </footer>
        </div>
    );
}
