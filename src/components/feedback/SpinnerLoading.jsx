import PropTypes from 'prop-types';
import styles from './SpinnerLoading.module.css';

/**
 * SpinnerLoading
 * Indicador visual de carga que se muestra mientras se consumen
 * los datos del servidor (API REST).
 *
 * Responsabilidad única: comunicar visualmente un estado de carga.
 *
 * @param {Object} props
 * @param {string} [props.mensaje] - Texto opcional que acompaña al spinner.
 */
function SpinnerLoading({ mensaje }) {
  return (
    <div className={styles.contenedor} role="status" aria-live="polite">
      <div className={styles.spinner} />
      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </div>
  );
}

SpinnerLoading.propTypes = {
  mensaje: PropTypes.string,
};

SpinnerLoading.defaultProps = {
  mensaje: 'Cargando...',
};

export default SpinnerLoading;
