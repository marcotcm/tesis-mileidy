/**
 * @file MachineList.jsx
 * @description Renderiza el listado principal de máquinas y proporciona herramientas de búsqueda/filtro.
 */
import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowUp, Database } from 'lucide-react';
import { machinesData } from '../../data/machinesData';
import styles from './MachineList.module.css';

const MachineList = ({ onSelectMachine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMachines = machinesData.filter(m => 
    m.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para determinar la clase CSS según el estado
  const getStatusClass = (status) => {
    // Normalizamos el texto (minúsculas y sin acentos) para evitar errores de escritura
    const normalizedStatus = status.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (normalizedStatus.includes('inoperativo')) return styles.list_statusGray;
    if (normalizedStatus.includes('danado') || normalizedStatus.includes('malo')) return styles.list_statusRed;
    if (normalizedStatus.includes('operativo')) return styles.list_statusOk;
    
    return styles.list_statusGray; // Por defecto
  };

  return (
    <div className={styles.list_container}>
      <div className={styles.list_header}>
        <h2 className={styles.list_title}>
          <Database className={styles.list_titleIcon} size={28} />
          Inventario de Máquinas (SOLQUIVEN)
        </h2>
      </div>

      <div className={styles.list_card}>
        <div className={styles.list_toolbar}>
          <div className={styles.list_searchWrap}>
            <Search className={styles.list_searchIcon} size={18} />
            <input 
              type="text" 
              placeholder="Buscar máquina por Código, Nombre..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.list_searchInput}
            />
          </div>
          <div className={styles.list_actions}>
            <button className={styles.list_btnPrimary}>
              Nueva Máquina <Plus size={16} />
            </button>
            <button className={styles.list_btnSecondary}>
              Filtrar <Filter size={16} />
            </button>
          </div>
        </div>

        <div className={styles.list_tableWrap}>
          <table className={styles.list_table}>
            <thead>
              <tr>
                <th className={styles.list_th}>Código <ArrowUp size={12} style={{display:'inline', marginLeft:'4px', color:'#94a3b8'}} /></th>
                <th className={styles.list_th}>Descripción del Equipo</th>
                <th className={styles.list_th}>Marca / Modelo</th>
                <th className={styles.list_th}>Ubicación</th>
                <th className={styles.list_th}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredMachines.map((machine) => (
                <tr key={machine.id} onClick={() => onSelectMachine(machine)} className={styles.list_tr}>
                  <td className={styles.list_td}><span className={styles.list_tdBold}>{machine.code}</span></td>
                  <td className={styles.list_td} style={{fontWeight:'500'}}>{machine.name}</td>
                  <td className={styles.list_td}><span className={styles.list_tdSub}>{machine.brand} ({machine.model})</span></td>
                  <td className={styles.list_td}><span className={styles.list_tdSub}>{machine.area}</span></td>
                  <td className={styles.list_td}>
                    <span className={getStatusClass(machine.status)}>{machine.status}</span>
                  </td>
                </tr>
              ))}
              {filteredMachines.length === 0 && (
                 <tr>
                 <td colSpan="5" className={styles.list_td} style={{textAlign:'center', padding:'2rem', color:'#94a3b8'}}>
                   No se encontraron máquinas con ese criterio de búsqueda.
                 </td>
               </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MachineList;