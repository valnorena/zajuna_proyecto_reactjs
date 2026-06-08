import PropTypes from 'prop-types';
import styles from './EvidenceTable.module.css';

/**
 * EvidenceTable
 * Tabla dinámica para listar las evidencias pendientes y entregadas.
 *
 * Responsabilidad única: renderizar una colección de evidencias en formato tabla.
 *
 * @param {Object} props
 * @param {Array} props.evidencias - Lista de evidencias a mostrar.
 */
function EvidenceTable({ evidencias }) {
  // Manejo de estado de error / lista vacía
  if (!evidencias || evidencias.length === 0) {
    return <p className={styles.vacio}>No hay evidencias registradas.</p>;
  }

  return (
    <div className={styles.contenedor}>
      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Evidencia</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {evidencias.map((evidencia) => (
            <tr key={evidencia.id}>
              <td className={styles.codigo}>{evidencia.id}</td>
              <td>{evidencia.nombre}</td>
              <td>{evidencia.fecha}</td>
              <td>
                {/* La clase del estado cambia según esté entregada o pendiente */}
                <span
                  className={`${styles.estado} ${
                    evidencia.estado === 'Entregada' ? styles.entregada : styles.pendiente
                  }`}
                >
                  {evidencia.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

EvidenceTable.propTypes = {
  evidencias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      fecha: PropTypes.string,
      estado: PropTypes.oneOf(['Entregada', 'Pendiente']),
    })
  ),
};

EvidenceTable.defaultProps = {
  evidencias: [],
};

export default EvidenceTable;
