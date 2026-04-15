import styles from styles.css;
const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects"
};
const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};

export default function Headers() {
  return (
    <>
    <h1>{headerNames.aboutMe}, {headerNames.Skills}, {headerNames.Projects}</h1>
    </>
  );

}

