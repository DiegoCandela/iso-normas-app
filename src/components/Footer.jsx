// src/components/Footer.jsx
import '../index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Creado por <strong>Diego Fernando Candela Becerra</strong></p>
        <a href="mailto:dfcandela@uts.edu.co" className="footer-email">
          dfcandela@uts.edu.co
        </a>
        <div className="footer-line" />
        <p className="footer-copy">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
