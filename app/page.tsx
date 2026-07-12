'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Cargar Bootstrap JavaScript en el cliente
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f8f9fa;
        }

        /* Navbar customizaciones */
        .navbar-custom {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
          font-family: 'Luckiest Guy', cursive;
          font-weight: normal;
          font-size: 2rem;
          color: #fff !important;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          margin: 0 10px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #fbbf24 !important;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        /* Banner Principal */
        .banner {
          /* Usando la imagen subida a public/banner.jpg.webp */
          background: linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), 
                      url('/banner.jpg.webp') center/cover no-repeat;
          background-color: #1e3a8a; /* Fallback si la imagen tarda en cargar */
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          /* margin-top no es necesario si el banner ocupa toda la pantalla, pero compensamos el navbar */
          padding-top: 70px;
          position: relative;
          overflow: hidden;
        }

        .banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .banner-content {
          position: relative;
          z-index: 2;
          animation: fadeInDown 1s ease;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .banner h1 {
          font-family: 'Luckiest Guy', cursive;
          font-size: 5.5rem;
          font-weight: normal;
          text-shadow: 4px 4px 0 #1e3a8a, -2px -2px 0 #1e3a8a, 2px -2px 0 #1e3a8a, -2px 2px 0 #1e3a8a, 4px 4px 15px rgba(0, 0, 0, 0.8);
          margin-bottom: 20px;
          letter-spacing: 4px;
          color: white;
          text-transform: uppercase;
        }

        .banner p {
          font-size: 1.3rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          margin-bottom: 30px;
        }

        .btn-trailer {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #000;
          font-weight: bold;
          font-size: 1.1rem;
          padding: 15px 40px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 8px 15px rgba(251, 191, 36, 0.4);
        }

        .btn-trailer:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(251, 191, 36, 0.6);
          background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          color: #000;
          text-decoration: none;
        }

        /* Sección Información */
        .info-section {
          padding: 80px 0;
          background: #fff;
        }

        .section-title {
          font-family: 'Luckiest Guy', cursive;
          font-size: 3rem;
          font-weight: normal;
          margin-bottom: 40px;
          text-align: center;
          color: #1e3a8a;
          position: relative;
          display: inline-block;
          width: 100%;
          letter-spacing: 2px;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          margin: 15px auto 0;
        }

        .sinopsis {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          text-align: justify;
        }

        .info-img {
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          width: 100%;
          min-height: 300px;
          background-color: #ddd; /* Espacio placeholder */
          object-fit: cover;
        }

        .info-img:hover {
          transform: scale(1.02);
        }

        /* Carrusel */
        .carousel-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }

        .carousel {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .carousel-item {
          height: 500px;
          background-color: #ccc; /* Fallback si no hay imagen */
        }

        .carousel-item img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 50px;
          height: 50px;
          background-color: rgba(30, 58, 138, 0.7);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
          margin: 0 20px;
        }

        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          background-color: rgba(251, 191, 36, 0.9);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }

        /* Footer */
        footer {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          padding: 40px 0;
          text-align: center;
        }

        footer p {
          margin: 0;
          font-size: 1rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .banner h1 {
            font-size: 2.5rem;
          }

          .banner p {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .carousel-item {
            height: 300px;
          }

          .navbar-brand {
            font-size: 1.3rem;
          }
        }
      `}</style>

      {/* Navbar - Usamos fixed-top de Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="#home">
            ❄️ La Era del Hielo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#info">Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeria">Galería</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner Principal */}
      <section className="banner" id="home">
        <div className="banner-content">
          <h1>La Era del Hielo</h1>
          <p>Una aventura helada que cambió las películas de animación</p>
          <a
            href="https://www.youtube.com/watch?v=RI7e1IksKEQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-trailer"
          >
            ▶️ Ver Tráiler
          </a>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info-section" id="info">
        <div className="container">
          <h2 className="section-title">Acerca de la Película</h2>
          <div className="row align-items-center mt-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/sinopsis.jpg"
                alt="Escena de La Era del Hielo"
                className="img-fluid info-img"
              />
            </div>
            <div className="col-md-6">
              <p className="sinopsis">
                <strong>La Era del Hielo</strong> es una película de animación por computadora estadounidense de 2002, 
                dirigida por Chris Wedge y Carlos Saldaña. La trama sigue a Manny, un mamut lanudo; Sid, un perezoso; 
                y Diego, un tigre diente de sable, quienes viajan juntos para devolver a un bebé humano a su tribu durante 
                la última era glacial.
              </p>
              <p className="sinopsis mt-3">
                Este clásico de animación combina humor, acción y una historia emotiva que encantó a millones de personas 
                en todo el mundo. La química entre los personajes principales y el mundo helado bellamente animado hacen 
                que esta película sea un ícono de la animación moderna.
              </p>
              <p className="sinopsis mt-3">
                <strong>Año de Lanzamiento:</strong> 2002 | <strong>Duración:</strong> 81 minutos | 
                <strong> Estudio:</strong> Blue Sky Studios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Imágenes */}
      <section className="carousel-section" id="galeria">
        <div className="container">
          <h2 className="section-title mb-5">Galería de la Película</h2>
          <div
            id="movieCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Indicadores del carrusel */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/carrusel-1.jpg.jfif"
                  alt="Escena 1"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/carrusel-2.jpg"
                  alt="Escena 2"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/carrusel-3.jpg"
                  alt="Escena 3"
                  className="d-block w-100"
                />
              </div>
            </div>
            
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 La Era del Hielo - Landing Page. Todos los derechos reservados.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            Creado con HTML, CSS, Bootstrap y Next.js
          </p>
        </div>
      </footer>
    </>
  );
}
