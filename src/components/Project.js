import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import projImg1 from "../assets/imgs/Screenshot (113).png";
import projImg2 from "../assets/imgs/Screenshot (114).png";
import projImg3 from "../assets/imgs/Screenshot (115).png";
import projImg4 from "../assets/imgs/Screenshot (116).png";
import projImg5 from "../assets/imgs/Screenshot (117).png";
import projImg6 from "../assets/imgs/Screenshot (97).png";
import colorSharp2 from "../assets/imgs/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Website for a Company",
      description: "Design & Development of website",
      imgUrl: projImg1,
    },
    {
      title: "Website for a StartUp Company",
      description: "Development of website",
      imgUrl: projImg2,
    },
    {
      title: "Taxi based Website",
      description: "Development of website",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title2: "Startup taxi business Website",
      description2: "Development of website",
      imgUrl2: projImg4,
    },
    {
      title2: "Webiste for a Company",
      description2: "Design & Development",
      imgUrl2: projImg5,
    },
    {
      title2: "Amazon Clone",
      description2: "Design & Development",
      imgUrl2: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have done my projects. Following are some...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="nav-pills-first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="nav-pills-second">Tab 2</Nav.Link>
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
                    {/* <Tab.Pane eventKey="second">
                    
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard2 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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