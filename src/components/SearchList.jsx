import { useState } from "react";

export default function SearchList() {
  const names = [
    "Ganesh",
    "Rahul",
    "Priya",
    "Anjali",
    "Ramesh",
    "Kiran",
    "Sneha"
  ];

  const [query, setQuery] = useState("");

  const highlightText = (text) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase()
        ? <b key={i}>{part}</b>
        : part
    );
  };

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Live Search</h2>

      <input
        type="text"
        placeholder="Search names..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Results: {filteredNames.length}</p>

      {filteredNames.length === 0 ? (
        <p>No matches found</p>
      ) : (
        filteredNames.map((name, index) => (
          <p key={index}>{highlightText(name)}</p>
        ))
      )}
    </div>
  );
}
