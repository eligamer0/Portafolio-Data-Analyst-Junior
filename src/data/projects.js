export const projects = [
  {
    slug: 'dashboard-ventas',
    name: 'Dashboard de Ventas',
    category: 'Business Intelligence',
    description:
      'Analizar el comportamiento de las ventas de videojuegos para identificar:',
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
      source: 'Dataset comercial simulado para demostracion profesional'
    },
    cleaning: [
      'Verificar formatos de fecha.',
      'Fusionar columnas de region en una sola columna de region.',
      'Estandarizar nombres de plataformas y géneros.'
    ],
    transformation: [
      'Preparacion de tablas con Power Query.',
      'Transformación de Datos.',
      'Medidas DAX para ventas, ingresos, margen y ranking.'
    ],
    kpis: [
      { label: 'Ventas Totales', value: '12.4K', trend: '+18%' },
      { label: 'Ingresos', value: 'US$ 486K', trend: '+24%' },
      { label: 'Productos Vendidos', value: '31.8K', trend: '+11%' }
    ],
    insights: [
      'Las ciudades con mayor volumen no siempre generan el margen mas alto.',
      'Tres categorias concentran mas del 60% de los ingresos mensuales.',
      'Los vendedores top mantienen mejor tasa de conversion en productos premium.'
    ],
    recommendations: [
      'Priorizar campanas en ciudades con alto margen y crecimiento sostenido.',
      'Revisar descuentos en productos de alta venta pero baja rentabilidad.',
      'Replicar practicas de vendedores con mejor desempeno en equipos regionales.'
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
