import React, { useEffect, useState, useMemo } from 'react';

export const ProjectsAPI = () => {
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/SeamusDoherty1/repos"); 
        if (!response.ok) throw new Error("Failed to fetch repositories");

        const json = await response.json();
        setRepos(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty array ensures this only runs once on load[cite: 6]

  // useMemo caches the filtered list so it only recalculates 
  // when searchTerm or repos actually change[cite: 6].
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const name = repo.name || ""; 
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, repos]); 

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading Projects...</p>;

  return (
    <div className="projects-container">
      <h1>My GitHub Projects</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
        />
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <li key={repo.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
              <h3 style={{ color: '#007bff' }}>{repo.name}</h3>
              <p>{repo.description || "No description provided."}</p>
              <p>{repo.language || "No language specified"}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </li>
          ))
        ) : (
          <p>No projects match your search.</p>
        )}
      </ul>
    </div>
  );
};