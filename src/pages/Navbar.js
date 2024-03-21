import { Link } from 'react-router-dom';
import '../index1.css'
function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <div class="nav__content">
                    <div class="logo"><a href="#">Web profile</a></div>
                    <label htmlFor="check" class="checkbox">
                        <i class="ri-menu-line"></i>
                    </label>
                    <input type="checkbox" name="check" id="check" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Biodata">Biodata</Link></li>
                        <li><Link to="/Prestasi">Prestasi</Link></li>
                        <li><Link to="/Galeri">Galeri</Link></li>
                        <li><Link to="/Portofolio">Portofolio</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;