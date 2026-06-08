import PropTypes from 'prop-types';
import styles from './AlertMessage.module.css';

/**
 * AlertMessage
 * Muestra alertas para notificar al usuario el resultado de una acción
 * (por ejemplo, credenciales incorrectas en el inicio de sesión).
 *
 * Responsabilidad única: comunicar mensajes de éxito, error, advertencia o información.
 *
 * @param {Object} props
 * @param {('success'|'error'|'warning'|'info')} props.tipo - Tipo de alerta.
 * @param {string} props.mensaje - Texto a mostrar.
 * @param {Function} [props.onCerrar] - Callback opcional para cerrar la alerta.
 */
function AlertMessage({ tipo, mensaje, onCerrar }) {
  // Manejo de error: si no llega mensaje, no se renderiza nada.
  if (!mensaje) return null;

  // Íconos según el tipo de alerta
  const iconos = {
    success: '✓',
    error: '✕',
    warning: '!',
    info: 'i',
  };

  return (
    <div className={`${styles.alerta} ${styles[tipo]}`} role="alert">
      <span className={styles.icono}>{iconos[tipo]}</span>
      <p className={styles.texto}>{mensaje}</p>
      {onCerrar && (
        <button
          type="button"
          className={styles.cerrar}
          onClick={onCerrar}
          aria-label="Cerrar alerta"
        >
          ×
        </button>
      )}
    </div>
  );
}

AlertMessage.propTypes = {
  tipo: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  mensaje: PropTypes.string.isRequired,
  onCerrar: PropTypes.func,
};

AlertMessage.defaultProps = {
  tipo: 'info',
  onCerrar: null,
};

export default AlertMessage;
