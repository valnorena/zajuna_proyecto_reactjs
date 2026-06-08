import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

/**
 * Navbar
 * Barra de navegación superior. Contiene el logotipo institucional,
 * el título de la plataforma y el menú de perfil del usuario.
 *
 * Responsabilidad única: presentar la cabecera de la aplicación y las
 * acciones rápidas de la sesión (ver perfil, cerrar sesión).
 *
 * @param {Object} props
 * @param {string} props.nombreUsuario - Nombre del aprendiz en sesión.
 * @param {Function} props.onCerrarSesion - Acción para cerrar sesión.
 * @param {Function} [props.onToggleSidebar] - Muestra/oculta el menú lateral en móvil.
 */
function Navbar({ nombreUsuario, onCerrarSesion, onToggleSidebar }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

  // Obtiene las iniciales del usuario para el avatar
  const iniciales = nombreUsuario
    .split(' ')
    .slice(0, 2)
    .map((palabra) => palabra.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <header className={styles.navbar}>
      <div className={styles.izquierda}>
        {/* Botón hamburguesa: solo visible en pantallas pequeñas */}
        <button
          type="button"
          className={styles.hamburguesa}
          onClick={onToggleSidebar}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <div className={styles.logo}>
          <span className={styles.logoIcono}>Z</span>
          <span className={styles.logoTexto}>Zajuna</span>
        </div>
      </div>

      <div className={styles.perfil}>
        <button
          type="button"
          className={styles.botonPerfil}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-haspopup="true"
          aria-expanded={menuAbierto}
        >
          <span className={styles.avatar}>{iniciales}</span>
          <span className={styles.nombre}>{nombreUsuario}</span>
          <span className={styles.flecha}>▾</span>
        </button>

        {/* Menú desplegable del perfil */}
        {menuAbierto && (
          <ul className={styles.menu}>
            <li>
              <button
                type="button"
                className={styles.menuItem}
                onClick={() => {
                  setMenuAbierto(false);
                  navigate('/perfil');
                }}
              >
                Mi perfil
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${styles.menuItem} ${styles.salir}`}
                onClick={onCerrarSesion}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

Navbar.propTypes = {
  nombreUsuario: PropTypes.string.isRequired,
  onCerrarSesion: PropTypes.func.isRequired,
  onToggleSidebar: PropTypes.func,
};

Navbar.defaultProps = {
  onToggleSidebar: null,
};

export default Navbar;
