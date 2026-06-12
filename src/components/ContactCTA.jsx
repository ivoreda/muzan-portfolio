import { Github, Mail } from "lucide-react";
import Container from "./Container";
import RetroIcon from "./RetroIcon";

const ContactCTA = () => (
  <section className="contact-section" id="contact">
    <Container>
      <div className="contact-card" data-reveal>
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="reveal-text">
            <span className="word-wrap"><span className="word">Have</span></span>
            <span className="word-wrap"><span className="word">a</span></span>
            <span className="word-wrap"><span className="word">backend</span></span>
            <span className="word-wrap"><span className="word">system</span></span>
            <span className="word-wrap"><span className="word">that</span></span>
            <span className="word-wrap"><span className="word">needs</span></span>
            <span className="word-wrap"><span className="word">senior</span></span>
            <span className="word-wrap"><span className="word">hands?</span></span>
          </h2>
          <p>
            I’m available for backend engineering, platform architecture, API
            design, infrastructure improvements, and technical leadership.
          </p>
          <div className="contact-actions">
            <a className="btn btn-lime" href="mailto:ivoredafej@gmail.com">
              <Mail size={18} />
              Start a conversation
            </a>
            <a
              className="btn btn-dark"
              href="https://github.com/IvorEda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              View GitHub
            </a>
          </div>
        </div>

        <div className="contact-illustration">
          <RetroIcon name="server" />
          <RetroIcon name="lock" />
        </div>
      </div>
    </Container>
  </section>
);

export default ContactCTA;
