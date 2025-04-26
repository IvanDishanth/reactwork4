import fb from "../assets/img/fb.png";
import yt from "../assets/img/youtube.png";
import ig from "../assets/img/social_14072078.png";
import ins from "../assets/img/insta.png";
import sm from "../assets/img/Galaxy S24 Ultra.jpg";
import vivo from "../assets/img/VIVO V30E 5G.png";
import xiaomi from "../assets/img/xiaomi redmi Note 14 Pro 5G.jpeg";


function Home() {
  return (
    <div>
        {/* Hero Section */}
        <section id="home" className="hero" >
            <div className="hero-content">
                <h4>Exclusive Offer</h4>
                <h1>Welcome to Mobile Shop</h1>
                <p>Discover the latest smartphones at unbeatable prices.</p>
                <a href="#products" className="btn">Shop Now</a>
            </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products">
            <div className="container">
                <div className="section-header">
                    <h4>Our Products</h4>
                    <h2>Latest Smartphones</h2>
                    <div className="divider"></div>
                </div>
                <div className="product-grid">
                    <div className="product-card">
                        <img src={sm} alt="Phone 1" />
                        <h3>Smartphone A</h3>
                        <p>High performance and sleek design.</p>
                        <p className="price">$499</p>
                        <button className="btn">Buy Now</button>
                    </div>
                    <div className="product-card">
                        <img src={vivo} alt="Phone 2" />
                        <h3>Smartphone B</h3>
                        <p>Affordable and reliable performance.</p>
                        <p className="price">$399</p>
                        <button className="btn">Buy Now</button>
                    </div>
                    <div className="product-card">
                        <img src={xiaomi} alt="Phone 3" />
                        <h3>Smartphone C</h3>
                        <p>Cutting-edge features and technology.</p>
                        <p className="price">$699</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>

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
    </div>
  );
}
export default Home;