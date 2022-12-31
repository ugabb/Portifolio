import "./Grid.css";

import Me from "../../assets/images/me.jpg";
import NoteApp from "../../assets/images/noteapp.png";
import MovieApp from "../../assets/images/movielib.png";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";

import Project from "../Project/Project";

const GridMain = () => {
  return (
    <div className="image-grid ">
      <div className="card image-grid-col-2 my-info">
        <h1>Gabriel Barros</h1>
        <h3>Web Developer</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      </div>
      <img src={Me} alt="" className="card me-photos" />
      <div className="card image-grid-row-2"></div>
      <div className="card github">
        <AiFillGithub className="icon-media" />
        <div className="arrow-container">
          <AiOutlineArrowRight className="arrow" />
        </div>
      </div>
      <div className="card image-grid-col-2">
       <Project 
          title="Note App"
          description="An app  where you can set your annotations and stay focus in what is important to you!"
          image={NoteApp}
       />
      </div>
      <div className="card linkedin">
        <AiFillLinkedin className="icon-media" />
        <div className="arrow-container">
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="card twitter">
        <AiFillTwitterCircle className="icon-media" />
        <div className="arrow-container">
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="card image-grid-col-2">
        <Project 
          title="Movie Lib"
          description="An app where you can search for movies and receive all importants information from an API!"
          image={MovieApp}
        />
      </div>
    </div>
  );
};

export default GridMain;
