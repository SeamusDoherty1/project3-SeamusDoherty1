// 1. Initialize state to hold the data
import React, { useEffect, useState } from 'react';
  export default GitHubProfile;
export const projects = [{
    id: 0,
    name: "SOBotz Scouting Application",
    description: "This application was used to scout out information on the top performing teams in each catagory. This project taught me not only HTML, CSS, and Javascript, but how to navigate APIs and API key integration.",
    img: "../SoBotzApplication.png",
} , {
    id: 1,
    name: "Python Data Management",
    description: "This application sorts through Grades and amount of hours studied. then it predicts if a student will pass or fail through their study hours.",
    img: "../ThonnyFile.png"
}];
// Use 'export' so it can be imported elsewhere
export const ProjectsAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We define the async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/octocat");
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json); // Save the object to state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // Run once on mount

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>GitHub Profile: {data.login}</h2>
      <p>Bio: {data.bio}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
};