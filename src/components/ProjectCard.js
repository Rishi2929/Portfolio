import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, deployedLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-links">
      </div>
      <div className="proj-imgbx">

        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* <br /> */}
          <div className="opener-links">
            {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="Github">GitHub</a>}
            {deployedLink && <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="Deployed">Deployed</a>}
          </div>
        </div>

      </div>
    </Col>
  )
}
