import { useState, useEffect } from 'react';
import SpinnerLoading from '../components/feedback/SpinnerLoading';
import { calificacionesMock } from '../data/mockData';
import styles from './GradesPage.module.css';
import pageStyles from './PageSection.module.css';

/**
 * GradesPage
 * Vista del módulo "Calificaciones". Muestra el juicio evaluativo
 * (Aprobado / Por evaluar) de cada evidencia del aprendiz.
 */
function GradesPage() {
  const [calificaciones, setCalificaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCalificaciones(calificacionesMock);
      setCargando(false);
    }, 700);
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <section>
      <header className={pageStyles.encabezado}>
        <h2 className={pageStyles.titulo}>Calificaciones</h2>
        <p className={pageStyles.descripcion}>
          Juicio evaluativo de tus evidencias entregadas.
        </p>
      </header>

      {cargando ? (
        <SpinnerLoading mensaje="Cargando calificaciones..." />
      ) : (
        <ul className={styles.lista}>
          {calificaciones.map((item) => (
            <li key={item.id} className={styles.item}>
              <div>
                <span className={styles.codigo}>{item.id}</span>
                <p className={styles.evidencia}>{item.evidencia}</p>
              </div>
              <span className={styles.nota}>{item.nota}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default GradesPage;
