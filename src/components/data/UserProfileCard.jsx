import PropTypes from 'prop-types';
import styles from './UserProfileCard.module.css';

/**
 * UserProfileCard
 * Tarjeta de presentación que muestra los datos del usuario en modo lectura
 * (nombre, tipo de documento, ficha, programa, correo).
 *
 * Responsabilidad única: visualizar la información del aprendiz; no la edita.
 *
 * @param {Object} props
 * @param {Object} props.usuario - Datos del usuario a mostrar.
 * @param {string} props.usuario.nombre
 * @param {string} props.usuario.tipoDocumento
 * @param {string} props.usuario.numeroDocumento
 * @param {string} props.usuario.ficha
 * @param {string} props.usuario.programa
 * @param {string} props.usuario.correo
 */
function UserProfileCard({ usuario }) {
  // Manejo de error: si no llega el usuario, se informa en lugar de fallar.
  if (!usuario) {
    return <p className={styles.vacio}>No hay información del usuario disponible.</p>;
  }

  const iniciales = usuario.nombre
    .split(' ')
    .slice(0, 2)
    .map((palabra) => palabra.charAt(0))
    .join('')
    .toUpperCase();

  // Lista de campos a renderizar de forma dinámica
  const campos = [
    { etiqueta: 'Tipo de documento', valor: usuario.tipoDocumento },
    { etiqueta: 'Número de documento', valor: usuario.numeroDocumento },
    { etiqueta: 'Ficha', valor: usuario.ficha },
    { etiqueta: 'Programa', valor: usuario.programa },
    { etiqueta: 'Correo institucional', valor: usuario.correo },
  ];

  return (
    <article className={styles.tarjeta}>
      <div className={styles.cabecera}>
        <span className={styles.avatar}>{iniciales}</span>
        <div>
          <h3 className={styles.nombre}>{usuario.nombre}</h3>
          <span className={styles.rol}>{usuario.rol || 'Aprendiz'}</span>
        </div>
      </div>

      <dl className={styles.datos}>
        {campos.map((campo) => (
          <div key={campo.etiqueta} className={styles.fila}>
            <dt className={styles.etiqueta}>{campo.etiqueta}</dt>
            <dd className={styles.valor}>{campo.valor}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

UserProfileCard.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    tipoDocumento: PropTypes.string,
    numeroDocumento: PropTypes.string,
    ficha: PropTypes.string,
    programa: PropTypes.string,
    correo: PropTypes.string,
    rol: PropTypes.string,
  }),
};

UserProfileCard.defaultProps = {
  usuario: null,
};

export default UserProfileCard;
