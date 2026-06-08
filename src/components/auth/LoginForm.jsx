import { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';
import styles from './LoginForm.module.css';

/**
 * LoginForm
 * Formulario de inicio de sesión (correo, contraseña y botón de acceso).
 * Reutiliza el componente InputGroup para los campos.
 *
 * Responsabilidad única: capturar y validar las credenciales, y delegar
 * el intento de autenticación al componente padre mediante la prop onLogin.
 *
 * @param {Object} props
 * @param {Function} props.onLogin - Recibe (correo, password) y retorna true/false.
 * @param {boolean} [props.cargando] - Deshabilita el botón mientras se procesa.
 */
function LoginForm({ onLogin, cargando }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});

  /**
   * Valida los campos antes de enviar.
   * @returns {boolean} true si el formulario es válido.
   */
  const validar = () => {
    const nuevosErrores = {};
    if (!correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = 'Ingrese un correo válido.';
    }
    if (!password) {
      nuevosErrores.password = 'La contraseña es obligatoria.';
    }
    setErrores(nuevosErrores);
    // Si no hay claves en el objeto, no hay errores.
    return Object.keys(nuevosErrores).length === 0;
  };

  // Maneja el envío del formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (validar()) {
      onLogin(correo, password);
    }
  };

  return (
    <form className={styles.formulario} onSubmit={manejarEnvio} noValidate>
      <InputGroup
        id="correo"
        label="Correo institucional"
        tipo="email"
        valor={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="usuario@misena.edu.co"
        error={errores.correo}
        requerido
      />
      <InputGroup
        id="password"
        label="Contraseña"
        tipo="password"
        valor={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        error={errores.password}
        requerido
      />
      <button type="submit" className={styles.boton} disabled={cargando}>
        {cargando ? 'Ingresando...' : 'Iniciar sesión'}
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  cargando: PropTypes.bool,
};

LoginForm.defaultProps = {
  cargando: false,
};

export default LoginForm;
