import styles from './Footer.module.css';

/**
 * Footer
 * Pie de página con la información de derechos y los enlaces institucionales.
 *
 * Responsabilidad única: mostrar la información de cierre constante de la aplicación.
 */
function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.derechos}>
        © {anioActual} Servicio Nacional de Aprendizaje SENA · Plataforma Zajuna
      </p>
      <ul className={styles.enlaces}>
        <li>
          <a href="#terminos">Términos</a>
        </li>
        <li>
          <a href="#privacidad">Privacidad</a>
        </li>
        <li>
          <a href="#soporte">Soporte</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
