import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Development</h4>
                <h5>Self Employed - Barasat</h5>
              </div>
              <h3>MAY 2025 - NOW</h3>
            </div>
            <p>
              Building custom Android applications with modern architectures and clean code principles. 
              Currently developing projects using Java, exploring mobile UI/UX design patterns, and learning 
              advanced Android frameworks while managing freelance client projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor Of Computer Applications</h4>
                <h5>Brainware University - Computational Sciences</h5>
              </div>
              <h3>MARCH 2025 - NOW</h3>
            </div>
            <p>
              Currently pursuing a Bachelor's degree in Computer Applications at Brainware University, 
              focusing on computational sciences and advanced programming techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
