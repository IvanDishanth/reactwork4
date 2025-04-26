import { Link } from "react-router-dom";
import log from "../assets/img/download .png";


function Navbar() {
  return (
    <>
    <section className="navbar">
        <div className="container">
            <div className="logo">
                <img src={log} alt="Logo" />
            </div>
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </div>
    </section>
 

    </>
  );
}
export default Navbar;