import Navbar from './Navbar'
import '../index2.css'
function Biodata() {
    return (
        <div className="Biodata">
            <Navbar />
            <div class="container">
                <header>
                    <h1>BIODATA</h1>
                </header>
                <section class="profile">
                    <div class="profile-img">
                        <img src="images/Gambar2.jpeg" alt="Profile Picture" />
                    </div>
                    <div class="profile-info">
                        <h2>Nama: Ahmad Kurniawan</h2>
                        <p>TTL: Pagar mayang,06-09-2004</p>
                        <p>Umur: 19 tahun</p>
                        <p>Pekerjaan: Belum Bekerja</p>
                        <p>Lokasi: jl.Rimbo Panjang, Perumahan Puri Akasia B9 </p>
                    </div>
                </section>
                <section class="social-media">
                    <h2>Social Media</h2>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100027850933262" class="facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/amdkrniwn/" class="instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default Biodata;