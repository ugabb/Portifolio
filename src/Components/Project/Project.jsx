import "./Project.css";
import NoteApp from "../../assets/images/noteapp.png";

const Project = ({title, description,image}) => {
  return (
    <div className="project-container">
      <img src={image} alt="" className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
