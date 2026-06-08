import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import AlertMessage from '../components/feedback/AlertMessage';
import styles from './LoginPage.module.css';

/**
 * LoginPage
 * Vista de inicio de sesión del LMS Zajuna.
 * Compone el formulario LoginForm y el componente AlertMessage para
 * notificar errores de autenticación.
 */
function LoginPage() {
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  /**
   * Procesa el intento de inicio de sesión recibido desde LoginForm.
   * @param {string} correo
   * @param {string} password
   */
  const manejarLogin = (correo, password) => {
    const exito = iniciarSesion(correo, password);
    if (exito) {
      navigate('/cursos'); // Redirige al panel principal
    } else {
      // Estado de error: credenciales incorrectas
      setError('Credenciales incorrectas. Verifique su correo y contraseña.');
    }
  };

  return (
    <div className={styles.pagina}>
      <div className={styles.tarjeta}>
        <div className={styles.marca}>
          <span className={styles.logoIcono}>Z</span>
          <h1 className={styles.logoTexto}>Zajuna</h1>
        </div>
        <p className={styles.subtitulo}>
          Sistema de Gestión de Aprendizaje · SENA
        </p>

        {/* La alerta solo aparece cuando hay un error */}
        <div className={styles.alerta}>
          <AlertMessage tipo="error" mensaje={error} onCerrar={() => setError('')} />
        </div>

        <LoginForm onLogin={manejarLogin} />

        <p className={styles.ayuda}>
          Datos de prueba: <strong>valnorena@misena.edu.co</strong> / <strong>123456</strong>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
