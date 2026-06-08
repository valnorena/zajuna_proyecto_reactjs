import PropTypes from 'prop-types';
import styles from './CourseCard.module.css';

/**
 * CourseCard
 * Tarjeta visual para presentar cada curso al que está inscrito el usuario.
 *
 * Responsabilidad única: mostrar la información resumida de un curso.
 *
 * @param {Object} props
 * @param {Object} props.curso - Datos del curso.
 * @param {string} props.curso.titulo
 * @param {string} props.curso.instructor
 * @param {number} props.curso.progreso - Porcentaje de avance (0 a 100).
 * @param {string} [props.curso.color] - Color de acento de la tarjeta.
 */
function CourseCard({ curso }) {
  // Manejo de error: validación básica del progreso (debe estar entre 0 y 100).
  const progreso = Math.min(Math.max(curso.progreso ?? 0, 0), 100);
  const completado = progreso === 100;

  return (
    <article className={styles.tarjeta}>
      <div className={styles.barraColor} style={{ background: curso.color }} />
      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{curso.titulo}</h3>
        <p className={styles.instructor}>Instructor: {curso.instructor}</p>

        <div className={styles.progresoInfo}>
          <span>{completado ? 'Completado' : 'Progreso'}</span>
          <span className={styles.porcentaje}>{progreso}%</span>
        </div>
        <div className={styles.barraFondo}>
          <div
            className={styles.barraAvance}
            style={{ width: `${progreso}%`, background: curso.color }}
          />
        </div>

        <button type="button" className={styles.boton}>
          {completado ? 'Repasar curso' : 'Continuar'}
        </button>
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  curso: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    progreso: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default CourseCard;
