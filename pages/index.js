import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"; // Import the animation

const persons = [
    { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "Preparation for CU admission test", section: "N/A" },
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

    // Search function with live preview
    const handleSearch = () => {
        const foundPerson = persons.find(
            (person) => person.name.toLowerCase() === search.toLowerCase() || person.id === search
        );
        if (foundPerson) {
            setSelectedPerson(foundPerson);
            setError(false); // Reset error if found
        } else {
            setSelectedPerson(null); // Reset if no match found
            setError(true); // Set error state
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(); // Perform search when Enter key is pressed
        }
    };

    return (
        <div style={{
            position: "relative",
            textAlign: "center",
            padding: "20px",
            minHeight: "100vh",  // Ensure content height is consistent
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            zIndex: 1, // Ensure content is above the background
        }}>
            <ParticlesBackground />  {/* Particle animation added here */}

            <h1 style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#fff",
                position: "relative",
                zIndex: 2 // Ensure it appears above the background
            }}>
                NAGGINS
            </h1>

            <h2 style={{
                color: "#fff",
                position: "relative",
                zIndex: 2 // Ensure it appears above the background
            }}>
                It is what it is
            </h2>

            <input
                type="text"
                placeholder="Name/ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress} // Listen for Enter key press
                style={{
                    padding: "10px",
                    width: "80%",
                    maxWidth: "400px",
                    margin: "10px auto",
                    display: "block",
                    borderRadius: "5px",
                    position: "relative",
                    zIndex: 2, // Ensure it appears above the background
                    marginBottom: "20px" // Add some space below the search bar
                }}
            />

            <button
                onClick={handleSearch}
                style={{
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: "5px",
                    position: "relative",
                    zIndex: 2 // Ensure it appears above the background
                }}
            >
                SEARCH
            </button>

            {/* Display error message if no result is found */}
            {error && (
                <p style={{
                    color: "red",
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 2 // Make sure the error message appears above background
                }}>
                    No Naggins Found
                </p>
            )}

            {/* Display selected person details in a table format */}
            {selectedPerson && (
                <table style={{
                    marginTop: "20px",
                    width: "80%",
                    maxWidth: "500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "left",
                    borderCollapse: "collapse",
                    zIndex: 2
                }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Name:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.name}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Id:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.id}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Mail:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.mail}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Program:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.program}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Semester:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.semester}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}><strong>Section:</strong></td>
                            <td style={{ border: "1px solid #fff", padding: "8px" }}>{selectedPerson.section}</td>
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
