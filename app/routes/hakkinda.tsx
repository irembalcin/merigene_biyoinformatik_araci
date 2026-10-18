import { Link } from "react-router";

export default function Hakkinda() {
  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ color: "#2c3e50" }}>👩‍🔬 Proje Hakkında</h1>
      <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto" }}>
        Bu gen kataloğu, biyoinformatik analizleri ve laboratuvar verilerini 
        dijital ortamda düzenli bir şekilde takip etmek için tasarlanmıştır.
      </p>
      <div style={{ marginTop: "40px" }}>
        <Link to="/" style={{ padding: "10px 20px", backgroundColor: "#0ea5e9", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
          🏠 Ana Sayfaya Geri Dön
        </Link>
      </div>
    </div>
  );
}