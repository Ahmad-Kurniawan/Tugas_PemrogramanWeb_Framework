import Navbar from './Navbar'
import '../index4.css'

function Galeri() {
    return (
        <div className="Galeri">
            <Navbar />
            <div class="gallery">
                <div class="image">
                    <img src="images/Gambar2.jpeg" alt="Gambar 1" />
                    <div class="overlay">
                        <h2>Ahmad.K</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="images/Gambar4.jpeg" alt="Gambar 2" />
                    <div class="overlay">
                        <h2>Ahmad.K</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="images/Gambar6.jpeg" alt="Gambar 3" />
                    <div class="overlay">
                        <h2>Ahmad.K</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Galeri;