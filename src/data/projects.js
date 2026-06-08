export const projects = [
  {
    slug: 'dashboard-ventas',
    name: 'Dashboard de Ventas',
    category: 'Business Intelligence',
    description:
      'Dashboard interactivo para analizar tendencias de ventas de videojuegos por año, región, género y plataforma.',
    technologies: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    imageType: 'sales',
    businessProblem: [
      'Tendencias de crecimiento o disminución de ventas.',
      'Géneros más populares.',
      'Plataformas con mejor rendimiento.',
      'Mercados más rentables.',
      'Oportunidades de negocio para aumentar ingresos.'
    ],
    dataUsed: {
      records: '8.82 mil millones de ventas',
      variables: 'Nombre, Plataforma, Año, Genero, Editorial, Region y Ventas',
      source: 'Dataset de ventas históricas de videojuegos utilizado para análisis de mercado y tendencias de la industria.'
    },
    cleaning: [
      'Verificación y corrección de tipos de datos.',
      'Unificación de columnas regionales mediante Power Query.',
      'Estandarización de nombres de plataformas y géneros.',
      'Validación de registros incompletos o inconsistentes.'
    ],
    transformation: [
      'Preparación de tablas en Power Query.',
      'Creación de medidas DAX para ventas totales.',
      'Cálculo de rankings por género, plataforma y región.',
      'Modelado de datos para análisis temporal.'
    ],
    kpis: [
      { label: 'Ventas Globales', value: '8.82 mil millones' },
      { label: 'Región Líder', value: 'Norteamérica' },
      { label: 'Género Más Vendido', value: 'Action' }
    ],
    insights: [
      'Norteamérica concentra aproximadamente la mitad de las ventas globales.',
      'El género Action es el de mayor volumen de ventas.',
      'Las ventas alcanzaron su punto máximo entre 2008 y 2010.',
      'PS2 es una de las plataformas con mejor desempeño histórico.'
    ],
    recommendations: [
      'Priorizar lanzamientos en Norteamérica por su alta participación en ventas.',
      'Invertir en géneros con demanda histórica elevada como Action y Sports.',
      'Analizar las causas de la caída de ventas después de 2010.',
      'Identificar oportunidades en plataformas emergentes comparando ciclos de vida de consolas.'
    ]
  },
  {
    slug: 'dashboard-inventario',
    name: 'Dashboard de Inventario',
    category: 'Operacion y Control',
    description:
      'Control de entradas, salidas, stock disponible y alertas para mejorar decisiones de inventario.',
    technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
    imageType: 'inventory',
    businessProblem: [
      'Controlar entradas de productos',
      'Medir salidas por periodo',
      'Monitorear stock disponible'
    ],
    dataUsed: {
      records: '8,920 movimientos',
      variables: 'Producto, categoria, almacen, entradas, salidas, stock, fecha',
      source: 'Dataset de inventario simulado con estructura operacional'
    },
    cleaning: [
      'Validacion de movimientos negativos',
      'Normalizacion de codigos de producto',
      'Correccion de registros sin fecha o almacen'
    ],
    transformation: [
      'Calculo de stock disponible por producto',
      'Agrupacion de movimientos por almacen y categoria',
      'Segmentacion de productos con riesgo de quiebre'
    ],
    kpis: [
      { label: 'Total Entradas', value: '18.2K', trend: '+9%' },
      { label: 'Total Salidas', value: '15.7K', trend: '+13%' },
      { label: 'Stock Disponible', value: '2.5K', trend: 'Stock Bajo' }
    ],
    alerts: [{ label: 'Stock Bajo', value: '78 unidades', status: 'critical' }],
    insights: [
      'Algunos productos de alta rotacion caen por debajo de 100 unidades antes del cierre de mes.',
      'Los almacenes con mayor salida requieren reposicion mas frecuente.',
      'La demanda por categoria muestra ciclos claros para anticipar compras.'
    ],
    recommendations: [
      'Crear alertas automaticas cuando el stock sea menor de 100 unidades.',
      'Definir niveles minimos por producto segun velocidad de salida.',
      'Programar compras preventivas para categorias de alta rotacion.'
    ]
  }
];
