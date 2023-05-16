import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: '5px'}}>
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <img src='/logo.png' alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lavanya-sharma-785823213" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/lavanyabharadwaj22" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://instagram.com/22lavanya_bhardwaj?igshid=OTk0YzhjMDVlZA==" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}