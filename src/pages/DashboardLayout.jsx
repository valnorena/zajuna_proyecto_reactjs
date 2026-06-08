import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import styles from './DashboardLayout.module.css';

/**
 * DashboardLayout
 * Estructura principal de la aplicación una vez iniciada la sesión.
 * Compone los componentes de layout (Navbar + Sidebar + Footer) y deja
 * un espacio central (<Outlet />) donde se renderiza la vista activa.
 *
 * Gracias al DOM virtual de React, al navegar entre módulos solo se
 * actualiza el contenido central; la barra superior y el menú lateral
 * conservan su estado.
 */
function DashboardLayout() {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();
  // Controla la visibilidad del menú lateral en dispositivos móviles
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const manejarCerrarSesion = () => {
    cerrarSesion();
    navigate('/login');
  };

  return (
    <div className={styles.contenedor}>
      <Navbar
        nombreUsuario={usuario.nombre}
        onCerrarSesion={manejarCerrarSesion}
        onToggleSidebar={() => setSidebarAbierto((abierto) => !abierto)}
      />

      <Sidebar abierto={sidebarAbierto} onCerrar={() => setSidebarAbierto(false)} />

      {/* Capa oscura que cierra el menú al tocar fuera (solo móvil) */}
      {sidebarAbierto && (
        <div className={styles.overlay} onClick={() => setSidebarAbierto(false)} />
      )}

      <div className={styles.areaPrincipal}>
        <main className={styles.contenido}>
          {/* Aquí se renderiza la vista de la ruta activa */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
