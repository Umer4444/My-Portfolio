import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/imgs/umerlogo-removebg-preview.png';
import navIcon1 from '../assets/imgs/icons8-instagram-50.png';
import navIcon2 from '../assets/imgs/icons8-linkedin-50.png';
import navIcon3 from '../assets/imgs/icons8-facebook-50.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/u_m._.er/"><img src={navIcon1} /></a>
                            <a href="https://www.linkedin.com/in/umer-malik1/"><img src={navIcon2} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100006033017489"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2022. All rigth reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}