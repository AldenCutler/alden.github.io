import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <div className="App-footer">
      
      <div className="footer-links">
        <a href="https://linkedin.com/in/aldencutler" className="footer-icon">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
        </a>
        <a href="https://github.com/AldenCutler" className="footer-icon">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a href="https://instagram.com/aldencutler" className="footer-icon">
          <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </a>
      </div>
      <p>Created by Alden Cutler.</p>
    </div>
  );
}
