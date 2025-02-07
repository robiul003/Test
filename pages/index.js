import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const persons = [
    { name: "Md Maruf", id: "242015312", mail: "242015312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nimmi", id: "242016212", mail: "242016212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Kaiser Kamal Ifthe", id: "242018212", mail: "242018212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mayesha", id: "242016112", mail: "242016112@eastdelta.edu.bd", status: "Currently doing preparation for CU admission test" },
    { name: "Miftah Al Rahman", id: "242017212", mail: "242017212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Naim Uddin", id: "242016642", mail: "242016642@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Nusrat Jahan Antora", id: "242023212", mail: "242023212@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Sadnan", id: "242017512", mail: "242017512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Ibrahim Khan", id: "242017312", mail: "242017312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Saika Jahan", id: "242023312", mail: "242023312@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Mohima", id: "242023112", mail: "242023112@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" },
    { name: "Md Robiul Hossain", id: "242014512", mail: "242014512@eastdelta.edu.bd", program: "B.Sc. in CSE", semester: "3rd(running)", section: "07" }
  ];

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase()) || person.id.includes(search)
  );

  return (
    <div className="container">
      <ParticleBackground />
      <h1 className="title">NAGGINS</h1>
      <p className="subtitle">It is what it is</p>
      <input
        type="text"
        placeholder="Name/ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      {search && (
        <ul className="search-results">
          {filteredPersons.map((person) => (
            <li key={person.id} onClick={() => setSelectedPerson(person)}>
              <strong>{person.name}</strong> - Id: {person.id}
            </li>
          ))}
        </ul>
      )}
      {selectedPerson && (
        <table className="info-table">
          <tbody>
            {Object.entries(selectedPerson).map(([key, value]) => (
              <tr key={key}>
                <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <footer>© 2025 Md Robiul Hossain. All rights reserved.</footer>
    </div>
  );
}
