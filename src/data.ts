export const SOURCES = {
  endutih2024: {
    short: 'INEGI, ENDUTIH 2024, Comunicado 57/25 y Reporte de Resultados 9/25.',
    url: 'https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2025/endutih/ENDUTIH_24.pdf',
  },
  endutih2025: {
    short: 'INEGI, ENDUTIH 2025, Comunicado 32/26 y Reporte de Resultados 19/26.',
    url: 'https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/endutih/ENDUTIH_25.pdf',
  },
  sep2024: {
    short: 'SEP-DGPPyEE, Principales cifras del Sistema Educativo Nacional 2024-2025.',
    url: 'https://www.planeacion.sep.gob.mx/Doc/estadistica_e_indicadores/principales_cifras/principales_cifras_2024_2025_bolsillo.pdf',
  },
  educationUse: {
    short: 'INEGI, ENDUTIH 2020, comunicado de resultados.',
    url: 'https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/OtrTemEcon/ENDUTIH_2020.pdf',
  },
  pef2026: {
    short: 'DOF, Presupuesto de Egresos de la Federación para el Ejercicio Fiscal 2026, artículos 2.º y 3.º.',
    url: 'https://dof.gob.mx/2025/SHCP/PEF_2026.html',
  },
  cefp2026: {
    short: 'CEFP, Cámara de Diputados, Nota 163/2025 sobre el Decreto de PEF 2026.',
    url: 'https://www.cefp.gob.mx/publicaciones/nota/2025/notacefp1632025.pdf',
  },
  ptic2026: {
    short: 'Select, seguimiento del Presupuesto TIC del Gobierno federal 2026.',
    url: 'https://selectnet.selectestrategia.net/reporte/presupuesto-tic-del-gobierno-federal-se-mantiene-con-recorte-para-2026/',
  },
  conectividad2026: {
    short: 'DOF, Programa de Conectividad en Sitios Públicos y Áreas de Atención Prioritaria 2026.',
    url: 'https://sidof.segob.gob.mx/notas/docFuente/5785058',
  },
} as const;

export const INTERNET_TREND = [
  { year: '2015', value: 39.1 },
  { year: '2020', value: 59.9 },
  { year: '2023', value: 71.7 },
  { year: '2024', value: 73.6 },
  { year: '2025', value: 78.3 },
];

/** Indicadores comparables de la ENDUTIH 2025. */
export const DIGITAL_ACCESS_2025 = [
  { label: 'Personas usuarias de internet', national: 86.1, chiapas: 71.2 },
  { label: 'Hogares con internet', national: 78.3, chiapas: 53.9 },
  { label: 'Personas usuarias de celular', national: 84.6, chiapas: 70.8 },
  { label: 'Hogares con dispositivos inteligentes', national: 30.9, chiapas: 10.6 },
];

export const DIGITAL_ACCESS_2024 = [
  { label: 'Hogares con internet', national: 73.6, chiapas: 50.7 },
  { label: 'Dispositivos inteligentes', national: 26.0, chiapas: 9.6 },
  { label: 'Uso de teléfono celular', national: 81.7, chiapas: 62.5 },
];

/**
 * Razones por las que 21.7 % de los hogares no disponía de internet en 2025.
 * ENDUTIH 2025, Comunicado 32/26.
 */
export const NO_INTERNET_REASONS = [
  { reason: 'Falta de recursos económicos', value: 12.1 },
  { reason: 'No le interesa o no lo necesita', value: 5.5 },
  { reason: 'No sabe usarlo', value: 1.9 },
  { reason: 'Otras razones', value: 2.2 },
];

/**
 * Brechas urbano-rural en tipos de uso de internet, 2025.
 * ENDUTIH 2025, Comunicado 32/26, gráfica 2.
 */
export const URBAN_RURAL_GAP = [
  { label: 'Pagos vía internet', urban: 39.5, rural: 17.8 },
  { label: 'Compras en línea', urban: 41.1, rural: 20.2 },
  { label: 'Operaciones bancarias', urban: 36.7, rural: 16.0 },
  { label: 'Interactuar con el gobierno', urban: 38.2, rural: 24.7 },
];

