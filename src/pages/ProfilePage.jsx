import UserProfileCard from '../components/data/UserProfileCard';
import { useAuth } from '../context/AuthContext';
import styles from './PageSection.module.css';

/**
 * ProfilePage
 * Vista del módulo "Mi perfil". Muestra los datos del aprendiz en sesión
 * usando el componente UserProfileCard.
 */
function ProfilePage() {
  const { usuario } = useAuth();

  return (
    <section>
      <header className={styles.encabezado}>
        <h2 className={styles.titulo}>Mi perfil</h2>
        <p className={styles.descripcion}>
          Información personal registrada en la plataforma.
        </p>
      </header>

      <UserProfileCard usuario={usuario} />
    </section>
  );
}

export default ProfilePage;
