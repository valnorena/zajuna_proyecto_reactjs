import PropTypes from 'prop-types';
import styles from './InputGroup.module.css';

/**
 * InputGroup
 * Componente genérico y reutilizable para campos de texto
 * (correo, contraseña, número de documento, nombre, etc.).
 *
 * Responsabilidad única: renderizar una etiqueta + campo de entrada controlado,
 * con soporte para mostrar mensajes de error de validación.
 *
 * @param {Object} props
 * @param {string} props.id - Identificador único del campo (asocia label e input).
 * @param {string} props.label - Texto de la etiqueta.
 * @param {string} props.valor - Valor actual del campo (componente controlado).
 * @param {Function} props.onChange - Manejador del evento change.
 * @param {string} [props.tipo] - Tipo de input (text, email, password...).
 * @param {string} [props.placeholder] - Texto de ayuda dentro del campo.
 * @param {string} [props.error] - Mensaje de error a mostrar bajo el campo.
 * @param {boolean} [props.requerido] - Indica si el campo es obligatorio.
 */
function InputGroup({ id, label, valor, onChange, tipo, placeholder, error, requerido }) {
  return (
    <div className={styles.grupo}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {requerido && <span className={styles.obligatorio}> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={tipo}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        required={requerido}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
      />
      {/* Manejo de estado de error: solo se muestra si existe un mensaje */}
      {error && <span className={styles.mensajeError}>{error}</span>}
    </div>
  );
}

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  requerido: PropTypes.bool,
};

InputGroup.defaultProps = {
  tipo: 'text',
  placeholder: '',
  error: '',
  requerido: false,
};

export default InputGroup;
