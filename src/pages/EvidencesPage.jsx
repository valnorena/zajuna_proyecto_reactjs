import { useState, useEffect } from 'react';
import EvidenceTable from '../components/data/EvidenceTable';
import SpinnerLoading from '../components/feedback/SpinnerLoading';
import AlertMessage from '../components/feedback/AlertMessage';
import { evidenciasMock } from '../data/mockData';
import styles from './PageSection.module.css';

/**
 * EvidencesPage
 * Vista del módulo "Evidencias". Muestra las evidencias entregadas y
 * pendientes del aprendiz en una tabla (EvidenceTable).
 */
function EvidencesPage() {
  const [evidencias, setEvidencias] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Simula la carga de evidencias desde el servidor
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setEvidencias(evidenciasMock);
      setCargando(false);
    }, 700);
    return () => clearTimeout(temporizador);
  }, []);

  // Cuenta cuántas evidencias están pendientes para mostrar un aviso
  const pendientes = evidencias.filter((e) => e.estado === 'Pendiente').length;

  return (
    <section>
      <header className={styles.encabezado}>
        <h2 className={styles.titulo}>Mis evidencias</h2>
        <p className={styles.descripcion}>
          Estado de las evidencias del proyecto formativo.
        </p>
      </header>

      {cargando ? (
        <SpinnerLoading mensaje="Cargando evidencias..." />
      ) : (
        <>
          {pendientes > 0 && (
            <div className={styles.aviso}>
              <AlertMessage
                tipo="warning"
                mensaje={`Tienes ${pendientes} evidencia(s) pendiente(s) por entregar.`}
              />
            </div>
          )}
          <EvidenceTable evidencias={evidencias} />
        </>
      )}
    </section>
  );
}

export default EvidencesPage;
