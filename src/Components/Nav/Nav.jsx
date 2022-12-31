import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [all, setAll] = useState(false);
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);

  const [filters, setFilters] = useState({
    all: false,
    projects: false,
    about: false,
    media: false,
  });

  const handleFilter = (e) => {
    const clicked = e.target.id;
    setFilters({
      all: false,
      projects: false,
      about: false,
      media: false,
    });

    if (clicked === "all") {
      setFilters({
        all: true
      });
    }
    // if (clicked === "projects") {
    //   setProjects((prev) => !prev);
    // }
    // if (clicked === "about") {
    //   setAbout((prev) => !prev);
    // }
    // if (clicked === "media") {
    //   setMedia((prev) => !prev);
    // }

    // const clicked = e.target.id;
    // setAll(prev => prev = false);
    // setProjects(prev => prev = false);
    // setAbout(prev => prev = false);
    // setMedia(prev => prev = false);

    // if(clicked === "all"){
    //   setAll(prev => !prev)
    // }
    // if(clicked === "projects"){
    //   setProjects(prev => !prev)
    // }
    // if(clicked === "about"){
    //   setAbout(prev => !prev)
    // }
    // if(clicked === "media"){
    //   setMedia(prev => !prev)
    // }
  };

  return (
    <nav>
      <div className="filter">
        <ul>
          <li className={all ? "active" : ""} id="all" onClick={handleFilter}>
            All
          </li>
          <li
            className={projects ? "active" : ""}
            id="projects"
            onClick={handleFilter}
          >
            Projects
          </li>
          <li
            className={about ? "active" : ""}
            id="about"
            onClick={handleFilter}
          >
            About
          </li>
          <li
            className={media ? "active" : ""}
            id="media"
            onClick={handleFilter}
          >
            Media
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
