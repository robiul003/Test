import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const persons = [
    { name: "John Doe", info: "Software Engineer" },
    { name: "Jane Smith", info: "Graphic Designer" },
    { name: "Alice Brown", info: "Data Analyst" }
  ];

  const handleSearch = () => {
    const foundPerson = persons.find(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(foundPerson ? foundPerson : "Updating data, Stay tune");
  };

  return (
    <div style={styles.container}>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "#000" },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 2 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", opacity: 0.5 }
          }
        }}
        style={styles.particles}
      />

      <h1 style={styles.title}>NAGGINS</h1>
      <p style={styles.subtitle}>It is what it is</p>
      <p style={styles.updateText}>List are updating</p>

      <input
        type="text"
        placeholder="Name/ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>SEARCH</button>

      {result && (
        <div style={styles.resultBox}>
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : (
            <p><strong>{result.name}</strong> - {result.info}</p>
          )}
        </div>
      )}

      <p style={styles.footer}>© 2025 Md Robiul Hossain. All rights reserved.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1
  },
  title: {
    fontSize: "50px",
    fontWeight: "900",
    padding: "10px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "20px"
  },
  updateText: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "16px",
    marginBottom: "20px"
  },
  input: {
    padding: "12px",
    width: "80%",
    maxWidth: "400px",
    marginBottom: "10px",
    border: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    textAlign: "center",
    fontSize: "18px"
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    fontSize: "18px",
    cursor: "pointer"
  },
  resultBox: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #fff",
    display: "inline-block"
  },
  footer: {
    marginTop: "auto",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center"
  }
};
