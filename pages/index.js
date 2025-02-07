import { useState } from "react";

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
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    padding: "10px",
    border: "2px solid #fff",
    display: "inline-block"
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px"
  },
  updateText: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    width: "80%",
    maxWidth: "400px",
    marginBottom: "10px",
    border: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    textAlign: "center",
    fontSize: "16px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    fontSize: "16px",
    cursor: "pointer"
  },
  resultBox: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #fff",
    display: "inline-block"
  },
  footer: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    fontSize: "12px"
  }
};
