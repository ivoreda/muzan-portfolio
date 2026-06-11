import Container from "./Container";

const Footer = () => (
  <footer className="footer">
    <Container className="footer-inner">
      <div>
        <h3>Ivor Edafe</h3>
        <p>Senior Backend Developer</p>
      </div>
      <p>© {new Date().getFullYear()} Ivor Edafe. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
