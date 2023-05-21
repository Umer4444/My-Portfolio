import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/imgs/contact-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const sendEmail = async (e) => {
    e.preventDefault();

    setButtonText('Sending...'); // Update the button text to "Sending..."
    setFormErrors({}); // Clear any previous form errors

    // Validate the form fields
    const errors = validateForm();
    setFormErrors(errors);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      try {
        await emailjs.sendForm('service_rfetcw8', 'template_4gaen2e', e.target, 'IVCD6NRHDuCMVUnmG')
        setFormDetails(formInitialDetails); // Reset the form fields to initial values
        setButtonText('Send'); // Reset the button text to "Send"
        setStatus({ success: true, message: 'Email sent successfully' });
        setTimeout(() => {
          setStatus({});
        }, 3000); // Clear the success message after 3 seconds
      } catch (error) {
        setButtonText('Send'); // Reset the button text to "Send"
        setStatus({ success: false, message: 'Failed to send email' });
      }
    } else {
      setButtonText('Send'); // Reset the button text to "Send" if there are validation errors
    }
  }


  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    const errors = {};

    if (firstName === '') {
      errors.firstName = 'Please enter your first name';
    }
    if (lastName === '') {
      errors.lastName = 'Please enter your last name';
    }
    if (email === '') {
      errors.email = 'Please enter your email address';
    }
    if (phone === '') {
      errors.phone = 'Please enter your phone number';
    }
    if (message === '') {
      errors.message = 'Please enter your message';
    }

    setFormErrors(errors);
    return errors;
  }

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
  
    setFormDetails({ ...formDetails, phone: numbersOnly });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
               
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1 mb-1">
                        <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e) => { setFormDetails({ ...formDetails, firstName: e.target.value }); }} />
                        {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-1">
                        <input type="text" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => { setFormDetails({ ...formDetails, lastName: e.target.value }); }} />
                        {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-1">
                        <input type="email" name="email_from" placeholder="Email Address" value={formDetails.email} onChange={(e) => { setFormDetails({ ...formDetails, email: e.target.value }); }} />
                        {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={formDetails.phone}
                          onChange={handlePhoneChange}
                        />
                        {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
                      </Col>
                      <Col size={12} className="px-1 mb-1">
                        <textarea rows="6" name="message" placeholder="Message" value={formDetails.message} onChange={(e) => { setFormDetails({ ...formDetails, message: e.target.value }); }}></textarea>
                        {formErrors.message && <div className="error-message">{formErrors.message}</div>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && <Col>
                        <div className={status.success ? "success-alert" : "error-alert"}>{status.message}</div>
                      </Col>}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}




