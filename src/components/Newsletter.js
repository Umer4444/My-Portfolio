import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setMessage('Please fill in the email field');
      setStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_rfetcw8', 'template_4gaen2e', e.target, 'IVCD6NRHDuCMVUnmG');
      setEmail('');
      setStatus('success');
      setMessage('Email sent successfully');
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={sendEmail}>
              <div className="new-email-bx">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
