import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

/**
 * Sidebar
 * Menú lateral para la navegación entre los módulos de la plataforma
 * (Cursos, Evidencias, Calificaciones, Perfil).
 *
 * Responsabilidad única: presentar la navegación principal y resaltar
 * la sección activa mediante NavLink de react-router-dom.
 *
 * @param {Object} props
 * @param {boolean} props.abierto - Controla la visibilidad del menú en móvil.
 * @param {Function} props.onCerrar - Cierra el menú al seleccionar una opción en móvil.
 */
function Sidebar({ abierto, onCerrar }) {
  // Definición de los enlaces de navegación del LMS
  const enlaces = [
    { ruta: '/cursos', etiqueta: 'Cursos', icono: '📚' },
    { ruta: '/evidencias', etiqueta: 'Evidencias', icono: '📝' },
    { ruta: '/calificaciones', etiqueta: 'Calificaciones', icono: '🏆' },
    { ruta: '/perfil', etiqueta: 'Mi perfil', icono: '👤' },
  ];

  return (
    <aside className={`${styles.sidebar} ${abierto ? styles.abierto : ''}`}>
      <nav className={styles.nav}>
        <ul>
          {enlaces.map((enlace) => (
            <li key={enlace.ruta}>
              <NavLink
                to={enlace.ruta}
                onClick={onCerrar}
                // NavLink aplica la clase "activo" a la ruta seleccionada
                className={({ isActive }) =>
                  `${styles.enlace} ${isActive ? styles.activo : ''}`
                }
              >
                <span className={styles.icono}>{enlace.icono}</span>
                <span>{enlace.etiqueta}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  abierto: PropTypes.bool,
  onCerrar: PropTypes.func,
};

Sidebar.defaultProps = {
  abierto: false,
  onCerrar: null,
};

export default Sidebar;
