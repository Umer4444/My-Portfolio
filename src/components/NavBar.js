import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import UmerLogo from '../assets/imgs/umerlogo-removebg-preview.png';
import navIcon1 from '../assets/imgs/icons8-instagram-50.png';
import navIcon2 from '../assets/imgs/icons8-linkedin-50.png';
import navIcon3 from '../assets/imgs/icons8-facebook-50.png';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled": ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={UmerLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler -icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href="https://www.instagram.com/u_m._.er/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.linkedin.com/in/umer-malik1/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100006033017489"><img src={navIcon3} alt="" /></a>
            </div>
           <Nav.Link href='#connect'> <button className='vvd' onClick={() => console.log('connect')}><span> Let's Connect</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;