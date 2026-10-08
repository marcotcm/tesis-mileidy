/**
 * @file MaintenancePlan.jsx
 * @description Muestra el plan anual de mantenimiento preventivo tabulado, con alertas por fechas.
 */
import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { machinesData } from '../../data/machinesData';
import styles from './MaintenancePlan.module.css';

const MaintenancePlan = () => {
  // Estado para controlar la máquina seleccionada (por defecto la primera: índice 0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Obtenemos la máquina en base al índice seleccionado
  const machine = machinesData[selectedIndex];

  const getStatusClasses = (days) => {
    if (days <= 3) return { circ: styles.urg_red_circ, text: styles.urg_red_text, badge: styles.urg_red_badge };
    if (days <= 7) return { circ: styles.urg_amb_circ, text: styles.urg_amb_text, badge: styles.urg_amb_badge };
    return { circ: styles.urg_grn_circ, text: styles.urg_grn_text, badge: styles.urg_grn_badge };
  };

  const getDaysText = (days) => {
    if (days === 0) return "Hoy";
    if (days === 1) return "Falta 1 día";
    return `Faltan ${days} días`;
  };

  const getBadgeText = (days) => {
    if (days <= 3) return "¡Urgente!";
    if (days <= 7) return "Próximo";
    return "A Tiempo";
  };

  return (
    <div className={styles.mtto_container}>
      
      {/* Combobox para seleccionar la máquina */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label htmlFor="machineSelect" style={{ fontWeight: 'bold', color: '#333' }}>
          Seleccionar Máquina:
        </label>
        <select 
          id="machineSelect"
          value={selectedIndex} 
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontSize: '14px',
            cursor: 'pointer',
            minWidth: '250px'
          }}
        >
          {machinesData.map((m, index) => (
            <option key={m.code || index} value={index}>
              {m.name} ({m.code})
            </option>
          ))}
        </select>
      </div>

      <div className={styles.mtto_card}>
        
        {/* Cabecera Formal del Documento */}
        <div className={styles.mtto_docHeader}>
            <div className={styles.mtto_docTitle}>
                PROGRAMA DE MANTENIMIENTO PREVENTIVO ANUAL
            </div>
            
            <div className={styles.mtto_docRow}>
                <div className={`${styles.mtto_docCol} ${styles.mtto_docColMain}`}>
                    <span className={styles.mtto_docLabel}>Empresa:</span>
                    <p className={styles.mtto_docValue}>MANTENIMIENTO - SOLQUIVEN C.A.</p>
                </div>
                <div className={`${styles.mtto_docCol} ${styles.mtto_docColSide}`}>
                    <span className={styles.mtto_docLabel}>Fecha de Emisión:</span>
                    <p className={styles.mtto_docValueDark}>03-08-2026</p>
                </div>
            </div>

            <div className={`${styles.mtto_docRow} ${styles.mtto_docBgGray}`}>
                <div className={`${styles.mtto_docCol} ${styles.mtto_docColMain} ${styles.mtto_docBgGray}`}>
                    <span className={styles.mtto_docLabel}>Nombre del Equipo:</span>
                    <p className={styles.mtto_docValueDark} style={{textTransform: 'capitalize'}}>
                      {machine.name.toLowerCase()}
                    </p>
                </div>
                <div className={`${styles.mtto_docCol} ${styles.mtto_docColSide} ${styles.mtto_docBgGray}`}>
                    <span className={styles.mtto_docLabel}>Código:</span>
                    <p className={styles.mtto_docValueDark}>{machine.code}</p>
                </div>
            </div>
        </div>

        {/* Tabla Formal de Tareas */}
        <div className={styles.mtto_tableWrapper}>
           <div className={styles.mtto_tableBorder}>
             <table className={styles.mtto_table}>
               <thead>
                 <tr>
                   <th className={styles.mtto_th} style={{width:'20%'}}>Encargado de Mtto.</th>
                   <th className={styles.mtto_th} style={{width:'45%'}}>Actividades</th>
                   <th className={`${styles.mtto_th} ${styles.mtto_thCenter}`} style={{width:'15%'}}>Frecuencia</th>
                   <th className={`${styles.mtto_th} ${styles.mtto_thCenter} ${styles.mtto_thAccent}`} style={{width:'20%'}}>Estado (Días Restantes)</th>
                 </tr>
               </thead>
               <tbody>
                 {machine.maintenancePlan.map((task) => {
                   const status = getStatusClasses(task.daysRemaining);
                   
                   return (
                     <tr key={task.id} className={styles.mtto_tr}>
                       <td className={styles.mtto_td} style={{fontWeight:'500'}}>{task.personnel}</td>
                       <td className={styles.mtto_td}>{task.task}</td>
                       <td className={`${styles.mtto_td} ${styles.mtto_tdBoldCenter}`}>{task.frequency}</td>
                       <td className={`${styles.mtto_td} ${styles.mtto_tdCenter}`}>
                          
                          <div className={styles.mtto_daysBox}>
                              <div className={styles.mtto_daysRow}>
                                  <div className={`${styles.mtto_iconCirc} ${status.circ}`}>
                                      <Clock size={12} />
                                  </div>
                                  <span className={`${styles.mtto_daysText} ${status.text}`}>
                                      {getDaysText(task.daysRemaining)}
                                  </span>
                              </div>
                              <span className={`${styles.mtto_badge} ${status.badge}`}>
                                  {getBadgeText(task.daysRemaining)}
                              </span>
                          </div>

                       </td>
                     </tr>
                   )
                 })}
               </tbody>
             </table>
           </div>
        </div>

      </div>
    </div>
  );
};

export default MaintenancePlan;