/** Último ciclo con resultados completos; no implica causalidad con la conectividad. */
export const SECONDARY_EDUCATION_2024 = [
  { label: 'Eficiencia terminal en secundaria', national: 90.5, chiapas: 85.4 },
  { label: 'Abandono escolar en secundaria', national: 3.7, chiapas: 5.4 },
];

/**
 * Hogares con internet por entidad federativa, 2025.
 * Se incluyen las tres entidades con mayor y las tres con menor acceso,
 * más el promedio nacional como línea de referencia.
 * ENDUTIH 2025, Comunicado 32/26.
 */
export const STATE_RANKING_2025 = [
  { name: 'Ciudad de México', value: 90.5, kind: 'alto' as const },
  { name: 'Nuevo León', value: 89.9, kind: 'alto' as const },
  { name: 'Baja California', value: 89.1, kind: 'alto' as const },
  { name: 'Nacional', value: 78.3, kind: 'nacional' as const },
  { name: 'Veracruz', value: 68.3, kind: 'bajo' as const },
  { name: 'Oaxaca', value: 64.0, kind: 'bajo' as const },
  { name: 'Chiapas', value: 53.9, kind: 'chiapas' as const },
];

/* ------------------------------------------------------------------ */
/*  Presupuesto de Egresos de la Federación 2026                       */
/* ------------------------------------------------------------------ */

/** Cifras en millones de pesos corrientes. */
export const BUDGET_2026 = {
  totalMdp: 10_193_683.7,
  educacionRamo11Mdp: 523_858.2,
  ticFederalMdp: 33_395,
  totalLabel: '10.19 billones de pesos',
  educacionLabel: '523 858.2 mdp',
  ticLabel: '33 395 mdp',
  educacionPct: 5.1,
  ticPct: 0.33,
  ticVariacion: -1.9,
};

/** Participación del Ramo 11 «Educación Pública» dentro del gasto neto total. */
export const BUDGET_EDUCATION_SHARE = [
  { name: 'Educación Pública (Ramo 11)', value: 523_858.2 },
  { name: 'Resto del gasto federal', value: 10_193_683.7 - 523_858.2 },
];

/** Participación del Presupuesto TIC federal dentro del gasto neto total. */
export const BUDGET_TIC_SHARE = [
  { name: 'Presupuesto TIC federal', value: 33_395 },
  { name: 'Resto del gasto federal', value: 10_193_683.7 - 33_395 },
];

/**
 * Autoridades señaladas como responsables de la omisión, con su
 * fundamento normativo. La responsabilidad es institucional y escalonada.
 */
export const RESPONSIBLE_AUTHORITIES = [
  {
    level: 'Federal',
    entity: 'Secretaría de Educación Pública (SEP)',
    duty: 'Rectoría del sistema educativo nacional, planes y programas de estudio, y formación continua del personal docente.',
    basis: 'LGE, artículos 113 y 114',
  },
  {
    level: 'Federal',
    entity: 'Agencia de Transformación Digital y Telecomunicaciones',
    duty: 'Política de conectividad y acceso gratuito a internet en escuelas y sitios públicos.',
    basis: 'LMTR, artículo 202',
  },
  {
    level: 'Estatal',
    entity: 'Secretaría de Educación del Estado de Chiapas',
    duty: 'Operación de los servicios de educación básica y ejecución de la política de inclusión digital en la entidad.',
    basis: 'LGE, artículo 114',
  },
  {
    level: 'Escolar',
    entity: 'Dirección y personal administrativo del plantel',
    duty: 'Gestión escolar, resguardo del equipamiento y organización de las condiciones de uso de las TIC.',
    basis: 'LGE, artículo 106',
  },
  {
    level: 'Escolar',
    entity: 'Personal docente',
    duty: 'Aplicación pedagógica de las TIC. Su corresponsabilidad presupone que el Estado garantice previamente la formación y los medios.',
    basis: 'LGE, artículos 90 y 91',
  },
];
