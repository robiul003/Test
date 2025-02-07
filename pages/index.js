import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"; // Import the animation

export default function Home() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);

    // Sample data
    const persons = [
        { name: "John Doe", info: "Software Engineer" },
        { name: "Jane Smith", info: "Graphic Designer" },
        { name: "Alice Brown", info: "Data Analyst" }
    ];

    // Search function
    const handleSearch = () => {
        const foundPerson = persons.find(
            (person) => person.name.toLowerCase() === search.toLowerCase()
        );
        setResult(foundPerson ? foundPerson.info : "Updating data, Stay tune");
    };

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
                onChange={(e) => setSearch(e.target.value)}
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
                    zIndex: 1
                }}
            >
                SEARCH
            </button>

            {result && (
                <p style={{
                    marginTop: "20px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 1
                }}>
                    {result}
                </p>
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
