import '../index5.css'
import Navbar from './Navbar'
function Portofolio() {
    return (
        <div className="Portofolio">
            <Navbar />
            <section id="projects">
                <div class="container">
                    <h2>PORTOFOLIO</h2>
                    <div class="project">
                        <img src="images/Gambar7.jpeg" alt="maze" />
                        <h3>Projek 1</h3>
                        <p>Game Maze Solver.</p>
                    </div>
                    <div class="project">
                        <img src="images/Gambar8.png" alt="Proyek 2" />
                        <h3>Projek 2</h3>
                        <p>Game Puzzle.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portofolio;
