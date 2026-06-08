import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import CoursesPage from './pages/CoursesPage';
import EvidencesPage from './pages/EvidencesPage';
import GradesPage from './pages/GradesPage';
import ProfilePage from './pages/ProfilePage';

/**
 * Componente principal de la aplicación.
 * Define las rutas del LMS y protege las vistas internas:
 * si no hay sesión activa, redirige al login.
 */
function App() {
  const { usuario } = useAuth();

  return (
    <Routes>
      {/* Ruta pública: inicio de sesión */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas: solo accesibles con sesión iniciada */}
      <Route
        path="/"
        element={usuario ? <DashboardLayout /> : <Navigate to="/login" replace />}
      >
        {/* Al entrar a "/" se redirige por defecto a Cursos */}
        <Route index element={<Navigate to="/cursos" replace />} />
        <Route path="cursos" element={<CoursesPage />} />
        <Route path="evidencias" element={<EvidencesPage />} />
        <Route path="calificaciones" element={<GradesPage />} />
        <Route path="perfil" element={<ProfilePage />} />
      </Route>

      {/* Cualquier ruta desconocida redirige al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
