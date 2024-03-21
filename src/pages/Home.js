import Navbar from './Navbar'
import '../index1.css'
function Home() {
    return (
        <div className="Home">
            <Navbar />
            <section class="section">
                <div class="section__container">
                    <div class="content">
                        <p class="subtitle">HELLO</p>
                        <h1 class="title">
                            Saya <span>Ahmad<br />Kurniawan</span>
                        </h1>
                        <p class="description">
                            Selamat Datang Di Website Profil saya, Saya Adalah seorang mahasiswa Di
                            Universistas Islam Negeri Sultan Syarif Kasim Riau. Jurusan Yang saya ambil adalah Teknik Infomatika.          </p>
                        <div class="action__btns">
                            <button class="hire__me">Tentang Saya</button>

                        </div>
                    </div>
                    <div class="image">
                        <img src="images/Gambar2.jpeg" alt="profile" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;