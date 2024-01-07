import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1.png";
import projImg2 from "../assets/img/Project2.png";
import projImg3 from "../assets/img/Project3.png";
import projImg4 from "../assets/img/Project4.png";
import projImg5 from "../assets/img/Project5.png";
import projImg6 from "../assets/img/Project6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pocket Notes",
      description: "Stylish local storage for your brilliant ideas.",
      imgUrl: projImg1,
      githubLink: "https://github.com/Rishi2929/PocketNotes",
      deployedLink: "https://sprightly-crumble-f88308.netlify.app/",
    },
    {
      title: "JobFinder",
      description: "Streamlined job posting for recruiters with seamless login and smart filtering.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Rishi2929/Micro-Project",
      deployedLink: "https://micro-project-sigma.vercel.app/",
    },
    {
      title: "SuperApp",
      description:
        "Your all-in-one hub for movies, weather, news, and more. Personalized experience with login, register, and genre-based movie recommendations.",
      imgUrl: projImg3,
      githubLink: "https://github.com/Rishi2929/super_app",
      deployedLink: "https://super-app2929.netlify.app/",
    },
    {
      title: "Homyz",
      description: "Discover homes effortlessly. View properties, contact us.",
      imgUrl: projImg4,
      githubLink: "https://github.com/Rishi2929/Real-estate",
      deployedLink: "https://real-estate-seven-ochre.vercel.app/",
    },
    {
      title: "Todo App",
      description: "Simplify tasks, seamlessly manage CRUD operations.",
      imgUrl: projImg5,
      githubLink: "https://github.com/Rishi2929/Todo-App",
      deployedLink: "https://todo-app-lbjw.vercel.app/",
    },
    {
      title: "Credit Card",
      description: "Instantly generate virtual credit card details.",
      imgUrl: projImg6,
      githubLink: "https://github.com/Rishi2929/Credit_card",
      deployedLink: "https://credit-card-plum.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore a selection of my recent projects that showcase my skills and passion for creating innovative solutions. Each project reflects a unique challenge and the dedication I bring to delivering high-quality results. From full-stack web applications to creative front-end projects, these endeavors demonstrate my ability to turn ideas into reality.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Stay tuned for more exciting projects! I'm continuously working on new ideas and innovations to showcase here. In the meantime, feel free to explore my existing projects.</p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for more exciting projects! I'm continuously working on new ideas and innovations to showcase here. In the meantime, feel free to explore my existing projects.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
