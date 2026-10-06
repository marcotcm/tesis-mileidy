/**
 * @file MachineDetails.jsx
 * @description Muestra el detalle técnico y listado de fallas funcionales de una máquina en específico.
 */
import React, { useState } from 'react';
import { ChevronLeft, Wrench, AlertCircle, ChevronDown, Activity } from 'lucide-react';
import styles from './MachineDetails.module.css';

const MachineDetails = ({ machine, onBack }) => {
  const [openFailureId, setOpenFailureId] = useState(null);

  const toggleFailure = (id) => {
    setOpenFailureId(openFailureId === id ? null : id);
  };

  if (!machine) return null;

  return (
    <div className={styles.details_container}>
      <div className={styles.details_header}>
        <button onClick={onBack} className={styles.details_backBtn}>
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className={styles.details_title}>
             Ficha Técnica: <span className={styles.details_titleHighlight}>{machine.code}</span>
          </h2>
          <p className={styles.details_subtitle}>{machine.name}</p>
        </div>
      </div>

      <div className={styles.details_grid}>
        
        {/* Columna Izquierda: Datos Técnicos */}
        <div className={styles.details_infoCard}>
          <h3 className={styles.details_infoTitle}>
            <Wrench size={18} className={styles.details_infoIcon}/> Especificaciones Técnicas
          </h3>
          
          <div className={styles.details_infoBox}>
            <div className={styles.details_infoHighlight}>
               <p className={styles.details_label}>Empresa</p>
               <p className={styles.details_valueBold}>SOLQUIVEN C.A.</p>
            </div>

            <div className={styles.details_grid2}>
               <div>
                  <p className={styles.details_label}>Marca</p>
                  <p className={styles.details_value}>{machine.brand}</p>
               </div>
               <div>
                  <p className={styles.details_label}>Modelo</p>
                  <p className={styles.details_value}>{machine.model}</p>
               </div>
            </div>

            <div className={styles.details_grid2}>
               <div>
                  <p className={styles.details_label}>Serial</p>
                  <p className={styles.details_value}>{machine.serials}</p>
               </div>
               <div>
                  <p className={styles.details_label}>Costo Aprox.</p>
                  <p className={styles.details_value}>{machine.cost}</p>
               </div>
            </div>

            <div>
              <p className={styles.details_label}>Distribuidor</p>
              <p className={styles.details_value} style={{color:'#475569'}}>{machine.distributor}</p>
            </div>

            <div style={{borderTop:'1px solid #f1f5f9', paddingTop:'0.75rem'}}>
              <p className={styles.details_label}>Características</p>
              <p className={styles.details_featureBox}>{machine.characteristics}</p>
            </div>

            <div>
              <p className={styles.details_label}>Funcionamiento Principal</p>
              <p className={styles.details_descBox}>"{machine.description}"</p>
            </div>
          </div>
        </div>
        
        {/* Columna Derecha: Fallas Funcionales */}
        <div className={styles.details_failuresCard}>
          <div className={styles.details_failuresHeader}>
            <h3 className={styles.details_failuresTitle}>
              <AlertCircle className={styles.details_infoIcon} size={20} />
              Fallas Funcionales
            </h3>
            <p className={styles.details_failuresSub}>Seleccione una falla para ver su Modo, Causa y Efecto.</p>
          </div>
          
          <div className={styles.details_failuresList}>
            {machine.functionalFailures.map((failure) => {
              const isOpen = openFailureId === failure.id;
              
              return (
                <div key={failure.id} className={styles.acc_item}>
                  
                  {/* Botón del Acordeón */}
                  <button 
                    onClick={() => toggleFailure(failure.id)}
                    className={`${styles.acc_btn} ${isOpen ? styles.acc_btnOpen : styles.acc_btnClosed}`}
                  >
                    <div className={styles.acc_iconWrapper}>
                       <div className={`${styles.acc_iconCircle} ${isOpen ? styles.acc_iconCircleOpen : styles.acc_iconCircleClosed}`}>
                          <Activity size={16} />
                       </div>
                    </div>
                    
                    <div className={styles.acc_contentPreview}>
                       <div className={styles.acc_idTag}>Falla {failure.id}</div>
                       <div className={`${styles.acc_descPreview} ${isOpen ? styles.acc_descPreviewOpen : styles.acc_descPreviewClosed}`}>
                          {failure.description}
                       </div>
                    </div>

                    <div className={`${styles.acc_arrow} ${isOpen ? styles.acc_arrowOpen : ''}`}>
                       <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Cuerpo Desplegado */}
                  <div className={`${styles.acc_body} ${isOpen ? styles.acc_bodyOpen : styles.acc_bodyClosed}`}>
                    <div className={styles.acc_bodyInner}>
                       
                       <div className={styles.acc_funcBox}>
                          <p className={styles.details_label}>Función del Equipo Afectada</p>
                          <p className={styles.acc_funcText}>"{failure.functionDesc}"</p>
                       </div>

                       <div className={styles.acc_detailGrid}>
                         {/* MODO */}
                         <div className={styles.acc_detailSection}>
                           <span className={`${styles.acc_detailLabel} ${styles.acc_labelMode}`}>Modo de Falla</span>
                           <ul className={styles.acc_ul}>
                             {failure.mode.map((item, i) => <li key={i} className={styles.acc_li}>{item}</li>)}
                           </ul>
                         </div>

                         {/* CAUSA */}
                         <div className={styles.acc_detailSection}>
                           <span className={`${styles.acc_detailLabel} ${styles.acc_labelCause}`}>Causa de la Falla</span>
                           <ul className={styles.acc_ul}>
                             {failure.cause.map((item, i) => <li key={i} className={styles.acc_li}>{item}</li>)}
                           </ul>
                         </div>

                         {/* EFECTO */}
                         <div className={styles.acc_detailSection}>
                           <span className={`${styles.acc_detailLabel} ${styles.acc_labelEffect}`}>Efecto de la Falla</span>
                           <ul className={styles.acc_ul}>
                             {failure.effect.map((item, i) => <li key={i} className={styles.acc_li}>{item}</li>)}
                           </ul>
                         </div>
                       </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MachineDetails;