/**
 * @file machinesData.js
 * @description Base de datos centralizada que almacena la información técnica, 
 * fallas funcionales y planes de mantenimiento de los equipos de la planta.
 */

export const machinesData = [
  {
    id: 'M-LLEN',
    code: 'LLEN-INLINE',
    name: 'Maquina Llenadora Automática en Línea',
    brand: 'INLINE FILLING SYSTEMS',
    model: 'S/I',
    serials: '22300 / 22285',
    distributor: 'Inline Filling Systems (Venice, FL, USA)',
    phone: 'N/D',
    cost: '28.000 $ (aprox.)',
    characteristics: '20-100 PSI, émbolo 32 mm, stroke 160 mm, presión máx. 10 bar, Peso 300 kg (aprox.)',
    area: 'Línea de Producción Principal',
    status: 'Operativo',
    criticality: 'Alta',
    description: 'Dosificado continuo de líquidos en envases indexados bajo los cabezales de llenado.',
    
    functionalFailures: [
      {
        id: '1A',
        functionDesc: 'Dosificar y llenar los envases con el producto fabricado, garantizando el volumen o peso exacto y cumpliendo con la velocidad de la línea de producción.',
        description: 'No dispensa ningún producto (Pérdida total de la función por falla en la bomba de impulsión, boquillas obstruidas o falla eléctrica).',
        mode: [
          'Obstrucción total de la boquilla del cabezal de llenado.',
          'Falla de la bomba de diafragma neumático (sin succión ni impulsión de producto).'
        ],
        cause: [
          'Acumulación de residuos secos o cristalizados de producto en el interior de la boquilla por limpieza CIP deficiente.',
          'Rotura de la membrana del diafragma por fatiga del material y presión de aire de accionamiento excesiva.'
        ],
        effect: [
          'Detención de la línea de llenado; envases avanzan vacíos a la siguiente estación.',
          'Paro total del sistema de llenado y pérdida de producción.'
        ]
      },
      {
        id: '1B',
        functionDesc: 'Dosificar y llenar los envases con el producto fabricado, garantizando el volumen o peso exacto y cumpliendo con la velocidad de la línea de producción.',
        description: 'Llena los envases con un volumen o peso inexacto (por exceso o por defecto) debido a descalibración de los sensores o desgaste en los pistones/válvulas.',
        mode: [
          'Sub-llenado o sobre-llenado de los envases.',
          'Variación de volumen entre los distintos cabezales en un mismo ciclo.'
        ],
        cause: [
          'Descalibración del sistema de control de llenado por desgaste de las válvulas dosificadoras.',
          'Desajuste en la sincronización de los pistones/cabezales de llenado múltiple.'
        ],
        effect: [
          'Producto no conforme; reproceso o pérdida de producto por derrame en cabezal.',
          'Inconsistencia de contenido neto entre envases; incumplimiento normativo de contenido declarado.'
        ]
      },
      {
        id: '1C',
        functionDesc: 'Dosificar y llenar los envases con el producto fabricado, garantizando el volumen o peso exacto y cumpliendo con la velocidad de la línea de producción.',
        description: 'Realiza el ciclo de llenado a una velocidad inferior a la requerida, generando cuellos de botella en la línea operativa.',
        mode: [
          'Falla del mecanismo de indexado (no posiciona el envase a tiempo bajo el cabezal).'
        ],
        cause: [
          'Desgaste de la leva/servomotor del sistema de indexado por uso continuo.'
        ],
        effect: [
          'Reducción del ritmo de llenado; cuello de botella en la línea de producción.'
        ]
      },
      {
        id: '2A',
        functionDesc: 'Mantener la contención del producto durante la dosificación evitando derrames al medio ambiente o desperdicios.',
        description: 'Fugas y goteos constantes de producto por las boquillas, mangueras o sellos deteriorados durante la operación.',
        mode: [
          'Desgaste o deterioro de los sellos y empaques del cabezal de llenado.'
        ],
        cause: [
          'Envejecimiento de los materiales elastoméricos de los sellos por contacto prolongado con el producto.'
        ],
        effect: [
          'Goteo continuo de producto durante la operación; desperdicio de materia prima y suciedad en el área.'
        ]
      },
      {
        id: '3A',
        functionDesc: 'Manipular los envases manteniendo su integridad física y limpieza durante el ciclo de llenado.',
        description: 'Atasca, rompe, abolla o mancha exteriormente el envase al momento de posicionarlo o durante la inyección del producto.',
        mode: [
          'Atasco de envases en el disco o mesa giratoria de alimentación.'
        ],
        cause: [
          'Desalineación de las guías de envase por golpes, vibración o desajuste mecánico.'
        ],
        effect: [
          'Paro de línea; acumulación de envases con riesgo de caída o rotura.'
        ]
      }
    ],

    maintenancePlan: [
      {
        id: 'mt1',
        personnel: '1 operador',
        task: 'Ejecutar limpieza profunda (CIP) y verificar ausencia de cristalización de producto en boquillas',
        frequency: 'Semanal',
        daysRemaining: 2
      },
      {
        id: 'mt2',
        personnel: '1 técnico, 1 analista de calidad',
        task: 'Calibrar válvulas dosificadoras y verificar precisión del volumen de llenado',
        frequency: 'Mensual',
        daysRemaining: 15
      },
      {
        id: 'mt3',
        personnel: '2 técnicos mecánicos',
        task: 'Sincronización y ajuste mecánico de la carrera de pistones dosificadores.',
        frequency: 'Trimestral',
        daysRemaining: 45
      },
      {
        id: 'mt4',
        personnel: '2 técnicos mecánicos',
        task: 'Reemplazar preventivamente sellos, O-rings y empaquetaduras elastoméricas en los cabezales',
        frequency: 'Semestral',
        daysRemaining: 80
      },
      {
        id: 'mt5',
        personnel: '1 técnico mecánico',
        task: 'Inspeccionar reguladores de presión de aire y verificar integridad de la membrana de la bomba',
        frequency: 'Semanal',
        daysRemaining: 5
      },
      {
        id: 'mt6',
        personnel: '2 técnicos mecánicos',
        task: 'Reemplazar membrana de la bomba de diafragma neumático por fatiga de materia',
        frequency: 'Anual',
        daysRemaining: 210
      },
      {
        id: 'mt7',
        personnel: '1 técnico mecánico',
        task: 'Limpiar, revisar desgaste y lubricar la leva/servomotor del mecanismo de indexado',
        frequency: 'Mensual',
        daysRemaining: 12
      },
      {
        id: 'mt8',
        personnel: '1 técnico mecánico',
        task: 'Alinear, nivelar y ajustar las guías de envases en el disco/mesa giratoria de alimentación',
        frequency: 'Mensual',
        daysRemaining: 8
      }
    ]
  }
];