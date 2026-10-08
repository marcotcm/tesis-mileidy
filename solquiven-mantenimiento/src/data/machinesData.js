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
  },
  {
    id: 'M-ETIQ',
    code: 'ETIQ-ME320',
    name: 'Etiquetadora Automática de Envases',
    brand: 'ESYBO',
    model: 'ME-320',
    serials: 'JM351059',
    distributor: 'ESYBO (Esybo Venezuela)',
    phone: 'N/D',
    cost: '9.500 $ (aprox.)',
    characteristics: '220 VAC, 60 Hz, 1,5 KW, Peso 220 kg (aprox.), 1,60 x 0,80 x 1,30 mts (aprox.)',
    area: 'Línea de Producción Principal',
    status: 'Operativo',
    criticality: 'Alta',
    description: 'Aplicación automática y sincronizada de etiquetas sobre los envases.',
    
    functionalFailures: [
      {
        id: '1A',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'No aplica ninguna etiqueta (Pérdida total de la función - Máquina inoperativa).',
        mode: [
          'Rotura o desprendimiento de la cinta transportadora.',
          'Falla electrónica en el sensor óptico de presencia de envase.'
        ],
        cause: [
          'Desgaste y fatiga del material de la cinta transportadora por uso continuo sin mantenimiento preventivo programado.',
          'Degradación o suciedad en la lente del sensor óptico, agravada por las fluctuaciones de tensión eléctrica reportadas en la planta.'
        ],
        effect: [
          'El personal recurre al etiquetado manual para compensar la falla; aumenta el tiempo de proceso y el riesgo de error humano, sin que la causa raíz sea corregida.',
          'La máquina no detecta el envase de forma automática; el personal continúa aplicando las etiquetas manualmente sin que la falla electrónica sea diagnosticada.'
        ]
      },
      {
        id: '1B',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'Aplica etiquetas de forma deficiente (desalineadas, con arrugas, parcialmente adheridas o incompletas).',
        mode: [
          'Desalineación geométrica de las guías mecánicas de paso o de las barras de soporte del cabezal.',
          'Desincronización electrónica entre la velocidad de la banda transportadora y la velocidad de dispensado del cabezal.',
          'Presencia de burbujas de aire o arrugas.',
          'Defecto en el lote del adhesivo de la etiqueta.',
          'Error de calibración en el sensor de brecha de la etiqueta.'
        ],
        cause: [
          'Desajuste mecánico de las guías por vibración y falta de calibración periódica.',
          'Descalibración electrónica entre la banda transportadora y el cabezal dispensador por falta de mantenimiento del sistema de control.',
          'Presencia de humedad o aire atrapado en el rollo de etiquetas durante su aplicación.',
          'Adhesivo de baja calidad o vencido en el lote de etiquetas suministrado por el proveedor.',
          'Descalibración del sensor de brecha por falta de ajuste periódico o suciedad acumulada.'
        ],
        effect: [
          'Etiquetas mal posicionadas o arrugadas; producto no conforme para despacho.',
          'Etiquetas desalineadas o mal aplicadas por descoordinación entre banda y cabezal.',
          'Defecto estético en la etiqueta; reproceso o reetiquetado manual.',
          'Etiquetas se despegan parcial o totalmente después de aplicadas.',
          'Aplicación de etiquetas fuera de posición, dobles o faltantes.'
        ]
      },
      {
        id: '1C',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'Aplica etiquetas a una velocidad inferior a la requerida por la línea de producción.',
        mode: [
          'Configuración errónea o alteración manual del potenciómetro de velocidad analógico por parte del personal de operación.',
          'Pérdida de tensión en las correas.',
          'Fricción excesiva en el eje del rodillo de arrastre principal.'
        ],
        cause: [
          'Modificación manual del potenciómetro de velocidad por parte del operador sin procedimiento estandarizado.',
          'Pérdida de tensión de las correas de arrastre por desgaste y falta de ajuste periódico.',
          'Falta de lubricación programada en el eje del rodillo de arrastre principal.'
        ],
        effect: [
          'Cuello de botella en la línea por reducción de la velocidad de etiquetado.',
          'Reducción de la velocidad de arrastre; retrasa el ritmo de producción.',
          'Desgaste acelerado del sistema de arrastre; reducción progresiva de velocidad.'
        ]
      },
      {
        id: '2A',
        functionDesc: 'Mantener la integridad física del producto o envase durante el proceso de etiquetado.',
        description: 'Daña, deforma o rompe el envase o producto al momento de aplicar la etiqueta.',
        mode: [
          'Presión excesiva ejercida por el rodillo aplicador o las guías de estabilización superior.',
          'Atascamiento de envases en la banda transportadora.',
          'Impacto del envase contra el cabezal.'
        ],
        cause: [
          'Ajuste incorrecto de la presión del rodillo aplicador o las guías de estabilización superior.',
          'Desalineación de la banda transportadora que provoca acumulación de envases.',
          'Mala sincronización entre el avance del envase y la posición del cabezal aplicador.'
        ],
        effect: [
          'Envases deformados o rotos al momento de aplicar la etiqueta.',
          'Envases dañados o volcados por acumulación en la banda transportadora.',
          'Envases golpeados o dañados al posicionarse bajo el cabezal.'
        ]
      },
      {
        id: '3A',
        functionDesc: 'Operar de manera segura sin representar un riesgo eléctrico o mecánico para el operador.',
        description: 'Presenta fallas que exponen al operador a riesgos de accidentes (ej. atrapamiento o choque eléctrico).',
        mode: [
          'Ausencia, retiro o fijación deficiente de las guardas.',
          'Pérdida de aislamiento eléctrico.',
          'Daño físico en el cable de puesta a tierra.'
        ],
        cause: [
          'Retiro de las guardas de seguridad para tareas de limpieza o ajuste, sin reinstalación posterior.',
          'Deterioro del aislamiento eléctrico de los componentes internos por antigüedad del equipo y falta de mantenimiento.',
          'Corrosión o desconexión del cable de puesta a tierra por falta de inspección eléctrica periódica.'
        ],
        effect: [
          'Riesgo de atrapamiento de manos u otras partes del cuerpo del operador.',
          'Riesgo de choque eléctrico para el operador al manipular el equipo.',
          'Pérdida de protección eléctrica; riesgo de choque eléctrico ante fuga de corriente.'
        ]
      }
    ],

    maintenancePlan: [
      {
        id: 'mt1',
        personnel: '1 técnico mecánico',
        task: 'Inspeccionar el estado físico y ajustar la tensión de la cinta transportadora y las correas de arrastre para prevenir roturas por fatiga o desgaste.',
        frequency: 'Quincenal',
        daysRemaining: 15
      },
      {
        id: 'mt2',
        personnel: '1 técnico mecánico',
        task: 'Realizar ajuste mecánico y alineación geométrica de las guías de paso, barras de soporte y banda transportadora para evitar atascamientos por vibración.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt3',
        personnel: '1 técnico mecánico',
        task: 'Ejecutar el programa de lubricación en el eje del rodillo de arrastre principal para evitar fricción excesiva.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt4',
        personnel: '1 técnico mecánico',
        task: 'Calibrar la presión ejercida por el rodillo aplicador y las guías de estabilización superior para evitar la deformación de envases.',
        frequency: 'Quincenal',
        daysRemaining: 15
      },
      {
        id: 'mt5',
        personnel: '1 técnico instrumentista',
        task: 'Limpiar las lentes y calibrar el sensor óptico de presencia de envase y el sensor de brecha de etiqueta para evitar fallas por acumulación de suciedad.',
        frequency: 'Semanal',
        daysRemaining: 7
      },
      {
        id: 'mt6',
        personnel: '1 técnico electrónico',
        task: 'Sincronizar electrónicamente la velocidad de la banda transportadora con la del cabezal dispensador mediante el sistema de control.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt7',
        personnel: '1 supervisor de línea',
        task: 'Inspeccionar y estandarizar la configuración del potenciómetro de velocidad para evitar alteraciones manuales fuera de norma.',
        frequency: 'Semanal',
        daysRemaining: 7
      },
      {
        id: 'mt8',
        personnel: '1 técnico eléctrico',
        task: 'Evaluar la integridad del aislamiento eléctrico en componentes internos y verificar ausencia de corrosión en el cable de puesta a tierra.',
        frequency: 'Semestral',
        daysRemaining: 180
      },
      {
        id: 'mt9',
        personnel: '1 operador',
        task: 'Verificar las condiciones de almacenamiento (humedad) de los rollos de etiquetas y auditar la fecha de vencimiento del lote de adhesivo antes del montaje.',
        frequency: 'Por turno',
        daysRemaining: 0
      },
      {
        id: 'mt10',
        personnel: '1 operador',
        task: 'Inspeccionar la correcta fijación y presencia de todas las guardas de seguridad del equipo tras rutinas de limpieza o ajuste.',
        frequency: 'Diario',
        daysRemaining: 1
      }
    ]
  },
  {
    id: 'M-ETIQ',
    code: 'ETIQ-ME320',
    name: 'Etiquetadora Automática de Envases',
    brand: 'ESYBO',
    model: 'ME-320',
    serials: 'JM351059',
    distributor: 'ESYBO (Esybo Venezuela)',
    phone: 'N/D',
    cost: '9.500 $ (aprox.)',
    characteristics: '220 VAC, 60 Hz, 1,5 KW, Peso 220 kg (aprox.), 1,60 x 0,80 x 1,30 mts (aprox.)',
    area: 'Línea de Producción Principal',
    status: 'Operativo',
    criticality: 'Alta',
    description: 'Aplicación automática y sincronizada de etiquetas sobre los envases.',
    
    functionalFailures: [
      {
        id: '1A',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'No aplica ninguna etiqueta (Pérdida total de la función - Máquina inoperativa).',
        mode: [
          'Rotura o desprendimiento de la cinta transportadora.',
          'Falla electrónica en el sensor óptico de presencia de envase.'
        ],
        cause: [
          'Desgaste y fatiga del material de la cinta transportadora por uso continuo sin mantenimiento preventivo programado.',
          'Degradación o suciedad en la lente del sensor óptico, agravada por las fluctuaciones de tensión eléctrica reportadas en la planta.'
        ],
        effect: [
          'El personal recurre al etiquetado manual para compensar la falla; aumenta el tiempo de proceso y el riesgo de error humano, sin que la causa raíz sea corregida.',
          'La máquina no detecta el envase de forma automática; el personal continúa aplicando las etiquetas manualmente sin que la falla electrónica sea diagnosticada.'
        ]
      },
      {
        id: '1B',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'Aplica etiquetas de forma deficiente (desalineadas, con arrugas, parcialmente adheridas o incompletas).',
        mode: [
          'Desalineación geométrica de las guías mecánicas de paso o de las barras de soporte del cabezal.',
          'Desincronización electrónica entre la velocidad de la banda transportadora y la velocidad de dispensado del cabezal.',
          'Presencia de burbujas de aire o arrugas.',
          'Defecto en el lote del adhesivo de la etiqueta.',
          'Error de calibración en el sensor de brecha de la etiqueta.'
        ],
        cause: [
          'Desajuste mecánico de las guías por vibración y falta de calibración periódica.',
          'Descalibración electrónica entre la banda transportadora y el cabezal dispensador por falta de mantenimiento del sistema de control.',
          'Presencia de humedad o aire atrapado en el rollo de etiquetas durante su aplicación.',
          'Adhesivo de baja calidad o vencido en el lote de etiquetas suministrado por el proveedor.',
          'Descalibración del sensor de brecha por falta de ajuste periódico o suciedad acumulada.'
        ],
        effect: [
          'Etiquetas mal posicionadas o arrugadas; producto no conforme para despacho.',
          'Etiquetas desalineadas o mal aplicadas por descoordinación entre banda y cabezal.',
          'Defecto estético en la etiqueta; reproceso o reetiquetado manual.',
          'Etiquetas se despegan parcial o totalmente después de aplicadas.',
          'Aplicación de etiquetas fuera de posición, dobles o faltantes.'
        ]
      },
      {
        id: '1C',
        functionDesc: 'Aplicar etiquetas de forma automática en productos, envases o embalajes para su identificación, cumpliendo con los parámetros operativos requeridos.',
        description: 'Aplica etiquetas a una velocidad inferior a la requerida por la línea de producción.',
        mode: [
          'Configuración errónea o alteración manual del potenciómetro de velocidad analógico por parte del personal de operación.',
          'Pérdida de tensión en las correas.',
          'Fricción excesiva en el eje del rodillo de arrastre principal.'
        ],
        cause: [
          'Modificación manual del potenciómetro de velocidad por parte del operador sin procedimiento estandarizado.',
          'Pérdida de tensión de las correas de arrastre por desgaste y falta de ajuste periódico.',
          'Falta de lubricación programada en el eje del rodillo de arrastre principal.'
        ],
        effect: [
          'Cuello de botella en la línea por reducción de la velocidad de etiquetado.',
          'Reducción de la velocidad de arrastre; retrasa el ritmo de producción.',
          'Desgaste acelerado del sistema de arrastre; reducción progresiva de velocidad.'
        ]
      },
      {
        id: '2A',
        functionDesc: 'Mantener la integridad física del producto o envase durante el proceso de etiquetado.',
        description: 'Daña, deforma o rompe el envase o producto al momento de aplicar la etiqueta.',
        mode: [
          'Presión excesiva ejercida por el rodillo aplicador o las guías de estabilización superior.',
          'Atascamiento de envases en la banda transportadora.',
          'Impacto del envase contra el cabezal.'
        ],
        cause: [
          'Ajuste incorrecto de la presión del rodillo aplicador o las guías de estabilización superior.',
          'Desalineación de la banda transportadora que provoca acumulación de envases.',
          'Mala sincronización entre el avance del envase y la posición del cabezal aplicador.'
        ],
        effect: [
          'Envases deformados o rotos al momento de aplicar la etiqueta.',
          'Envases dañados o volcados por acumulación en la banda transportadora.',
          'Envases golpeados o dañados al posicionarse bajo el cabezal.'
        ]
      },
      {
        id: '3A',
        functionDesc: 'Operar de manera segura sin representar un riesgo eléctrico o mecánico para el operador.',
        description: 'Presenta fallas que exponen al operador a riesgos de accidentes (ej. atrapamiento o choque eléctrico).',
        mode: [
          'Ausencia, retiro o fijación deficiente de las guardas.',
          'Pérdida de aislamiento eléctrico.',
          'Daño físico en el cable de puesta a tierra.'
        ],
        cause: [
          'Retiro de las guardas de seguridad para tareas de limpieza o ajuste, sin reinstalación posterior.',
          'Deterioro del aislamiento eléctrico de los componentes internos por antigüedad del equipo y falta de mantenimiento.',
          'Corrosión o desconexión del cable de puesta a tierra por falta de inspección eléctrica periódica.'
        ],
        effect: [
          'Riesgo de atrapamiento de manos u otras partes del cuerpo del operador.',
          'Riesgo de choque eléctrico para el operador al manipular el equipo.',
          'Pérdida de protección eléctrica; riesgo de choque eléctrico ante fuga de corriente.'
        ]
      }
    ],

    maintenancePlan: [
      {
        id: 'mt1',
        personnel: '1 técnico mecánico',
        task: 'Inspeccionar el estado físico y ajustar la tensión de la cinta transportadora y las correas de arrastre para prevenir roturas por fatiga o desgaste.',
        frequency: 'Quincenal',
        daysRemaining: 15
      },
      {
        id: 'mt2',
        personnel: '1 técnico mecánico',
        task: 'Realizar ajuste mecánico y alineación geométrica de las guías de paso, barras de soporte y banda transportadora para evitar atascamientos por vibración.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt3',
        personnel: '1 técnico mecánico',
        task: 'Ejecutar el programa de lubricación en el eje del rodillo de arrastre principal para evitar fricción excesiva.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt4',
        personnel: '1 técnico mecánico',
        task: 'Calibrar la presión ejercida por el rodillo aplicador y las guías de estabilización superior para evitar la deformación de envases.',
        frequency: 'Quincenal',
        daysRemaining: 15
      },
      {
        id: 'mt5',
        personnel: '1 técnico instrumentista',
        task: 'Limpiar las lentes y calibrar el sensor óptico de presencia de envase y el sensor de brecha de etiqueta para evitar fallas por acumulación de suciedad.',
        frequency: 'Semanal',
        daysRemaining: 7
      },
      {
        id: 'mt6',
        personnel: '1 técnico electrónico',
        task: 'Sincronizar electrónicamente la velocidad de la banda transportadora con la del cabezal dispensador mediante el sistema de control.',
        frequency: 'Mensual',
        daysRemaining: 30
      },
      {
        id: 'mt7',
        personnel: '1 supervisor de línea',
        task: 'Inspeccionar y estandarizar la configuración del potenciómetro de velocidad para evitar alteraciones manuales fuera de norma.',
        frequency: 'Semanal',
        daysRemaining: 7
      },
      {
        id: 'mt8',
        personnel: '1 técnico eléctrico',
        task: 'Evaluar la integridad del aislamiento eléctrico en componentes internos y verificar ausencia de corrosión en el cable de puesta a tierra.',
        frequency: 'Semestral',
        daysRemaining: 180
      },
      {
        id: 'mt9',
        personnel: '1 operador',
        task: 'Verificar las condiciones de almacenamiento (humedad) de los rollos de etiquetas y auditar la fecha de vencimiento del lote de adhesivo antes del montaje.',
        frequency: 'Por turno',
        daysRemaining: 0
      },
      {
        id: 'mt10',
        personnel: '1 operador',
        task: 'Inspeccionar la correcta fijación y presencia de todas las guardas de seguridad del equipo tras rutinas de limpieza o ajuste.',
        frequency: 'Diario',
        daysRemaining: 1
      }
    ]
  }
];
