/**
 * datos de prueba (mock) del LMS Zajuna.
 *
 * En la versión final estos datos se consumirán del backend en Spring Boot
 * a través de una API REST (los datos provienen de la base de datos MySQL).
 * Por ahora se simulan localmente para poder construir y validar la interfaz.
 */

// Datos del usuario (aprendiz) autenticado
export const usuarioMock = {
  nombre: 'Valentina Noreña Gomez',
  tipoDocumento: 'Cédula de Ciudadanía',
  numeroDocumento: '1.000.123.456',
  ficha: '3134621',
  programa: 'Análisis y Desarrollo de Software',
  correo: 'valnorena@misena.edu.co',
  rol: 'Aprendiz',
};

// Cursos en los que está inscrito el aprendiz
export const cursosMock = [
  {
    id: 1,
    titulo: 'Desarrollo de Frontend con React JS',
    instructor: 'Elizabeth Gelves Gelves',
    progreso: 75,
    color: '#39a900',
  },
  {
    id: 2,
    titulo: 'Construcción de aplicaciones con JAVA',
    instructor: 'Jonathan Guerrero Astaiza',
    progreso: 100,
    color: '#ff7900',
  },
  {
    id: 3,
    titulo: 'Construcción de API',
    instructor: 'Zulema Leon Escobar',
    progreso: 40,
    color: '#1570ef',
  },
  {
    id: 4,
    titulo: 'Integración continua',
    instructor: 'Deivis Eduard Ramírez',
    progreso: 60,
    color: '#9333ea',
  },
];

// Evidencias del aprendiz (entregadas y pendientes)
export const evidenciasMock = [
  {
    id: 'AA4-EV01',
    nombre: 'Taller sobre componentes frontend',
    fecha: '2025-05-20',
    estado: 'Entregada',
  },
  {
    id: 'AA4-EV02',
    nombre: 'Verificación de procedimientos (listas de chequeo)',
    fecha: '2025-05-28',
    estado: 'Entregada',
  },
  {
    id: 'AA4-EV03',
    nombre: 'Componente frontend del proyecto formativo',
    fecha: '2025-06-05',
    estado: 'Pendiente',
  },
  {
    id: 'AA5-EV01',
    nombre: 'Diseño y desarrollo de servicios web - caso',
    fecha: '2025-06-15',
    estado: 'Pendiente',
  },
];

// Calificaciones por evidencia
export const calificacionesMock = [
  { id: 'AA1-EV01', evidencia: 'Informe técnico plan de trabajo', nota: 'Aprobado' },
  { id: 'AA2-EV01', evidencia: 'Codificación de módulos del software', nota: 'Aprobado' },
  { id: 'AA4-EV01', evidencia: 'Taller sobre componentes frontend', nota: 'Aprobado' },
  { id: 'AA4-EV02', evidencia: 'Verificación de procedimientos', nota: 'Aprobado' },
];
