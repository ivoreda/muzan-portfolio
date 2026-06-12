import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";

const Navbar = ({ navItems, activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="nav">
      <Container className="nav-inner">
        <a className="nav-logo" href="#top" onClick={() => handleNavigate("top")}>
          Ivor.dev
        </a>

        <nav className="nav-pill" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a className="nav-cta" href="mailto:ivoredafej@gmail.com">
          Let's Talk
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
          <a href="mailto:ivoredafej@gmail.com">Let's Talk</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
