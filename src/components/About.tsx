import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a fullstack developer passionate about building interactive web experiences and Android apps. 
          Currently pursuing Computer Applications while creating real-world solutions. 
          I blend code with 3D design to craft unique digital products. Coffee-powered, problem-solver by nature.
        </p>
        <h3 className="title" style={{ marginTop: "2rem" }}>
          Personal Details
        </h3>
        <p className="para">
          <b>Date of Birth:</b> 30/12/2006 <br />
          <b>Nationality:</b> India <br />
          <b>Location:</b> Kolkata, West Bengal
        </p>
        <h3 className="title" style={{ marginTop: "2rem" }}>
          Hobbies
        </h3>
        <p className="para">
          Videogames, Photo Editing, Mimicry, Stand-up comedy.
        </p>
      </div>
    </div>
  );
};

export default About;
