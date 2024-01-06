import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, deployedLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-links">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {deployedLink && <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed</a>}
      </div>
      <div className="proj-imgbx">

        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

      </div>
    </Col>
  )
}
