import fb from "../assets/img/fb.png";
import yt from "../assets/img/youtube.png";
import ig from "../assets/img/social_14072078.png";
import ins from "../assets/img/insta.png";


function Contact() {
  return (
    <>
    <br/><br/>
        <div className="contact-container">
            <div className="contact-form">
                <span className="badge">Contact Us</span>
                <h2 className="title">Get in Touch with Mobile Shop</h2>
                <p className="description">
                    Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message →</button>
                </form>
                <div className="contact-info">
                    <p>
                        Or reach us directly at: <span>support@mobileshop.com</span>
                    </p>
                    <p>
                        Call us: <span>+1 (800) 123-4567</span>
                    </p>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2025 Mobile Shop. All rights reserved</p>
                <p>Follow us on social media for the latest updates.</p>
                <ul className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" /> Facebook</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={yt} alt="YouTube" /> YouTube</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={ins} alt="Instagram" /> Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={ig} alt="LinkedIn" /> LinkedIn</a>
                </ul>
            </div>
        </footer>
    </>
  );
}
export default Contact;