// File: Projects.js
import React, { useEffect, useState } from 'react';

export const ProjectsAPI = () => {
  const [repos, setRepos] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated URL to the 'repos' endpoint
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
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading Projects...</p>;

  return (
    <div className="projects-container">
      <h1>My GitHub Projects</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {repos.map((repo) => (
          <li key={repo.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
            {/* repo.name is the title, repo.description is the text */}
            <h3 style={{ color: '#007bff' }}>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <p>{repo.language || "No language specified"}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};