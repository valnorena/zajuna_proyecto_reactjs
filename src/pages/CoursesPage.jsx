import { useState, useEffect } from 'react';
import CourseCard from '../components/data/CourseCard';
import SpinnerLoading from '../components/feedback/SpinnerLoading';
import { cursosMock } from '../data/mockData';
import styles from './PageSection.module.css';

/**
 * CoursesPage
 * Vista del módulo "Cursos". Lista los cursos del aprendiz usando CourseCard.
 * Simula la carga de datos desde el servidor mostrando el SpinnerLoading.
 */
function CoursesPage() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Simula la consulta de datos a la API REST al montar el componente
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCursos(cursosMock);
      setCargando(false);
    }, 700);

    // Limpieza del temporizador para evitar fugas de memoria
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <section>
      <header className={styles.encabezado}>
        <h2 className={styles.titulo}>Mis cursos</h2>
        <p className={styles.descripcion}>
          Cursos en los que estás inscrito actualmente.
        </p>
      </header>

      {/* Mientras carga se muestra el spinner; luego, la cuadrícula de cursos */}
      {cargando ? (
        <SpinnerLoading mensaje="Cargando cursos..." />
      ) : (
        <div className={styles.grid}>
          {cursos.map((curso) => (
            <CourseCard key={curso.id} curso={curso} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CoursesPage;
