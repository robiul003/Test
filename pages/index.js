import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  
  const persons = [
    { name: "John Doe", info: "Software Engineer" },
    { name: "Jane Smith", info: "Graphic Designer" },
    { name: "Alice Brown", info: "Data Analyst" }
  ];

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Search for a Person</h1>
      <input 
        type="text" 
        placeholder="Enter a name..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        style={{ padding: "10px", width: "80%", maxWidth: "400px" }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredPersons.map((person, index) => (
          <li key={index} style={{ background: "#f3f3f3", margin: "10px", padding: "10px", borderRadius: "5px" }}>
            <strong>{person.name}</strong> - {person.info}
          </li>
        ))}
      </ul>
    </div>
  );
}
