import React from "react";
import "./Project.css";

const Project = ({title, description,image,react,node,mongoDb}) => {

  return (
    <div className="project-container">
      <img src={image} alt="" className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <button className="btn">About</button>
        <div className="tags-container">
            {react && <div className="tags" >{react.name}</div>}
            {node && <div className="tags" style={{color:`${node.color}`,border:`1px solid ${node.color}`}}>{node.name}</div>}
            {mongoDb && <div className="tags" style={{color:`${mongoDb.color}`,border:`1px solid ${mongoDb.color}`}}>{mongoDb.name}</div>}
        </div>
      </div>
    </div>
  );
};

export default Project;
