import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { usuarioMock } from '../data/mockData';

/**
 * Contexto de autenticación.
 * Maneja de forma centralizada la sesión del usuario para que cualquier
 * componente pueda saber si hay sesión activa y acceder a los datos del aprendiz.
 *
 * Nota: la validación real contra el backend (Spring Boot + MySQL) se hará
 * más adelante mediante la API REST. Aquí se simula la autenticación.
 */
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  /**
   * Simula el inicio de sesión.
   * @param {string} correo - Correo institucional.
   * @param {string} password - Contraseña.
   * @returns {boolean} true si las credenciales son válidas.
   */
  const iniciarSesion = (correo, password) => {
    // Validación simulada: en producción se reemplaza por una petición a la API.
    if (correo === usuarioMock.correo && password === '123456') {
      setUsuario(usuarioMock);
      return true;
    }
    return false;
  };

  // Cierra la sesión del usuario
  const cerrarSesion = () => setUsuario(null);

  const valor = { usuario, iniciarSesion, cerrarSesion };

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook personalizado para consumir el contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
